import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Writing from '@/components/Writing';
import Contact from '@/components/Contact';

const SHOW_WRITING = true;

export default function Home() {
  return (
    <main style={{ color: 'var(--ink)', fontFamily: 'var(--font-space), sans-serif' }}>
      <Nav showWriting={SHOW_WRITING} />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      {SHOW_WRITING && <Writing />}
      <Contact />
    </main>
  );
}
