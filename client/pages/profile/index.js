import Layout from '../../components/layout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getStrapiMedia, getStrapiURL } from '../../utils';

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
      const res = await fetch(getStrapiURL('/users/me?populate=picture'), {
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
      const uploadRes = await fetch(getStrapiURL('/upload'), {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!uploadRes.ok) throw new Error('Upload failed');

      // ดึงข้อมูลใหม่อีกครั้งหลังอัปโหลดเสร็จ
      const updatedUserRes = await fetch(getStrapiURL(`/users/${user.id}?populate=picture`), {
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

  const profileImageURL = user.picture?.formats?.thumbnail
    ? getStrapiMedia(user.picture.formats.thumbnail.url)
    : '/default-profile.jpg';

  console.log("User Picture Data:", user.picture);
  console.log("Profile Image URL:", profileImageURL);

  console.log(profileImageURL)

  return (
    <Layout
      global={global}
      type="restaurant-page"
      pageData={pageData}
      preview={preview}
    >
      <div className="flex justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-200 space-y-6">
          <div className="text-center">
            <img
              src={profileImageURL}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto shadow-lg"
            />
            <div className="mt-4 space-y-4">
              <input 
                type="file" 
                onChange={handleFileChange} 
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
              />
              <button 
                onClick={updateProfilePicture} 
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Update Profile Picture
              </button>
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-2xl font-extrabold text-gray-900">Hello, {user.username}</h1>
            <p className="text-gray-700 text-sm">Email: {user.email}</p>
            <p className="text-gray-700 text-sm">Job: {user.job}</p>
          </div>

          <button 
            onClick={Logout} 
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Logout
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
