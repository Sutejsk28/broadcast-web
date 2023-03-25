import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../images/solar-system.jpg'

const UpperSidebar = () => {
  return (
    <div className='hidden lg:inline-flex items-center rounded-lg overflow-hidden flex-col w-64 bg-white'>
        <img src={img1} />
        <p className='text-center' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>.
        <div className='flex flex-col' >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 m-2 rounded">
                <Link to='/create-post' >
                  Create Post
                </Link>
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 m-2 border border-blue-500 hover:border-transparent rounded">
                <Link to='/create-subcast'>
                  Create Subcast
                </Link>
            </button>
        </div>
    </div>
  )
}

export default UpperSidebar