// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Importer le hook useAuth

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Utiliser le hook useAuth pour vérifier l'authentification
  const location = useLocation();

  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si l'utilisateur est authentifié, afficher les enfants (les composants demandés)
  return children;
};

export default ProtectedRoute;
