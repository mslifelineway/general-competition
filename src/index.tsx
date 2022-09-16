import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//this line will be only on development level, remove on production level
import "./styles/css/icon-fonts.css";
import "./styles/css/style.css";

/**
 * For production server or building app change watch:css script to below in script of (package.json file)
 * -w -r ==> will not work
 * "watch:css": "npm run css && node-sass src/styles/sass/main.scss src/styles/css/style.css && npm run build:css",
 */

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
