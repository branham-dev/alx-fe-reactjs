import { useNavigate, useParams } from "react-router-dom";
import useRecipeStore from "./recipeStore";
import { useEffect, useState } from "react";

const EditRecipeForm = () => {
	const { recipeId } = useParams();
	const recipe = useRecipeStore((state) =>
		state.recipes.find((recipe) => Number(recipe.id) === Number(recipeId)),
	);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const updateRecipe = useRecipeStore((state) => state.updateRecipe);

	const navigate = useNavigate();

	useEffect(() => {
		setTitle(recipe.title);
		setDescription(recipe.description);
	}, [recipe.title, recipe.description]);

	const handleSubmit = (event) => {
		event.preventDefault();
		updateRecipe(Number(recipeId), { title, description });
		setTitle("");
		setDescription("");
		navigate(-1);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor=''>Title</label>
			<input
				type='text'
				value={title}
				placeholder='title'
				onChange={(e) => setTitle(e.target.value)}
			/>
			<label htmlFor=''>Description</label>
			<textarea
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder='description'></textarea>
			<button type='submit'>submit</button>
		</form>
	);
};
export default EditRecipeForm;
