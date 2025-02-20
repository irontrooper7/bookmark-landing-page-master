export default function Card({image, browser, version}) {
	return (
		<div className="card">
			<div className="card-image">
				<figure className="multimedia">
					<img src={`${image ? image : 'https://bulma.io/assets/images/placeholders/1280x960.png'}`} alt="Placeholder image"/>
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content has-text-centered">
						<h5 className="mb-2"><b>Add to {browser}</b></h5>
						<p>Minimun version {version}</p>
					</div>
					<figure className="multimedia">
						<img src="/assets/bg-dots.svg" alt="" />
					</figure>
				</div>
				<div className="content">
					<button className="button is-primary">Add & Install Extension</button>
				</div>
			</div>
		</div>
	)
}