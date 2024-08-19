import React from "react";
import { motion } from "framer-motion";

const Contact = () => (
  <motion.div
    id="contact"
    style={{ padding: "4rem 2rem", backgroundColor: "#97E7E1" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 style={{ textAlign: "center" }}>Contacto</h2>
    <p style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
      Podes contactarme a través de las siguientes vias:
    </p>
    <div className="grilla">
      <div className="gril2">
        <div data-aos="fade-left" className="innerGrilla letra">
          <img className="logo" src="/public/gmail2.png" alt="Gmail" />
        </div>
        <div>
          <p>Jessicaolivares863@gmail.com</p>
        </div>
        <div data-aos="fade-right" className="innerGrilla letra">
          <img className="logowasap" src="/public/wasap2.png" alt="WhatsApp" />
        </div>
        <div>
          <p>+54 9 1126991420</p>
        </div>

        <div data-aos="fade-left" className="innerGrilla letra">
          <img className="logoGit" src="/public/git.png" alt="github" />
        </div>
        <div>
          <a href="https://github.com/JessicaOlivares2">
            {" "}
            <p>JessicaOlivares2</p>
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Contact;
