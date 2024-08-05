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
      Puedes contactarme a través de mi correo electrónico: miemail@ejemplo.com.
    </p>
  </motion.div>
);

export default Contact;
