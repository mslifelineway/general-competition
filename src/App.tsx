import React from "react";
import "./App.css";
import { Landing, Page404 } from "./containers";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PAGE_PATHS } from "./utils/constants";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path={PAGE_PATHS.root} element={<Landing />} />
          <Route path={PAGE_PATHS.notFound} element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
