import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Paralax from "./components/paralex/Paralax";
import Services from "./components/services/Services";
import Project1 from "./components/projects/Project1"
import Project2 from "./components/projects/Project2"
import Project3 from "./components/projects/Project3";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <>
      <section id="Home Page">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Paralax />
      </section>
      <section id="Portfolio">
        <Services />
      </section>
      <section id="Contact Us">
        <Project1 />
      </section>
      <section>
        <Project2 />
      </section>
      <section>
        <Project3 />
      </section>
      <section id="About">
        <Contact />
      </section>
    </>
  );
};

export default App;
