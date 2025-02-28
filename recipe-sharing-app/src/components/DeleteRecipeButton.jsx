const DeleteRecipeButton = ({ deleteRecipe, id }) => {
	return <button onClick={() => deleteRecipe(id)}>Delete</button>;
};
export default DeleteRecipeButton;
