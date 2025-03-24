import { useEffect, useState } from "react";
import { fetchUserData } from "../services/githubService";

const SearchForm = ({ onSearch }) => {
	const [username, setUsername] = useState("");
	const [location, setLocation] = useState("");
	const [minRepos, setMinRepos] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		onSearch({ username, location, minRepos });
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	return (
		<form onSubmit={handleSubmit} className='bg-white p-4 rounded shadow-md w-full max-w-lg mx-auto'>
			<div className='mb-4'>
				<label className='block text-gray-700'>Username</label>
				<input
					type='text'
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className='w-full p-2 border rounded'
					placeholder='Enter GitHub username'
				/>
			</div>

			<div className='mb-4'>
				<label className='block text-gray-700'>Location</label>
				<input
					type='text'
					value={location}
					onChange={(e) => setLocation(e.target.value)}
					className='w-full p-2 border rounded'
					placeholder='Enter location (optional)'
				/>
			</div>

			<div className='mb-4'>
				<label className='block text-gray-700'>Min Repositories</label>
				<input
					type='number'
					value={minRepos}
					onChange={(e) => setMinRepos(e.target.value)}
					className='w-full p-2 border rounded'
					placeholder='Minimum number of repositories'
				/>
			</div>

			<button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>
				Search
			</button>
		</form>
	);
};

export default SearchForm;

"async", "await", "map", "&&";
["html_url"];
