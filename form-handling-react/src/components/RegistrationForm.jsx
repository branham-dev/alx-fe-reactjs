import { useState } from "react";

const RegistrationForm = () => {
	const [formData, setFormData] = useState({ username: "", email: "", password: "" });

	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const validate = () => {
		const errors = {};

		if (!username) {
			errors.username = "Required";
		}
		if (!email) {
			errors.email = "Required";
		}
		if (!password) {
			errors.password = "Required";
		}
		return errors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validate());

		if (Object.keys(errors).length === 0) {
			alert("Submitted");
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
