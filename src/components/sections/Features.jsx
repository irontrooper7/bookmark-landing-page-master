import Tabs from "../Tabs"

const data = [
	{
		tab: 'Simple Bookmarking',
		title: 'Bookmark in one click',
		content: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives yoy a complete control over how you manage your favorite sites.',
		image: '/assets/illustration-features-tab-1.svg'
	},
	{
		tab: 'Speedy Searching',
		title: 'Intelligent search',
		content: 'Our pwerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
		image: '/assets/illustration-features-tab-2.svg'
	},
	{
		tab: 'Easy Sharing',
		title: 'Share your bookmarks',
		content: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
		image: '/assets/illustration-features-tab-3.svg'
	}
]

export default function Features() {
	return (
		<section id="features" className="hero is-medium">
			<div className="hero-body">
				<div className="container">
					<article className="text-container has-text-centered is-centered">
						<h2>Features</h2>
						<p className="mt-4">Our aim is to make it quick and easy for you to access your favorite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
					</article>
					<Tabs data={data} />
				</div>
			</div>
		</section>
	)
}