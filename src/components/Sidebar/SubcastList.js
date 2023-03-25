import React from 'react'

const SubcastList = ({name}) => {
  return (
    <div className='flex p-2'>
        <a href={"/"}>
          <p className='pt-2'>c/{name}</p>
        </a>
        <div className='mx-8' >
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full" >
                Join
            </button>
        </div>
    </div>
  )
}

export default SubcastList