import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
