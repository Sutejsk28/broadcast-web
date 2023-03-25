import { Link } from 'react-router-dom'
import React from 'react'

const Comment = ({postId}) => {
  return (
    <div className='p-2'>
        <Link to="/u/username">
          <a>
            <h6 className='text-lg'>u/username</h6>
          </a>
        </Link>
        <p className='text-slate-500 text-sm'>time</p>
        <p className='pt-4 pb-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
        <hr/>
    </div>
  )
}

export default Comment