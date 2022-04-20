import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GithubUserProvider } from "./context/githubUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GithubUserProvider>
      <App />
    </GithubUserProvider>
  </React.StrictMode>
);
