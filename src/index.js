import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import "./BooksComponents/styles/index.css";
const area = document.getElementById("root");
const root = createRoot(area);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
