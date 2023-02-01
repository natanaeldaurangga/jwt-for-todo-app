import React from 'react'
import { logout } from '../auth'
import { Navigate } from 'react-router-dom';

const Logout = () => {
    
    logout();

  return (
    <Navigate to={"/login"} />
  )
}

export default Logout