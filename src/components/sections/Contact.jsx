import ContactForm from "../ContactForm";

export default function Contact() {
	return (
		<section id="contact" className="hero">
			<div className="hero-body">
				<div className="container">
					<article className="text-container has-text-centered is-centered mb-5">
						<span>35,000+ already joined</span>
						<h2 className="mt-5">Stay up-to-date with what we're doing</h2>
					</article>
					<ContactForm />
				</div>
			</div>
		</section>
	)
}