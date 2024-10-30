import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Link from "next/link"
import { useRouter } from "next/router";

function All_restaurants({ global, pageData, preview }) {
    const router = useRouter();
    const[data, setData] = useState(null);
    const[error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            router.push('Login');
            return;
        }

        fetch('http://localhost:1337/api/restaurants')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network ERROR!!!!');
            }
            return response.json();
        })
        .then((result) => {
            console.log('API Response:', result);
            setData(result.data || []);
        })
        .catch((error) => {
            setError(error);
        });
    }, []);

    if(error){
        return <div>Error: {error.message}</div>;        
    }

    if(!data){
        return <Layout global={global} type="restaurant-page" pageData={pageData} preview={preview}>Loading...</Layout>;
    }

    if(data.length === 0){
        return(
            <Layout global={global} type="restaurant-page" pageData={pageData} preview={preview}>
                <div className="ml-10">
                    <h1>No restaurants found</h1>
                </div>
            </Layout>
        );
    }

    return(
        <Layout
            global={global}
            type="restaurant-page"
            pageData={pageData}
            preview={preview}
        >
            <div className="ml-10">
                <h1>Welcome to All restaurant</h1>
                <div className='grid grid-cols-3 gap-2'>
                    {
                        data.map((item) => (
                            <div key={item.id} className='rounded-md border-2 border-black'>
                                <div>ID: {item.id}</div>
                                <div>{item.attributes.name}</div>
                                <Link href="/slug" className="ring-2 ring-black bg-slate-800 text-white">See review</Link>
                            </div>  
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default All_restaurants;