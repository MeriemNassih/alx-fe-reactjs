
import React, { createContext, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const userData = { name: 'Jane Doe', email: 'jane.doe@example.com' };

  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
