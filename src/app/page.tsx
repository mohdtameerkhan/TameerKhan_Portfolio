import { About } from "@/section/About";
import { Contact } from "@/section/Contact";
import { Experience } from "@/section/Experience";
import { Hero } from "@/section/Hero";
import { Technical } from "@/section/Technical";
//import { MotionTest } from "@/components/ui/MotionTest";


export default function Home() {
  return (

    
    <main>
      <Hero/>
      <About/>
      <Experience/>
      <Technical/>
      <Contact/>
    </main>
  );
}
