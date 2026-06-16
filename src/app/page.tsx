import { CursorFollower } from "~/components/effects/CursorFollower";
import { Hero } from "~/components/sections/Hero";
import { About } from "~/components/sections/About";
import { Projects } from "~/components/sections/Projects";
import { TechStack } from "~/components/sections/TechStack";
import { Experience } from "~/components/sections/Experience";
// Blog component removed
import { Testimonials } from "~/components/sections/Testimonials";
import { ResumeCTA } from "~/components/sections/ResumeCTA";
import { Contact } from "~/components/sections/Contact";
// getLatestPosts import removed
import { getProfileImages } from "~/lib/profile";

export default function Home() {
  return (
    <>
      <CursorFollower />
      <Hero />
      <About profileImages={getProfileImages()} />
      <Projects />
      <TechStack />
      <Experience />
      {/* Blog component removed */}
      <Testimonials />
      <ResumeCTA />
      <Contact />
    </>
  );
}
