import { About } from "@/section/About";
import { Experience } from "@/section/Experience";
import { Hero } from "@/section/Hero";
import { Technical } from "@/section/Technical";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Experience/>
      <Technical/>
    </main>
  );
}
