import React, { useEffect } from 'react'
import reactLogo from "./assets/react.svg";
import Todos from './components/Todos';
import { checkUser } from './auth';
import { Link, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  
  if(!checkUser()){
    return <Navigate replace to={"/logout"} />
  } 

  let todos = useSelector(state => state.todos.value);

  return (
    <div className='flex flex-col items-center gap-3'>
      <img className='w-16 h-16 mt-5 animate-spin-slow' src={reactLogo} alt="" />
      <h1 className='text-5xl font-semibold tracking-widest'>Todos</h1>
      <Todos todos={todos} />
      <Link to={"/logout"} className='fixed bottom-10 right-10'>
        <button className='bg-red-500 text-white text-lg rounded-full h-16 w-16 hover:bg-red-600 active:bg-red-700'>
          <FontAwesomeIcon icon={faSignOut} />
        </button>
      </Link>
    </div>
  )
}

export default App