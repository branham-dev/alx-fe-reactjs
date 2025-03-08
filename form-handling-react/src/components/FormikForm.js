import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const formikForm = () => {
	// const validate = (values) => {
	// 	const errors = {};

	// 	if (!values.username) {
	// 		errors.username = "Required";
	// 	} else if (values.username.length > 15) {
	// 		errors.username = "Must be 15 characters or less";
	// 	}

	// 	if (!values.email) {
	// 		errors.email = "Required";
	// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
	// 		errors.email = "Invalid email address";
	// 	}

	// 	if (!values.password) {
	// 		errors.password = "Required";
	// 	} else if (values.password.length < 8) {
	// 		errors.password = "Must have a minimum of 8 characters";
	// 	}

	// 	return errors;
	// };

	// const formik = useFormik({
	// 	initialValues: {
	// 		username: "",
	// 		email: "",
	// 		password: "",
	// 	},
	// 	validationSchema: Yup.object({
	// 		username: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
	// 		email: Yup.string().email("Invalid email address").required("Required"),
	// 		password: Yup.string().min(8, "Must be al least 8 characters long").required("Required"),
	// 	}),
	// 	onSubmit: (values) => console.log(values),
	// });

	return (
		<Formik
			initialValues={{ username: "", email: "", password: "" }}
			validationSchema={Yup.object({
				username: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
				email: Yup.string().email("Invalid email address").required("Required"),
				password: Yup.string().min(8, "Must be al least 8 characters long").required("Required"),
			})}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
				setSubmitting(false);
			}}>
			<Form>
				<label htmlFor='username'>Your Name</label>
				<Field name='username' type='text' />
				<ErrorMessage name='username' />

				<label htmlFor='email'>Your Email</label>
				<Field name='email' type='email' />
				<ErrorMessage name='email' />

				<label htmlFor='email'>Your Password</label>
				<Field name='password' type='password' />
				<ErrorMessage name='password' />

				<button type='submit'>Submit</button>
			</Form>
		</Formik>
	);

	// return (
	// 	<form onSubmit={formik.handleSubmit}>
	// 		<label htmlFor='username'>Your Name</label>
	// 		<input
	// 			type='text'
	// 			id='username'
	// 			name='username'
	// 			// onChange={formik.handleChange}
	// 			// onBlur={formik.handleBlur}
	// 			// value={formik.values.username}
	// 			{...formik.getFieldProps("username")}
	// 		/>
	// 		{formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}
	// 		<br />
	// 		<hr />

	// 		<label htmlFor='email'>Your Email</label>
	// 		<input
	// 			type='email'
	// 			id='email'
	// 			name='email'
	// 			// onChange={formik.handleChange}
	// 			// onBlur={formik.handleBlur}
	// 			// value={formik.values.email}
	// 			{...formik.getFieldProps("email")}
	// 		/>
	// 		{formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
	// 		<br />
	// 		<hr />

	// 		<label htmlFor='password'>Your Password</label>
	// 		<input
	// 			type='password'
	// 			id='password'
	// 			name='password'
	// 			// onChange={formik.handleChange}
	// 			// onBlur={formik.handleBlur}
	// 			// value={formik.values.password}
	// 			{...formik.getFieldProps("password")}
	// 		/>
	// 		{formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
	// 		<br />
	// 		<hr />

	// 		<button type='submit'>Submit</button>
	// 	</form>
	// );
};
export default formikForm;
