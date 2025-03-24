import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { fetchUsers } from "./services/fetchServices";

function App() {
	const getUsers = fetchUsers;
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />} />
			</Routes>
		</>
	);
}

export default App;
