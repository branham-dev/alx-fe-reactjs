import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";

function App() {
	return (
		<>
			<Routes>
				<Route
					path='/'
					element={
						<>
							<RecipeList />
							<AddRecipeForm />
						</>
					}
				/>
				<Route path='/details/:recipeId' element={<RecipeDetails />} />
				<Route path='/details/:recipeId/edit' element={<EditRecipeForm />} />
			</Routes>
		</>
	);
}

export default App;
