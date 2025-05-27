import dynamic from "next/dynamic";
import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import About from "@/components/main/about";
import { Skills } from "@/components/main/skills";

const Experience = dynamic(() => import("@/components/main/experience"), {
  ssr: false,
});

const Projects = dynamic(() => import("@/components/main/projects"), {
  ssr: false,
});

const Contact = dynamic(() => import("@/components/main/contact"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Encryption />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
