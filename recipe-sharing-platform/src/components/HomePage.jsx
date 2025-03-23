import data from "../data.json";
import { useEffect } from "react";

const HomePage = () => {
	// const fetchRecipes = async () => {
	// 	const response = await fetch("../data.json");
	// 	const data = response.json();
	// 	console.log(data);
	// };

	useEffect(() => {
		// fetchRecipes();
		console.log(data);
	}, []);

	return (
		<>
			<header className='bg-[url(./assets/images/home-recipe.jpg)] w-full min-h-[40vh] sm:min-h-[60vh]  bg-cover bg-no-repeat'>
				Hello
			</header>
			<section className='w-full flex flex-col items-center mt-12 gap-8'>
				{data.map((recipe) => (
					<article
						key={recipe.id}
						className='py-6 px-4 bg-[#eee5da] rounded-md text-[#262424] w-[80%] hover:shadow-lg'>
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
