import React from 'react'
import DownSidebar from './DownSidebar'
import UpperSidebar from './UpperSidebar'

const Sidebar = () => {
  return (
    <>
        <div className='flex sticky my-2 items-center flex-col  min-w-fit w-72'>
          <UpperSidebar/>
          <DownSidebar/>
        </div>
    </>
  )
}

export default Sidebar


    // <div className='hidden lg:inline-flex' >
    //     <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer' >

    //     </div>
    // </div>