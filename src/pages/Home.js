import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from '../components/Posts/Posts'
import Sidebar from '../components/Sidebar/Sidebar'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect( () => {
        async function fetchData() {
            try {
                const res = await axios.get('http://localhost:8080/api/posts'); 
                setIsLoading(false)
                setPosts(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    },[])

    return (
        <>
            {isLoading ? (
                <h2 className='flex justify-center' >Loading...</h2>
            ): 
            (
                <main className='h-full'>
                    <div className='flex justify-center bg-gray-100 py-4 px-24' >
                        <div className='flex' >
                            <Posts posts={posts}/>
                        </div>
                        <div className='flex'>
                            <Sidebar />
                        </div>
                    </div>
                </main>
            )
            }
        </>
    )
}

export default Home