import React, { useState } from 'react'

export default function Header() {
	const [menuStatus, setMenuStatus] = useState(false);
	return (
		<header>
			<div className="container">
				<nav className={`navbar ${menuStatus ? 'is-active' : ''}`} role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a className="navbar-item" href="/">
							<img src="/assets/logo-bookmark.svg" alt="" />
						</a>
						<a role="button" className={`navbar-burger ${menuStatus ? 'is-active' : ''}`} onClick={() => setMenuStatus(!menuStatus)} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>
					<div id="navbarBasicExample" className={`navbar-menu ${menuStatus ? 'is-active' : ''}`}>
						<div className="navbar-start">
							<a className="navbar-item">Features</a>
							<a className="navbar-item">Pricing</a>
							<a className="navbar-item">Contact</a>
							<a className="navbar-item">
								<button className="button is-link">Login</button>
							</a>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								<div className="buttons is-centered">
									<a className="button is-link">F</a>
									<a className="button is-link">T</a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</header>
	)
}