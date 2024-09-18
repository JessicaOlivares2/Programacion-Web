import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar CSS de AOS

AOS.init({
  // Opcional: configuración de AOS
  duration: 3000, // Duración de las animaciones en milisegundos
  delay: 300,
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
