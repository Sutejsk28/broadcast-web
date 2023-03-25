import React from 'react'
import axios from 'axios'

import Post from './Post'

const Posts = ({posts}) => {
  console.log(posts)

  return (
    <>   
        <div className='flex flex-grow justify-center  flex-col' >
          {posts.map( post =>{
            return( <Post post={post} />)
            }) 
          }
        </div>
    </>
  )
}
 

export default Posts