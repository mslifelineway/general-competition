import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//this line will be only on development level, remove on production level
import "./assets/css/icon-fonts.css";
import "./assets/css/fonts/font-style.css";
import "./assets/css/style.css";
import { AuthContextProvider } from "./context/AuthContext";
import { DrawerContextProvider } from "./context/DrawerContext";

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
    <DrawerContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </DrawerContextProvider>
  </React.StrictMode>
);

reportWebVitals();
