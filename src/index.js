import React from "react";
import ReactDOM from "react-dom/client";
import 'aos/dist/aos.css';
import App from "./App";
import "./index.css"; // Tailwind or custom CSS

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
