// src/Profile.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProfileDetails from '../ProfileDetails';
import ProfileSettings from '../ProfileSettings';

const Profile = () => {
  return (
    <div>
      <h1>Page de Profil</h1>
      <nav>
        <Link to="details">Détails du Profil</Link> | 
        <Link to="settings">Paramètres du Profil</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;
