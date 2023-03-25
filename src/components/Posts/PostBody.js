import React from 'react'
import { Link } from 'react-router-dom'

const PostBody = ({title, description, id}) => {
  return (
    <div className='' >
        <Link to={`/post/${id}`} >
          <h1 className='text-3xl font-semibold pt-1 pb-3'>{title}</h1>
        </Link>
        <h4 className='mb-2'>{description}</h4>
    </div>
  )
}

export default PostBody