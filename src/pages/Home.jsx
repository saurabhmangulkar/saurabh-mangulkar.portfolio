import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Services from '../components/Services';
import Education from '../components/Education';
import GitHub from '../components/GitHub';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <main className="flex-1 w-full">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Services />
        <Education />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Home;
