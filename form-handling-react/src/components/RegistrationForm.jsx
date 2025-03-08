import { useState } from "react";

const RegistrationForm = () => {
	const [formData, setFormData] = useState({});

	const handleChange = (e) => {
		const { name, value } = e;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if (formData.name && formData.email && formData.password) {
            alert("submitted")
        }
    }

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' name='name' value={formData.name} onChange={handleChange} />
			<input type='email' name='email' value={formData.email} onChange={handleChange} />
			<input type='password' name='password' value={formData.password} onChange={handleChange} />
		</form>
	);
};
export default RegistrationForm;
