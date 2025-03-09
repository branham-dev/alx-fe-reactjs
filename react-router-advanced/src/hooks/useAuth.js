function useAuth() {
	const isAuthenticated = localStorage.getItem("auth") === "true";
	return { isAuthenticated };
}

export default useAuth;
