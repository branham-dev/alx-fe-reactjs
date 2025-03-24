import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchUserData } from "../services/githubService";

const UserProfile = () => {
	const { username } = useParams();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const getUser = async () => {
			setLoading(true);
			setError("");

			try {
				const userData = await fetchUserData(username);
				setUser(userData);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		getUser();
	}, [username]);

	return (
		<div>
			<Link to='/' className='text-blue-500'>
				← Back to Search
			</Link>
			{loading && <p className='text-gray-500'>Loading...</p>}
			{error && <p className='text-red-500'>{error}</p>}
			{user && (
				<div className='border p-4 rounded mt-4'>
					<img src={user.avatar_url} alt={user.login} className='w-20 h-20 rounded-full' />
					<h2 className='text-xl font-bold'>{user.name || user.login}</h2>
					<p>{user.bio}</p>
					<a href={user.html_url} className='text-blue-500' target='_blank' rel='noopener noreferrer'>
						View Profile
					</a>
				</div>
			)}
		</div>
	);
};

export default UserProfile;
