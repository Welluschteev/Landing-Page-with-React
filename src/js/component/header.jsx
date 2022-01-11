import React from "react";

const Header = () => {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark bg-gradient">
			<div className="container-fluid">
				<a className="navbar-brand fs-2" href="#">
					Start Bootstrap
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse d-flex-row justify-content-end"
					id="navbarCollapse">
					<ul className="navbar-nav mb-auto me-2 mb-md-0">
						<li className="nav-item">
							<a
								className="nav-link active"
								aria-current="page"
								href="#">
								<strong>Home</strong>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<strong>About</strong>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<strong>Services</strong>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								<strong>Contact</strong>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
