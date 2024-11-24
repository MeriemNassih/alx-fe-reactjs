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
  // Utilisation de useQuery avec les options de mise en cache et actualisation sur focus de fenêtre
  const { data, error, isLoading, isFetching, refetch, isError } = useQuery('posts', fetchPosts, {
    staleTime: 60000, // Données considérées comme fraîches pendant 1 minute (60 000 ms)
    keepPreviousData: true, // Garder les données précédentes pendant que les nouvelles données sont récupérées
    cacheTime: 300000, // Garder les données en cache pendant 5 minutes (300 000 ms)
    refetchOnWindowFocus: true, // Refetch des données lorsque la fenêtre reprend le focus
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Vérifier si une erreur est survenue
  if (isError) {
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
