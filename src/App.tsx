import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App; /* youtube api */

/* AIzaSyCCLVgXzCAKyOmexzGFHWVvuvpSB0AbIZ8 */
