import { useNavigate } from "react-router-dom";
import data from "../data.json";
import { useEffect, useState } from "react";

const HomePage = () => {
	// const fetchRecipes = async () => {
	// 	const response = await fetch("../data.json");
	// 	const data = response.json();
	// 	console.log(data);
	// };
	const [recipes, setRecipes] = useState([]);
	useEffect(() => {
		// fetchRecipes();
		setRecipes(data);
	}, []);

	const navigate = useNavigate();

	return (
		<>
			<header className='bg-[url(./assets/images/home-recipe.jpg)] w-full min-h-[40vh] sm:min-h-[60vh]  bg-cover bg-no-repeat'>
				Hello
			</header>
			<section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center mt-12 gap-8'>
				{recipes.map((recipe) => (
					<article
						key={recipe.id}
						className='py-6 px-4 bg-[#eee5da] rounded-md text-[#262424] w-[80%] hover:shadow-lg'
						onClick={() => navigate(`/recipe/${recipe.id}`)}>
						<img src={recipe.image} alt='recipe' />
						<h2 className=' text-2xl'>{recipe.title}</h2>
						<p>{recipe.summary}</p>
					</article>
				))}
			</section>
		</>
	);
};
export default HomePage;
