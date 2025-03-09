import { Outlet, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
	return (
		<div>
			<div>
				<ProfileDetails />
				<ProfileSettings />
			</div>
			<Outlet />
		</div>
	);
};
export default Profile;
