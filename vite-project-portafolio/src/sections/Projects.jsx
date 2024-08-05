import React from "react";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";

const Projects = () => (
  <motion.div
    id="projects"
    style={{ padding: "4rem 2rem", backgroundColor: "#97E7E1" }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2 style={{ textAlign: "center" }}>Mis Proyectos</h2>
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        justifyContent: "center",
      }}
    >
      <ProjectCard
        title="Proyecto 1"
        description="Descripción del proyecto 1"
      />
      <ProjectCard
        title="Proyecto 2"
        description="Descripción del proyecto 2"
      />
      <ProjectCard
        title="Proyecto 3"
        description="Descripción del proyecto 3"
      />
    </div>
  </motion.div>
);

export default Projects;
