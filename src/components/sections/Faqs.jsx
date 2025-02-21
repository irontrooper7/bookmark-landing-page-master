import { useState } from "react";
import Accordion from "../Accordion";

export default function Faqs() {
	const [activeIndex, setActiveIndex] = useState(null);
	const handleClick = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="hero is-medium">
			<div className="hero-body">
				<div className="container">
					<article className="text-container has-text-centered is-centered">
						<h2>Frequently asked Questions</h2>
						<p className="mt-4">We've got more browsers in the pipeline. Please do let us know if you've got a favorite you'd like us to priorize.</p>
					</article>
					<div className="accordions mt-6">
						{items.map((item, index) => (
							<Accordion
								key={index}
								title={item.title}
								content={item.content}
								isActive={activeIndex === index}
								onClick={() => handleClick(index)}
							/>
						))}
					</div>
					<div className="buttons is-centered mt-6">
						<button className="button is-primary">More Info</button>
					</div>
				</div>
			</div>
		</section>
	)
}

const items = [
	{
		title: 'What is Bookmark?',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra consequat consequat. Aenean ullamcorper consectetur risus sit amet elementum. Praesent vitae iaculis elit, sit amet sollicitudin sem. Nulla consequat egestas iaculis. Mauris egestas bibendum dignissim. Nullam ut augue nec eros malesuada pharetra quis eu arcu.'
	},
	{
		title: 'How can i reques a new brower?',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra consequat consequat. Aenean ullamcorper consectetur risus sit amet elementum. Praesent vitae iaculis elit, sit amet sollicitudin sem. Nulla consequat egestas iaculis. Mauris egestas bibendum dignissim. Nullam ut augue nec eros malesuada pharetra quis eu arcu.'
	},
	{
		title: 'Is there a mobile app?',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra consequat consequat. Aenean ullamcorper consectetur risus sit amet elementum. Praesent vitae iaculis elit, sit amet sollicitudin sem. Nulla consequat egestas iaculis. Mauris egestas bibendum dignissim. Nullam ut augue nec eros malesuada pharetra quis eu arcu.'
	},
	{
		title: 'What about other Chromium browsers?',
		content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec viverra consequat consequat. Aenean ullamcorper consectetur risus sit amet elementum. Praesent vitae iaculis elit, sit amet sollicitudin sem. Nulla consequat egestas iaculis. Mauris egestas bibendum dignissim. Nullam ut augue nec eros malesuada pharetra quis eu arcu.'
	},
]