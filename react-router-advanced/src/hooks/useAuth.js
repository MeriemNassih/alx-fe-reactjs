// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

// Ce hook vérifie si l'utilisateur est authentifié en consultant le localStorage
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Vérifier si un token d'utilisateur existe dans le localStorage
    const token = localStorage.getItem('userToken');
    if (token) {
      setIsAuthenticated(true); // Utilisateur authentifié
    } else {
      setIsAuthenticated(false); // Utilisateur non authentifié
    }
  }, []);

  return isAuthenticated;
};

export default useAuth;
