import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import UseEffectsMain from "./components/useEffects/UseEffectsMain";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    {/* <App />  */}
    <UseEffectsMain />
  </React.StrictMode>
);
