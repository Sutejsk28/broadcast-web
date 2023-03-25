import React from 'react'

const HeaderCenterIcons = ({children}) => {
  return (
          <div className='flex items-center' >
              <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer' >
                  {children}
              </div>
          </div>
  )
}

export default HeaderCenterIcons