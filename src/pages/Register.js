import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import {GrGoogle} from 'react-icons/gr'

import { isEmail } from "validator";

import { register } from '../redux/actions/auth';


const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  
  const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
      return (
        <div className="alert alert-danger" role="alert">
          The username must be between 3 and 20 characters.
        </div>
      );
    }
  };
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };  

const Register = () => {

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector(state => state.message);
  const dispatch = useDispatch();

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setSuccessful(false);
    console.log(username, email, password);
      dispatch(register(username, email, password))
        .then(() => {
          setSuccessful(true);
          redirect("/login")
        })
        .catch(() => {
          setSuccessful(false);
        });
    
  };

  return (
    <>
        <div className='grid place-items-center'>
            <div className='inline-flex flex-col border py-4 border-slate-300 rounded-lg shadow-md m-16 items-center' >
                <div className=' inline-flex flex-col p-12 items-center ' >
                    <h1 className='text-3xl m-2'>Sign up</h1>
                    <p className='text-center text-xs'>By Signing up you agree to user terms and conditions</p>
                </div>
                <button className='flex border-slate-400 hover:bg-slate-200 border rounded-3xl p-3 ' >
                    <a className='flex  '>
                        <GrGoogle className='mr-4 -ml-1 mt-1 '  />
                        Sign in with google
                    </a>
                </button>
                <p className='m-4' >OR</p>
                {!successful && (
                <form action="/register" method="POST" onSubmit={handleRegister}>
                    <div className='flex flex-col items-center m-4' >
                        <input 
                            onChange={onChangeEmail}
                            validations={[required, validEmail]}
                            type='email' 
                            className='border border-slate-400 py-2 px-4  m-2 rounded-md' placeholder='email' 
                            name="email" 
                            value={email}
                            />
                        <input 
                            onChange={onChangeUsername}
                            validations={[required, vusername]}
                            type='text'
                            className='border border-slate-400 py-2 px-4  m-2 rounded-md' 
                            placeholder='Username' 
                            name="username" 
                            value={username} 
                            />
                        <input 
                            onChange={onChangePassword}
                            validations={[required, vpassword]}
                            type="password"
                            className='border border-slate-400 py-2 px-4  m-2 rounded-md' 
                            placeholder='password'
                            name="password" 
                            value={password}
                        />
                    </div>
                    <button 
                        type='submit' 
                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm my-4 px-7 py-2.5 text-center mr-2 mb-2 "
                        
                        >
                            Sign Up
                    </button>
                    {message && (
                      <div className="form-group">
                        <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                          {message}
                        </div>
                      </div>
                    )}
                    <button style={{ display: "none" }} ref={checkBtn} />
                </form>
                )}
            </div>
        </div>
    </>
  )
}

export default Register