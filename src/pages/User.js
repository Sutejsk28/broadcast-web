import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const User = () => {

  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div>User</div>
  )
}

export default User