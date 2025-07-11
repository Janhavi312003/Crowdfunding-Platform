import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { chainId, ThirdwebProvider } from "@thirdweb-dev/react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider desiredChainId={chainId.Goerli}>
    <Router>
      <App />
    </Router>
  </ThirdwebProvider>
);
