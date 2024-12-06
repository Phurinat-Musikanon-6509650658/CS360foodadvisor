import React from 'react';
import Layout from '../../components/layout';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { getStrapiURL } from '../../utils/index'; 


const Register = ({ global, pageData, preview }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [job, setJob] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();
  
  const Submit = async (e) => {
    e.preventDefault();

    const res = await fetch(getStrapiURL('/auth/local/register'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password, job }),
    });

    const data = await res.json();

    if(res.ok) {
      router.push('/Login');
    } else {
      setError(data.error.message);
    }
  };

  return (
    <Layout
      global={global}
      type="restaurant-page"
      pageData={pageData}
      preview={preview}
    >
        <h1>REGISTER</h1>
        <form onSubmit={Submit} className="rounded-lg border-4 border-black border-double shadow-2xl">
            <label htmlFor="usename">Username:</label><br></br>
            <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} className="border-solid border-2 border-black"></input><br></br>
            <label htmlFor="email">Email:</label><br></br>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-solid border-2 border-black"></input><br></br>
            <label htmlFor="password">Password:</label><br></br>
            <input type="text" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-solid border-2 border-black"></input><br></br>
            <label htmlFor="job">Job:</label><br></br>
            <input type="text" placeholder='Job' value={job} onChange={(e) => setJob(e.target.value)} className="border-solid border-2 border-black"></input><br></br>
            <button type="submit" className="ring-2 ring-black bg-slate-800 text-white">Register</button>
        </form>
        {error && <p>{error}</p>}
    </Layout>   
    );
};

export default Register;
