import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { Impact } from '@/components/Impact';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { MotionGuard } from '@/components/MotionGuard';
import { JsonLd } from '@/components/JsonLd';

export default function Home() {
  return (
    <>
      <JsonLd />
      <Nav />
      <main id="main">
        <Hero />
        <Impact />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <MotionGuard />
    </>
  );
}
