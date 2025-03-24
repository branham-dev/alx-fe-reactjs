import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../services/githubService";
import SearchForm from "./SearchForm";

const Layout = () => {
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [page, setPage] = useState(1);
	const [totalResults, setTotalResults] = useState(0);

	const handleSearch = async (params) => {
		setLoading(true);
		setError("");

		try {
			const data = await fetchUsers({ ...params, page });
			setUsers(data.items);
			setTotalResults(data.total_count);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<SearchForm onSearch={handleSearch} />
			{loading && <p className='text-gray-500'>Loading...</p>}
			{error && <p className='text-red-500'>{error}</p>}
		</div>
	);
};

export default Layout;
