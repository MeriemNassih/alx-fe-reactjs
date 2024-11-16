import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [
    { id: 1, title: 'Recette 1', description: 'Description de la recette 1' },
    { id: 2, title: 'Recette 2', description: 'Description de la recette 2' },
  ], 
  searchTerm: '', 
  setSearchTerm: (term) => set({ searchTerm: term }), 
  filteredRecipes: [], 
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) 
      ),
    })),
    favorites: [],  // Liste des recettes favorites
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],  // Liste des recommandations
  generateRecommendations: () => set(state => {
    // Génération simple de recommandations basée sur les favoris
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
