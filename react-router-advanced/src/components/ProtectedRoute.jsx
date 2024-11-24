// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Exemple de fonction d'authentification (à adapter à votre logique)
const isAuthenticated = () => {
  // Remplacez cette logique par votre propre méthode de vérification d'authentification
  // Exemple : vérifier un token dans le localStorage ou un contexte d'utilisateur
  return localStorage.getItem('userToken') !== null; // Exemple
};

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Si l'utilisateur est authentifié, affichez les enfants (les composants demandés)
  return children;
};

export default ProtectedRoute;
