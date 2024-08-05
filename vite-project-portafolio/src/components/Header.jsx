import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => (
  <header
    style={{
      padding: "1rem 2rem",
      backgroundColor: "#333",
      color: "#fff",
      position: "fixed",
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 1000,
    }}
  >
    <nav>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-around",
          listStyleType: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="about-me" smooth={true} duration={500}>
            Sobre Mí
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="projects" smooth={true} duration={500}>
            Proyectos
          </Link>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }}>
          <Link to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </motion.li>
      </ul>
    </nav>
  </header>
);

export default Header;
