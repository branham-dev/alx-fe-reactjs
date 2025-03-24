import axios from "axios";

export const fetchUserData = async ({ username, location, minRepos, page = 1 }) => {
	try {
		let query = username ? `user:${username}` : "";
		if (location) query += ` location:${location}`;
		if (minRepos) query += ` repos:>${minRepos}`;

		const response = await axios.get(
			`https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`,
			{
				// headers: GITHUB_API_KEY ? { Authorization: `token ${GITHUB_API_KEY}` } : {},
			},
		);

		return response.data;
	} catch (error) {
		throw new Error("Something went wrong while fetching users.");
	}
};
