import { FaFacebookSquare, FaTwitter } from "react-icons/fa";


export default function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<nav className="navbar" role="navigation" aria-label="footer navigation">
					<div className="navbar-brand is-justify-content-center">
						<a className="navbar-item" href="/">
							<img src="/assets/logo-bookmark.svg" alt="" />
						</a>
					</div>
					<div className="navbar-menu">
						<div className="navbar-start">
							<a className="navbar-item">Features</a>
							<a className="navbar-item">Pricing</a>
							<a className="navbar-item">Contact</a>
						</div>
						<div className="navbar-end">
							<div className="navbar-item">
								<div className="buttons is-centered">
									<a className="icon"><FaFacebookSquare /></a>
									<a className="icon"><FaTwitter /></a>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		</footer>
	)
}