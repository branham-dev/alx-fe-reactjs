import { useNavigate, useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
	const { recipeId } = useParams();
	const recipe = useRecipeStore((state) =>
		state.recipes.find((recipe) => Number(recipe.id) === Number(recipeId)),
	);
	const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

	const navigate = useNavigate();

	if (!recipe) {
		return (
			<div>
				<h1>Recipe Not Found</h1>
				<button onClick={() => navigate("/")}>Go Back</button>
			</div>
		);
	}

	return (
		<div>
			<h1>{recipe.title}</h1>
			<p>{recipe.description}</p>
			{/* Render EditRecipeForm and DeleteRecipeButton here */}
			<div>
				<button onClick={() => navigate(`/details/${recipe.id}/edit`)}>Edit</button>
				<DeleteRecipeButton id={Number(recipeId)} />
			</div>
		</div>
	);
};
export default RecipeDetails;
