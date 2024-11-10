import { createContext, useContext } from 'react';

// Création du contexte
export const UserContext = createContext();

// Provider pour gérer l'état utilisateur
export const UserProvider = ({ children }) => {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personnalisé pour accéder au contexte
export const useUser = () => useContext(UserContext);
