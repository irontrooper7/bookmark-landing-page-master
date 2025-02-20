import Card from "../Card";

export default function Download() {
	return (
		<section className="hero is-medium">
			<div className="hero-body">
				<div className="container">
					<article className="text-container has-text-centered is-centered">
						<h2>Download the extension</h2>
						<p className="mt-4">We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to priorize.</p>
					</article>
					<div className="card-container mt-6">
						<div className="columns is-gapless is-justify-content-center">
							<div className="column is-3">
								<Card image={'/assets/logo-chrome.svg'} browser={'Chrome'} version={'62'} />
							</div>
							<div className="column is-3">
								<Card image={'/assets/logo-firefox.svg'} browser={'Firefox'} version={'55'}/>
							</div>
							<div className="column is-3">
								<Card image={'/assets/logo-opera.svg'} browser={'Opera'} version={'46'} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}