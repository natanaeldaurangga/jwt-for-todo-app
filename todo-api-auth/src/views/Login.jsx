import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
import InputText from '../components/Input'
import { Input } from 'postcss';
import { checkUser, handleSubmit, setAuthToken } from '../auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/Logo';
import axios from 'axios';
import ErrorMessage from '../util/ErrorMessage';
import AniLoad from '../assets/AniLoad';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadLogo, setLoadLogo] = useState("Login");
  const navigate = useNavigate();
  const btnRef = useRef();

  const errComp = {
    'noErr': <></>,
    'err': <ErrorMessage msg={"Email or password is wrong!"} />
  };

  const [errDisp, setErrDisp] = useState('noErr');

  const onEmailChange = e => {
    setEmail(e.target.value);
  }

  const onPasswordChange  = e => {
    setPassword(e.target.value);
  }

  const loadingAnimation = () => {
    setLoadLogo(<AniLoad />);
  }

  const onSubmitLogin = async (e) => {
    e.preventDefault();
    loadingAnimation();
    let result = await handleSubmit(email, password);  
    if(result.status == axios.HttpStatusCode.Ok){
      localStorage.setItem("jwt-token", result.data.token);
      setAuthToken(result.data.token);
      navigate("/", {replace: true});
    }

    if(result.status == axios.HttpStatusCode.Forbidden) {
      setErrDisp('err');
      setEmail("");
      setPassword("");
    }

    setLoadLogo("Login");
  }

  return (
    <div className='h-screen grid place-items-center bg-sky-200'>
        <div className='shadow-md shadow-black rounded-md min-h-[350px] w-[300px] flex flex-col items-center justify-start gap-5 py-3 px-5 bg-white'>
            <h1 className='text-2xl'>Welcome</h1>
            { errComp[errDisp] }
            <form onSubmit={onSubmitLogin} className='flex flex-col w-full gap-2'>
                <label htmlFor="email" className='text-base '>Email</label>
                <InputText type={"email"} id={"email"} onChange={onEmailChange} />
                <label htmlFor="email" className='text-base'>Password</label>
                <InputText type={"password"} id={"password"} onChange={onPasswordChange} />
                <button ref={btnRef} type='submit' className='text-white px-2 py-3 bg-green-700 rounded-md flex justify-center items-center'>
                  {loadLogo}
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login