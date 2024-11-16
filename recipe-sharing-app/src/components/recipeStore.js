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

  // Liste des recommandations
  recommendations: [],  
  generateRecommendations: () => set(state => {
    // Génération simple de recommandations basée sur les favoris
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  // Fonction pour ajouter une recette
  addRecipe: (recipe) => set(state => ({
    recipes: [...state.recipes, recipe],
  })),

  // Fonction pour mettre à jour une recette
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    ),
  })),

  // Fonction pour supprimer une recette
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
}));

export { useRecipeStore };
