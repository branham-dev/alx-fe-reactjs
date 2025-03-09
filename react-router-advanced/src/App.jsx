import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path='/profile'
						element={
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						}>
						<Route path='/details' element={<ProfileDetails />} />
						<Route path='/settings' element={<ProfileSettings />} />
					</Route>
					<Route path='/blog/:id' element={<BlogPost />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
