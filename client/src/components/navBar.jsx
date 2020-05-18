import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const NavBar = ({ user }) => {
	return (
		<nav className="orange darken-2">
			<div className="container">
				<div className="nav-wrapper">
					<Link to="#" className="brand-logo black-text cloudflix-nav">
						CloudFlix
					</Link>
					<ul id="nav-mobile" className="right hide-on-med-and-down">
						<li>
							<NavLink to="/search">Search</NavLink>
						</li>
						<li>
							<NavLink to="mylist">My List</NavLink>
						</li>
						{!user && (
							<React.Fragment>
								<li>
									<NavLink to="/login">Login</NavLink>
								</li>
								<li>
									<NavLink to="/register">Register</NavLink>
								</li>
							</React.Fragment>
						)}
						{user && (
							<React.Fragment>
								<li>
									<NavLink to="/mylist">{user.name}</NavLink>
								</li>
								<li>
									<NavLink to="/logout">Log Out</NavLink>
								</li>
							</React.Fragment>
						)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
