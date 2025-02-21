import Layout from "@/components/Layout";
import Contact from "@/components/sections/Contact";
import Download from "@/components/sections/Download";
import Faqs from "@/components/sections/Faqs";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Features />
			<Download />
			<Faqs />
			<Contact />
		</Layout>
	);
}
