import React, { useEffect, useState } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

function MyPosts() {
    const [posts, setPosts] = useState([]);
    const userData = useSelector((state) => state.auth.userData);

    useEffect(() => {
        if (!userData) return;
        appwriteService.getMyPosts(userData.$id).then((posts) => {

            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, [userData]);
    if (posts.length === 0) {
      return (
        <div className="w-full h-screen flex justify-center items-center">
          <img
            alt="Logo"
            src="/images/suchEmpty.png"
            className="object-contain"
          />
        </div>
      );
    }
    
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full md:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default MyPosts;
