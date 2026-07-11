import { Hero } from "../components/home/Hero";
import { StackMarquee } from "../components/home/StackMarquee";
import { Services } from "../components/home/Services";
import { Timeline } from "../components/home/Timeline";
import { Projects } from "../components/home/Projects";
import { Writing } from "../components/home/Writing";
import { Testimonials } from "../components/home/Testimonials";

export const Home = ({ onOpenProject, onOpenBlog, onOpenContact }) => (
  <>
    <Hero onOpenContact={onOpenContact} />
    <StackMarquee />
    <Services />
    <Timeline />
    <Projects onOpen={onOpenProject} />
    <Writing onOpen={onOpenBlog} />
    <Testimonials />
  </>
);
