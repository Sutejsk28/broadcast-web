import React from 'react'
import {BiUpArrowAlt, BiDownArrowAlt} from 'react-icons/bi'

const PostVote = ({count}) => {
  return (
        <div className='m-4' > 
            <button>
                <BiUpArrowAlt size={24}/>
            </button>
            <p className='mx-2'>{count}</p>
            <button>
                <BiDownArrowAlt size={24} />
            </button>
        </div>
  )
}

export default PostVote