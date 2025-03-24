import { useState } from "react";
import { fetchUserData, state } from "../services/githubService";

const Search = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [errors, setErrors] = useState();
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!searchTerm) {
			setErrors("You must include a search term");
			return;
		}
		fetchUserData(searchTerm);
	};

	if (state.loading) {
		return <p>Loading...</p>;
	}

	if (state.error) {
		return <p>Looks like we cant find the user</p>;
	}

	return (
		<section>
			<h2>Search a Github user</h2>
			<form onSubmit={handleSubmit}>
				<label>
					<input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
				</label>
				<button type='submit'>Search</button>
				{errors && <p className=''>{errors}</p>}
			</form>
		</section>
	);
};
export default Search;
