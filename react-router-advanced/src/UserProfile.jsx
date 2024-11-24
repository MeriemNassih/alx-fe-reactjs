// src/UserProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { username } = useParams(); // Extraction du paramètre 'username'
  return <h1>Profil de l'utilisateur : {username}</h1>;
};

export default UserProfile;
