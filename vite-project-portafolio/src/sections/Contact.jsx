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
      <div className="item">
        <div className="gril">
          <img className="logo" src="/public/gmail2.png" alt="Gmail"/>
          <p>Jessicaolivares863@gmail.com</p>
        </div>
        <div className="gril">
          <img className="logowasap" src="/public/wasap2.png" alt="WhatsApp"/>
          <p>Jessicaolivares863@gmail.com</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Contact;
