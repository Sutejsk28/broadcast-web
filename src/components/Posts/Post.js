import React from 'react'

import PostBody from './PostBody'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'
import PostVote from './PostVote'

const Post = ({post}) => {
  return (
    <div className='flex flex-grow p-2 my-2 shadow-md mx-8 rounded-lg bg-white border-gray-600' >
        <PostVote count={post.voteCount} />
        <div className='flex flex-col'>
            <PostHeader subcastName={post.subcastName} username={post.userName} duration={post.duration} />
            <hr className='my-2' />
            <PostBody title={post.postName} description={post.description} id={post.id} />
            <hr className='my-2' />
            <PostFooter count={post.commentCount}/>
        </div>
    </div>
  )
}

export default Post