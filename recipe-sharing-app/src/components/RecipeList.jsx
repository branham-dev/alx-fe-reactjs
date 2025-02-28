import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore";

const RecipeList = () => {
	const recipes = useRecipeStore((state) => state.recipes);
	const searchTerm = useRecipeStore((state) => state.searchTerm);
	const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

	if (searchTerm !== "") {
		return (
			<div>
				{filteredRecipes.map((recipe) => (
					<div key={recipe.id}>
						<h3>{recipe.title}</h3>
						<p>{recipe.description}</p>
						<Link to={`details/${recipe.id}`}>
							<button>Details</button>
						</Link>
					</div>
				))}
			</div>
		);
	}

	return (
		<div>
			{recipes.map((recipe) => (
				<div key={recipe.id}>
					<h3>{recipe.title}</h3>
					<p>{recipe.description}</p>
					<Link to={`details/${recipe.id}`}>
						<button>Details</button>
					</Link>
				</div>
			))}
		</div>
	);
};
export default RecipeList;
