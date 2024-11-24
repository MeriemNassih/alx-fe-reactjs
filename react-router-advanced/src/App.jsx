// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Profile from './components/Profile';
import UserProfile from './UserProfile';
import NotFound from './NotFound';
import ProtectedRoute from './ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simuler l'authentification

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="profile/*"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
         {/* Route dynamique pour afficher un article de blog spécifique */}
         <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="profile/:username" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
