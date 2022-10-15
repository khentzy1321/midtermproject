import React from "react";
import "./App.css";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import Venues from "./components/pages/Venues";
import SingleVenue from "./components/venues/SingleVenue";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Venues} />
          <Route exact path="/about" component={About} />
          <Route exact path="/venues/:id" component={SingleVenue} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
