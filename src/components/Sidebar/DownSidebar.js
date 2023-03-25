import React from 'react'
import SubcastList from './SubcastList'

const DownSidebar = () => {
  return (
    <div className='hidden my-4 py-2 lg:inline-flex items-center rounded-lg overflow-hidden flex-col w-64 bg-white' >
        <h3 className='text-center font-semibold p-2' >Communities</h3>
        <SubcastList name="Subcast 1" />
        <SubcastList name="Subcast 2" />
        <SubcastList name="Subcast 3" />
    </div>
  )
}

export default DownSidebar