import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, Login, PostCard} from '../components'
import { Link } from 'react-router-dom';

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-7 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold mb-5 hover:text-red-500 ">
                            <Link to="/login"
                                className="font-medium bg-white rounded-lg px-2 py-1 text-primary transition-all duration-[5000ms] hover:underline"
                            >
                                Login to read posts
                            </Link>
                            </h1>
                         <Login/>
                         </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home