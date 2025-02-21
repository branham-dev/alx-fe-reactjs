import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<header>
				<nav style={{}}>
					<ul style={{ listStyleType: "none", display: "flex", gap: "1rem", justifyContent: "center" }}>
						<li>
							<Link to={"/"}>Home</Link>
						</li>
						<li>
							<Link to={"/about"}>About</Link>
						</li>
						<li>
							<Link to={"/services"}>Services</Link>
						</li>
						<li>
							<Link to={"/contact"}>Contact</Link>
						</li>
					</ul>
				</nav>
			</header>
			<div>
				<Outlet />
			</div>
		</>
	);
};
export default Navbar;
