import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends Component {
	componentDidMount() {
		const M = window.M;
		document.addEventListener('DOMContentLoaded', function() {
			var elems = document.querySelectorAll('.sidenav');
			var instances = M.Sidenav.init(elems, { edge: 'right' });
		});
	}
	render() {
		const { user } = this.props;
		return (
			<div>
				<nav>
					<div className="container col s12">
						<div className="nav-wrapper">
							<a to="#" data-target="slide-out" className="sidenav-trigger right">
								<i className="material-icons edge-right">menu</i>
							</a>
							<Link to="#" className="brand-logo">
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
				<ul id="slide-out" className="sidenav">
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
		);
	}
}

export default NavBar;
