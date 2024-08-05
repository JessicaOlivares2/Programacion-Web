import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => (
  <motion.div
    id="about-me"
    style={{ padding: "4rem 2rem", backgroundColor: "#97E7E1" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 style={{ textAlign: "center" }}>Sobre Mí</h2>
    <p style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      Hola, soy un desarrollador web con experiencia en React y otras
      tecnologías. Me encanta crear aplicaciones web modernas y eficientes.
    </p>
  </motion.div>
);

export default AboutMe;
