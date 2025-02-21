import { useContext } from "react";
import userContext from "./UserContext";

const UserProfile = () => {
	const userData = useContext(userContext);
	return (
		<div>
			<h2>{userData.name}</h2>
			{/* <p>Age: {age}</p>
			<p>Bio: {bio}</p> */}
		</div>
	);
};
export default UserProfile;
