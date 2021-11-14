import React from "react";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import GetInTouch from "./pages/GetInTouch";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";

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
          <Route path="/dashboard/" exact>
            <Dashboard />
          </Route>
          <Route path="/explore/" exact>
            <Explore />
          </Route>
          <Route path="/profile/" exact>
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
