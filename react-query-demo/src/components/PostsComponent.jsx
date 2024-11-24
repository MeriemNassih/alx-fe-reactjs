// src/components/PostsComponent.jsx
import React from 'react';
import { useQuery } from 'react-query';

// Fonction pour récupérer les posts depuis l'API
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

const PostsComponent = () => {
  // Utilisation de useQuery avec les options de mise en cache
  const { data, error, isLoading, isFetching, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // Données considérées comme fraîches pendant 1 minute (60 000 ms)
    keepPreviousData: true, // Garder les données précédentes pendant que les nouvelles données sont récupérées
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      {isFetching && <p>Updating...</p>}
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
