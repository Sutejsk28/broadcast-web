import React from 'react'
import { Link } from 'react-router-dom'

const PostHeader = ({subcastName, username, duration}) => {
  return (
    <div className='flex'>
        <div className='p-2 font-semibold'>
            <Link to={`/c/${subcastName}`}>
              <h1>c/{subcastName}</h1>
            </Link>
        </div>
        <div className='text-gray-600 text-sm pt-3 px-4'>
            <Link to={`/u/${username}`}>
              <h6>Posted by u/{username}</h6>
            </Link>
        </div>
        <div className='text-gray-600 text-sm pt-3 px-4'>
            <h4>{duration}</h4>
        </div>
    </div>
  )
}

export default PostHeader