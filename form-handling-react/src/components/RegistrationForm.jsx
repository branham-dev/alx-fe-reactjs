import { useState } from "react";

const RegistrationForm = () => {
	const [formData, setFormData] = useState({ username: "", email: "", password: "" });

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleChange = (e) => {
		const { name, value } = e;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (formData.username && formData.email && formData.password) {
			alert("submitted");
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' name='username' value={username} onChange={handleChange} />
			<input type='email' name='email' value={email} onChange={handleChange} />
			<input type='password' name='password' value={password} onChange={handleChange} />
		</form>
	);
};
export default RegistrationForm;
