import axios from "axios";

export const state = { loading: false, error: false };

export const fetchUserData = async (username) => {
	state.loading = true;
	state.error = false;
	try {
		const response = await axios.get(`https://api.github.com/users/${username}`);
		const { data } = response;
		console.log(data);
		state.loading = false;
	} catch (error) {
		state.error = true;
		console.log(error);
	}
};
