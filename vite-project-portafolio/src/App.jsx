import React from "react";
import Header from "./components/Header";
import AboutMe from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => (
  <div style={{ fontFamily: "Arial, sans-serif", marginTop: "4rem" }}>
    <Header />
    <main>
      <AboutMe />
      <Projects />
      <Contact />
    </main>
  </div>
);

export default App;
