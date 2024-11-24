// src/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Exemple de liste d'articles de blog
  const blogPosts = [
    { id: 1, title: 'Introduction à React' },
    { id: 2, title: 'Routage dynamique avec React Router' },
    { id: 3, title: 'Gestion des états dans React' },
  ];

  return (
    <div>
      <h1>Bienvenue sur le blog</h1>
      <ul>
        {blogPosts.map(post => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
