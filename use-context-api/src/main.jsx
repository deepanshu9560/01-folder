import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ChangeColor from "./components/ChangeColor.jsx";

createRoot(document.getElementById("root")).render(
  <ChangeColor>
    <App />
  </ChangeColor>
);
