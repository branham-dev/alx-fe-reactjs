function UserProfile() {
	return (
		<div className='user-profile bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg md:p-8 sm:p-4 sm:max-w-xs md:max-w-sm hover:shadow-xl'>
			<img
				src='https://media.istockphoto.com/id/2160502733/photo/working-day-in-office.jpg?s=1024x1024&w=is&k=20&c=8XnsC1dn_8pzTVPgNV9q0-wLafVpm8Fsu_S-ES7kQmw='
				alt='User'
				className='rounded-full w-36 h-36 mx-auto sm:w-24 sm:h-24 md:w-36 md:h-36 hover:scale-110 transition-transform duration-300 ease-in-out'
			/>
			<h1 className='text-xl text-blue-800 my-4 sm:text-lg md:text-xl hover:text-blue-500'>
				John Doe
			</h1>
			<p className='text-gray-600 text-base sm:text-sm md:text-base'>
				Developer at Example Co. Loves to write code and explore new technologies.
			</p>
		</div>
	);
}

export default UserProfile;
