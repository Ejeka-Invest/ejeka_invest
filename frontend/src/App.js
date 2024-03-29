import React from "react";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import GetInTouch from "./pages/GetInTouch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about/" exact>
            <About />
          </Route>
          <Route path="/getintouch/" exact>
            <GetInTouch />
          </Route>
          <Route path="/login/" exact>
            <Login />
          </Route>
          <Route path="/signup/" exact>
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
