import React from 'react';
import Link from 'next/link';
import Layout from '../../components/layout';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getStrapiURL } from '../../utils';

const Login = ({ global, pageData, preview }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      router.push('/profile')
      return;
    }
  })
  
  const Submit = async (e) => {
    e.preventDefault();

    const res = await fetch(getStrapiURL('/auth/local'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ identifier, password }),
    });

    const data = await res.json();

    if(res.ok) {
      localStorage.setItem('token', data.jwt);
      router.push('/profile');
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
      <div className="flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div>
            <h1 className="text-center text-3xl font-extrabold text-gray-900">LOGIN</h1>
          </div>
          <form onSubmit={Submit} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input 
                  type="text" 
                  placeholder="Enter your email" 
                  value={identifier} 
                  onChange={(e) => setIdentifier(e.target.value)} 
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                />
              </div>
            </div>

            <div className="flex items-center justify-between space-x-4">
              <button 
                type="submit" 
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Login
              </button>
              <Link href="/register">
                <a 
                  className="w-full text-center bg-white text-gray-800 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Register
                </a>
              </Link>
            </div>
          </form>

          {error && (
            <div className="mt-4 text-center">
              <p className="text-red-500 text-sm">{error}</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Login;
