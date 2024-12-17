import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

// Fonction pour effectuer la recherche avancée
export const fetchAdvancedSearch = async ({ username, location, minRepos }) => {
  // Construction de la requête
  const query = [];
  if (username) query.push(username);
  if (location) query.push(`location:${location}`);
  if (minRepos) query.push(`repos:>${minRepos}`);

  try {
    // Appel API avec la requête construite
    const response = await axios.get(`${BASE_URL}?q=${query.join('+')}`);
    return response.data; // Renvoie les résultats de l'API
  } catch (error) {
    throw new Error('Erreur lors de la recherche avancée.');
  }
};
