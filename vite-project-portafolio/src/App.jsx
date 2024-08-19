import React from "react";
import Header from "./components/Header";
import AboutMe from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar CSS de AOS

const App = () => {
  AOS.init({
    // Opcional: configuración de AOS
    duration: 1000, // Duración de las animaciones en milisegundos
  });
  return (
    <div style={{ fontFamily: "Arial, sans-serif", marginTop: "4rem" }}>
      <Header />
      <main>
        <AboutMe />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;
