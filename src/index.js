import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import * as serviceWorker from "./serviceWorker";

import "../node_modules/bootstrap/dist/js/bootstrap";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM_YOUR_ID",
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
