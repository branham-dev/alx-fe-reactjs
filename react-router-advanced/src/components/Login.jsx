import { useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();

	function handleLogin() {
		localStorage.setItem("auth", "true");
		navigate("/profile");
	}

	return <button onClick={handleLogin}>Login</button>;
}

export default Login;
