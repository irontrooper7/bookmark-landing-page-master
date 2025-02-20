import Layout from "@/components/Layout";

export default function Home() {
	return (
		<Layout>
			<section className="hero is-large">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-align-items-center">
							<div className="column">
								<h1>A Simple Bookmark Manager</h1>
								<p>A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
								<div className="buttons">
									<button className="button is-primary">Get it on Chrome</button>
									<button className="button is-info">Get it on Firefox</button>
								</div>
							</div>
							<div className="column">
								<img src="/assets/illustration-hero.svg" alt=""/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
}
