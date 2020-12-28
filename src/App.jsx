import React from "react";

import "./style/scss/index.scss";

import { HashRouter as Router } from "react-router-dom";
import Layout from "./Layout";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
