import React from 'react'

import PostBody from './PostBody'
import PostHeader from './PostHeader'
import PostVote from './PostVote'
import Comment from './Comment'

const PostDetails = () => {
  return (
      <div className='grid place-items-center my-4 m-6'>
        <div className='inline-flex p-4 my-2  shadow-md border m-6 mr-20 rounded-lg bg-white mx-8  ' >
            <PostVote count={2} />
            <div className='flex flex-col'>
                <PostHeader subcastName="Subcast" username='sutej' />
                <hr className='my-2' />
                <PostBody title='Title' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' />
                <hr className='my-2' />
                <p className='text-gray-400' >Leave a Comment</p>
                <hr className='my-2'/>
                <textarea placeholder='Your Thoughts?' className='border border-slate-400 p-2' />
                <div className='flex items-center justify-end min-w-fit space-x-4'>
                  <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 m-2 rounded' >
                    Comment
                  </button>
                </div>
                <Comment postId="2" />
                <Comment postId="2" />
                <Comment postId="2" />

                <Comment postId="2" />
            </div>
        </div>
      </div>
  )
}

export default PostDetails