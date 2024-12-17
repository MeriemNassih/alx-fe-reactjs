import React, { useState } from 'react';
import { fetchAdvancedSearch } from './services/githubService';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const data = await fetchAdvancedSearch({ username, location, minRepos });
      setResults(data.items); // Les résultats sont dans la propriété "items"
    } catch (err) {
      setError('Erreur lors de la recherche.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* Champs pour les critères de recherche */}
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Localisation"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Nombre minimum de dépôts"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>

      {/* Affichage des résultats */}
      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}
      {results.length > 0 && (
        <ul>
          {results.map((user) => (
            <li key={user.id}>
              <p>{user.login}</p>
              <p>{user.location || 'Localisation inconnue'}</p>
              <a href={user.html_url}>Profil GitHub</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
