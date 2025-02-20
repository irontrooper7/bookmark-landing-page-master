export default function Hero() {
	return (
		<section className="hero is-medium">
			<div className="hero-body">
				<div className="container">
					<div className="columns is-align-items-center">
						<div className="column">
							<h1>A Simple Bookmark Manager</h1>
							<p className="mt-4">A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
							<div className="buttons mt-6">
								<button className="button is-primary">Get it on Chrome</button>
								<button className="button is-info">Get it on Firefox</button>
							</div>
						</div>
						<div className="column">
							<div className="multimedia">
								<img src="/assets/illustration-hero.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}