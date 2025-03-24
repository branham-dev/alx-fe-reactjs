import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import UserProfile from "./components/UserProfile";

const App = () => {
	return (
		<div>
			<div className='max-w-lg mx-auto mt-10 p-5 border rounded shadow-lg'>
				<h1 className='text-2xl font-bold mb-4'>GitHub User Search</h1>
				<Routes>
					<Route path='/' element={<Layout />} />
					<Route path='/user/:username' element={<UserProfile />} />
				</Routes>
			</div>
		</div>
	);
};

export default App;
