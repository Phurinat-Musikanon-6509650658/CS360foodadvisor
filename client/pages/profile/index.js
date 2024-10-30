import Layout from '../../components/layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Profile = ({ global, pageData, preview }) => {
  const [newPicture, setPicture] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/Login');
      return;
    }

    const fetchUser = async () => {
      const res = await fetch('http://localhost:1337/api/users/me?populate=picture', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        console.log(res);
        const userData = await res.json();
        setUser(userData);
      } else {
        localStorage.removeItem('token'); 
        router.push('/login');
      }
    };

    fetchUser();
  }, [router]);

  const handleFileChange = (e) => {
    setPicture(e.target.files[0]); // เก็บไฟล์ที่เลือก
  };

  const updateProfilePicture = async () => {
    if (!newPicture) {
      setError('Please select a file first.');
      return;
    }

    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('files', newPicture); // รูปใหม่ที่ต้องการอัปโหลด
    formData.append('ref', 'plugin::users-permissions.user'); // อ้างอิงถึง Model User
    formData.append('refId', user.id); // ID ของผู้ใช้
    formData.append('field', 'picture'); // ฟิลด์ที่เราต้องการอัปเดต

    try {
      const uploadRes = await fetch('http://localhost:1337/api/upload', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!uploadRes.ok) throw new Error('Upload failed');

      // ดึงข้อมูลใหม่อีกครั้งหลังอัปโหลดเสร็จ
      const updatedUserRes = await fetch(`http://localhost:1337/api/users/${user.id}?populate=picture`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const updatedUser = await updatedUserRes.json();
      setUser(updatedUser); // อัปเดต state ของผู้ใช้
      setError(null);
    } catch (err) {
      setError('Failed to update profile picture.');
      console.error(err);
    }
  };

  const Logout = () => {
    localStorage.removeItem('token');
    router.push('/Login');
  };

  if (!user) return <p>Loading...</p>;

  const profileImageURL = user.picture
    ? `http://localhost:1337${user.picture.formats.thumbnail.url}`
    : '/default-profile.png';

  console.log(profileImageURL)

  return (
    <Layout
      global={global}
      type="restaurant-page"
      pageData={pageData}
      preview={preview}
    >
      <div className="ml-10">
        <img
          src={profileImageURL}
        />
        <div className="mt-4">
          <input type="file" onChange={handleFileChange} />
          <button onClick={updateProfilePicture} className="ring-2 ring-black bg-slate-800 text-white mt-2">
            Update Profile Picture
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
        <h1>Welcome, {user.username}</h1>
        <p>Email: {user.email}</p>
        <p>Job: {user.job}</p>
        <button onClick={Logout} className="ring-2 ring-black bg-slate-800 text-white">Logout</button>
      </div>
    </Layout>
  );
};

export default Profile;
