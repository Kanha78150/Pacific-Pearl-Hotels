import AssociationsPortfolio from "../../components/home/AssociationsPortfolio";
import FeaturedProjects from "../../components/home/FeaturedProjects";
import Hero from "../../components/home/Hero";
import WhyWeStandOut from "../../components/home/WhyWeStandOut";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AssociationsPortfolio />
      <WhyWeStandOut />
      <FeaturedProjects />
    </main>
  );
}
