import React from 'react'

const PostFooter = ({count}) => {
  return (
    <div className='m-2'>
        <a href="/">
          <p>Comments({count})</p>
        </a>
    </div>
  )
}

export default PostFooter