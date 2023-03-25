import React, { useCallback, useEffect, useState } from 'react'
import {HiSearch} from 'react-icons/hi'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineUser, AiOutlineHome} from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import img from '../../images/Logo-4.png'
import imgUser from '../../images/default-user-icon.jpg'
import HeaderCenterIcons from './HeaderCenterIcons'
import { logout } from "../../redux/actions/auth";
import { useLocation } from 'react-router-dom'
import { clearMessage } from '../../redux/actions/message'

const Header = () => {

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
  
    let location = useLocation();
  
    useEffect(() => {
      if (["/login", "/register"].includes(location.pathname)) {
        dispatch(clearMessage());
      }
    }, [dispatch, location]);

    const logoutHandler = useCallback(() => {
        dispatch(logout());
      }, [dispatch]);

  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16' >
        <div className='flex'>
            <Link to='/'>
                <div className='flex rounded overflow-hidden' >
                    <img src={img} height={40} width={40} />
                </div>
            </Link>
            <div className='flex items-center space-x-2 px-8 ml-8 sm:rounded-full sm:px-2 sm:py-2 bg-gray-100 text-gray-600 ' >
                <HiSearch size={32} />
                <input className='hidden lg:inline-flex border-slate-100 bg-transparent ml-4 border-none focus:ring-0 focus:outline-none focus:outline-hidden' 
                    type="text" 
                    placeholder='Search Broadcast'
                />
            </div>
        </div>
        <div className='flex flex-grow justify-center mx-4' >
            <HeaderCenterIcons >
                <Link to='/' >
                    <AiOutlineHome className='mx-auto' size={24} />
                </Link>
            </HeaderCenterIcons>

            <HeaderCenterIcons >
                <Link to='/user' >
                    <AiOutlineUser className='mx-auto' size={24} />
                </Link>
            </HeaderCenterIcons>

            <HeaderCenterIcons >
                <Link to='/' >
                    <IoMdNotificationsOutline className='mx-auto' size={24} />
                </Link>
            </HeaderCenterIcons>

        </div>
        {
            currentUser ?
            <div className='flex items-center justify-end min-w-fit space-x-4'>
                <img src={imgUser} height={40} width={40} />
                <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-4 max-w-xs' >
                    {currentUser.username}
                </p>
                <button 
                    className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-4 max-w-xs' onClick={logoutHandler} >
                        logout  
                </button>
            </div>
            :
            <div>
                <button 
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2"
                    >
                        <Link to='/login' >Login</Link>
                </button>
                <button
                    className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-2.5 text-center mr-2 mb-2"
                    >
                        <Link to='/register' >Register</Link>
                </button>
            </div>
        }
    </div>

  )
}

export default Header