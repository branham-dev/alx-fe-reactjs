import "./App.css";
import UserContext from "../UserContext";
import ProfilePage from "./ProfilePage";

function App() {
	const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
	return (
		<>
			<UserContext.Provider value={userData}>
				<UserProfile />
			</UserContext.Provider>
		</>
	);
}

export default App;
