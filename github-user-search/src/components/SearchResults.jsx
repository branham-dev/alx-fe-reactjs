const SearchResults = ({ users, loading, error, page, setPage, totalResults }) => {
	if (loading) return <p className='text-gray-500'>Loading...</p>;
	if (error) return <p className='text-red-500'>{error}</p>;
	if (!users.length) return <p className='text-gray-500'>No users found.</p>;

	return (
		<div className='mt-4'>
			{users.map((user) => (
				<div key={user.id} className='border p-4 rounded mb-2 flex items-center'>
					<img src={user.avatar_url} alt={user.login} className='w-12 h-12 rounded-full mr-4' />
					<div>
						<h2 className='text-lg font-bold'>{user.login}</h2>
						<a href={user.html_url} className='text-blue-500' target='_blank' rel='noopener noreferrer'>
							View Profile
						</a>
					</div>
				</div>
			))}

			<div className='flex justify-between mt-4'>
				<button
					onClick={() => setPage(page - 1)}
					disabled={page === 1}
					className='bg-gray-300 p-2 rounded disabled:opacity-50'>
					Previous
				</button>

				<span className='p-2'>{page}</span>

				<button
					onClick={() => setPage(page + 1)}
					disabled={page * 10 >= totalResults}
					className='bg-gray-300 p-2 rounded disabled:opacity-50'>
					Next
				</button>
			</div>
		</div>
	);
};

export default SearchResults;
