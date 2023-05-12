import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Home from "./components/Home";
import HomeHeader from "./components/HomeHeader";
import HomeThreeColumns from "./components/HomeThreeColumns";

function App() {
  return (
    <>
      <Router>
        <Link to="/login">Login in</Link>
        <Link to="/register">Sign up</Link>
        <Route path="/" element={<Home />} />
        <ScrollLink to="HomeThreeColumns" smooth={true} duration={500}>
          <HomeThreeColumns />
        </ScrollLink>
        <Route
          path="/login"
          element={
            <div className="error404">
              <h1 className="errorError">ERROR 404</h1>
              <h2 className="errorText">
                Stay calm! Site is under construction
              </h2>{" "}
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="error404">
              <h1 className="errorError">ERROR 404</h1>
              <h2 className="errorText">
                Stay calm! Site is under construction
              </h2>{" "}
            </div>
          }
        />
      </Router>
    </>
  );
}

export default App;
