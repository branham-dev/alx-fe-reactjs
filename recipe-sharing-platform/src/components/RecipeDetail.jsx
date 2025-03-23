import { useParams } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
	const { id } = useParams();

	const recipe = data.find((recipe) => recipe.id === Number(id));
	// console.log(recipe);

	return (
		<>
			<div className='text-center mt-16'>
				<article className='bg-[#262424] w-[75%] m-auto py-8 px-6 text-[#eee5da]'>
					<h1 className='text-2xl mb-4'>{recipe.title}</h1>
					<p>{recipe.summary}</p>
				</article>
			</div>
		</>
	);
};
export default RecipeDetail;
