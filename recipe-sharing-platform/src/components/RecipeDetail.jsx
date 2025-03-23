import { useParams } from "react-router-dom";
import data from "../data.json";
import { useEffect, useState } from "react";

const RecipeDetail = () => {
	const { id } = useParams();
	const [recipe, setRecipe] = useState({});

	useEffect(() => {
		const recipeData = data.find((recipe) => recipe.id === Number(id));
		setRecipe(recipeData);
		// console.log(recipe);
	}, []);

	return (
		<>
			<div className='text-center mt-16'>
				<article className='bg-[#262424] w-[75%] m-auto py-8 px-6 text-[#eee5da]'>
					<h1 className='text-2xl mb-4'>{recipe.title}</h1>
					<p>{recipe.summary}</p>
					<img src={recipe.image} alt='recipe' />

					<h2>Ingredients</h2>
					<h2>instructions</h2>
					{/* <h2>Ingredients</h2> */}
				</article>
			</div>
		</>
	);
};
export default RecipeDetail;
