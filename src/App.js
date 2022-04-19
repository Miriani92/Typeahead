import React from "react";
import Page from "./page/Page";
import { GithubUserProvider } from "./context/githubUserContext";

function App() {
  return (
    <GithubUserProvider>
      <div className="App">
        <Page />
      </div>
    </GithubUserProvider>
  );
}

export default App;
