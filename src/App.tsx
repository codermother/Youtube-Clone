import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Home/Header/Header";
import Home from "./components/Home/Home";
import { getVideos } from "./store/api/api";

function App() {
  useEffect(() => {
    gapi.load("client", () => {
      gapi.client.setApiKey("AIzaSyBdT9NVewzwHrcGzMTpsPmTWtgUwH_5MyM");
      return gapi.client.load("youtube", "v3", () => {
        getVideos();
      });
    });
  }, []);

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
