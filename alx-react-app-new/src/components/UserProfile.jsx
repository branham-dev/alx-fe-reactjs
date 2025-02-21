const UserProfile = (props) => {
	return (
		<div style={{ backgroundColor: "#e5e5e5", border: "1px solid #000", padding: "10px", margin: "10px" }}>
			<h2 style={{ color: "#14213d" }}>{props.name}</h2>
			<p style={{ color: "" }}>
				Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
			</p>
			<p style={{ color: "" }}>Bio: {props.bio}</p>
		</div>
	);
};
export default UserProfile;
