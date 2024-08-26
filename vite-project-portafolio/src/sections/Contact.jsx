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
    <div className="contact-container">
      <div>
        <h2 style={{ textAlign: "left", paddingLeft: "15px" }}>Contacto</h2>
        <p style={{ width: "400px", margin: "0 auto", textAlign: "center" }}>
          Puedes contactarme a través de las siguientes vías:
        </p>
        <div className="textP"></div>
      </div>
      <div
        className="logos"
        data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom"
      >
        <div>
          <a href="mailto:example@gmail.com">
            <img className="logo" src="/public/gmail2.png" alt="Gmail" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/qr/BTLMQUSTBQ4GH1">
            <img
              className="logowasap"
              src="/public/wasap2.png"
              alt="WhatsApp"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/JessicaOlivares2">
            <img className="logoGit" src="/public/git.png" alt="Github" />
          </a>
        </div>
      </div>
    </div>
  </motion.div>
);

export default Contact;
