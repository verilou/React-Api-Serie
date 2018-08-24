import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from './profile.js'
import connection from "./connection.js";

const Navigation = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/Profile">Profil</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/connection" component={connection} />

    </div>
  </Router>
);

export default Navigation;