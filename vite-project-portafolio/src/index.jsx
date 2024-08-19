import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css"; // Agrega estilos globales si es necesario

import AOS from "aos";
import "aos/dist/aos.css"; // Importar CSS de AOS

AOS.init({
  // Opcional: configuración de AOS
  duration: 3000, // Duración de las animaciones en milisegundos
  delay: 300,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
