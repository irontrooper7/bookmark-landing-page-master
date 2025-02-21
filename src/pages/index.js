import Layout from "@/components/Layout";
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
		</Layout>
	);
}
