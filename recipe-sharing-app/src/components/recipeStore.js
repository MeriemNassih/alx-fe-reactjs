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
}));

export { useRecipeStore };
