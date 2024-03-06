import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from "react-router-dom"

function PostCard({
    $id,title,featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full rounded-xl sm:bg-gray-100 bg-gray-100 px-5 py-3 sm:px-4 sm:py-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage) }  alt="" className=' border-[1px] border-gray-100 rounded-xl'/>
            </div>
            <h2 className='sm:text-xl  text-lg font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard