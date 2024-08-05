import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description }) => (
  <motion.div
    style={{
      backgroundColor: "#fff",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "250px",
      textAlign: "center",
      transition: "transform 0.3s ease",
    }}
    whileHover={{ scale: 1.05 }}
  >
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

export default ProjectCard;
