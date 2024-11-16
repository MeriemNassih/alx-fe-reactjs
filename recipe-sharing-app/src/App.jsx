import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './components/recipeStore';
import React, { useEffect } from 'react';



const App = () => {
  const { generateRecommendations } = useRecipeStore(state => ({
    generateRecommendations: state.generateRecommendations,
  }));

  useEffect(() => {
    generateRecommendations(); 
  }, [generateRecommendations]);
  return (
    <Router>
      <div>
        <h1>Application de partage de recettes</h1>
        <AddRecipeForm />
        <SearchBar />
        <FavoritesList />
        <RecommendationsList />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
