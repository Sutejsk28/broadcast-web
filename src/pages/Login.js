import React, {useState, useRef} from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Navigate, useNavigate  } from 'react-router-dom';
import {GrGoogle} from 'react-icons/gr'
import { login } from '../redux/actions/auth';
import Header from '../components/Header/Header';

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

const Login = () => {
      
    let navigate = useNavigate();
    
    //const form = useRef();
    const checkBtn = useRef();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    
    const { user: currentUser } = useSelector((state) => state.auth);
    const { message } = useSelector(state => state.message);
    
    const dispatch = useDispatch();
    
    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };
    
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    
    const handleLogin = (e) => {
        e.preventDefault();
    
        setLoading(true);
        console.log(username, password);
        //form.current.validateAll();
        
        dispatch(login(username, password))
            .then(() => {
            navigate("/");
            console.log("success");
            })
            .catch(() => {
                setLoading(false);
            });
        setLoading(false);
    };
    
    // if (currentUser) {
    //     return <Navigate to="/profile" />;
    // }
      
  return (
    <>
        <div className='grid place-items-center'>
            <div className='inline-flex flex-col border py-4 border-slate-300 rounded-lg shadow-md m-16 items-center' >
                <div className=' inline-flex flex-col p-12 items-center ' >
                    <h1 className='text-3xl m-2'>Log in</h1>
                    <p className='text-center text-xs'>By Logging in you agree to user terms and conditions</p>
                </div>
                <button className='flex border-slate-400 hover:bg-slate-200 border rounded-3xl p-3 ' >
                    <a className='flex ' href='/'>
                        <GrGoogle className='mr-4 -ml-1 mt-1 '  />
                        Continue with google
                    </a>
                </button>
                <p className='m-4' >OR</p>
                <form action="/login" method="POST" onSubmit={handleLogin}>
                    <div className='flex flex-col items-center m-4' >
                        <input type="text"
                            onChange={onChangeUsername}
                            validations={[required]}
                            className='border border-slate-400 py-2 px-4  m-2 rounded-md' 
                            placeholder='Username' 
                            name="username" 
                            value={username}
                        />
                        <input 
                            type="password"
                            onChange={onChangePassword}
                            validations={[required]}
                            className='border border-slate-400 py-2 px-4  m-2 rounded-md' 
                            placeholder='password'
                            name="password" 
                            value={password} 
                        />
                        <button 
                            type="submit" 
                            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm my-4 px-7 py-2.5 text-center mr-2 mb-2 "
                            disabled={loading}
                        >
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            Login
                        </button>
                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                        <button style={{ display: "none" }} ref={checkBtn} />
                    </div>
                    
                </form>
            </div>
        </div>
    </>
  )
}

export default Login