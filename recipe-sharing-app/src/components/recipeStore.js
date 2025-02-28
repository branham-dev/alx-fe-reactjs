import { create } from "zustand";

const useRecipeStore = create((set) => ({
	recipes: [],
	addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
	setRecipes: (recipes) => set({ recipes }),
	updateRecipe: (id, update) =>
		set((state) => ({
			recipes: state.recipes.map((recipe) => (recipe.id === id ? { ...recipe, ...update } : recipe)),
		})),
	deleteRecipe: (id) =>
		set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),
	searchTerm: "",
	setSearchTerm: (term) =>
		set((state) => ({
			searchTerm: term,
			filteredRecipes: state.recipes.filter((recipe) =>
				recipe.title.toLowerCase().includes(term.toLowerCase()),
			),
		})),
	filteredRecipes: [],
	filterRecipes: () =>
		set((state) => ({
			filteredRecipes: state.recipes.filter((recipe) =>
				recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()),
			),
		})),
	favorites: [],
	addFavorite: (recipeId) => set((state) => ({ favorites: [...state.favorites, recipeId] })),
	removeFavorite: (recipeId) =>
		set((state) => ({
			favorites: state.favorites.filter((id) => id !== recipeId),
		})),
	recommendations: [],
	generateRecommendations: () =>
		set((state) => {
			// Mock implementation based on favorites
			const recommended = state.recipes.filter(
				(recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5,
			);
			return { recommendations: recommended };
		}),
}));

export default useRecipeStore;
