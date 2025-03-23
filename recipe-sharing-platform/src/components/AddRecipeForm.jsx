import { useState } from "react";

const AddRecipeForm = () => {
	const [formData, setFormData] = useState({
		title: "",
		ingredients: "",
		steps: "",
	});
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		const newErrors = {};
		if (!formData.title.trim()) newErrors.title = "Recipe title is required";
		if (!formData.ingredients.trim()) {
			newErrors.ingredients = "Ingredients are required";
		} else if (formData.ingredients.split(",").length < 2) {
			newErrors.ingredients = "Include at least two ingredients";
		}
		if (!formData.steps.trim()) newErrors.steps = "Preparation steps are required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			console.log("Submitting recipe:", formData);
			setFormData({ title: "", ingredients: "", steps: "" });
			setErrors({});
		}
	};

	return (
		<div className='max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10'>
			<h2 className='text-xl font-bold mb-4'>Add a New Recipe</h2>
			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label className='block text-gray-700 font-semibold'>Recipe Title</label>
					<input
						type='text'
						name='title'
						value={formData.title}
						onChange={handleChange}
						className='w-full p-2 border rounded-md focus:ring focus:ring-blue-300'
					/>
					{errors.title && <p className='text-red-500 text-sm'>{errors.title}</p>}
				</div>

				<div>
					<label className='block text-gray-700 font-semibold'>Ingredients (comma-separated)</label>
					<textarea
						name='ingredients'
						value={formData.ingredients}
						onChange={handleChange}
						className='w-full p-2 border rounded-md focus:ring focus:ring-blue-300'
					/>
					{errors.ingredients && <p className='text-red-500 text-sm'>{errors.ingredients}</p>}
				</div>

				<div>
					<label className='block text-gray-700 font-semibold'>Preparation Steps</label>
					<textarea
						name='steps'
						value={formData.steps}
						onChange={handleChange}
						className='w-full p-2 border rounded-md focus:ring focus:ring-blue-300'
					/>
					{errors.steps && <p className='text-red-500 text-sm'>{errors.steps}</p>}
				</div>

				<button
					type='submit'
					className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition'>
					Submit Recipe
				</button>
			</form>
		</div>
	);
};

export default AddRecipeForm;
