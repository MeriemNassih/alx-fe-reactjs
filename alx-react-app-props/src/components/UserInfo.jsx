import React, { useContext } from 'react';
import { UserContext } from '../UserContext';  
import UserDetails from './UserDetails';

function UserInfo() {
  const userData = useContext(UserContext);  

  return <UserDetails userData={userData} />; 
}

export default UserInfo;
