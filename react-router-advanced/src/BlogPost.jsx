// src/BlogPost.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  // Récupérer le paramètre dynamique 'id' de l'URL
  const { id } = useParams();

  return (
    <div>
      <h1>Article de blog {id}</h1>
      <p>Contenu de l'article {id}...</p>
    </div>
  );
};

export default BlogPost;
