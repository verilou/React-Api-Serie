import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Connection from './connection.js'

const Navigation = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <a href="https://www.betaseries.com/authorize?client_id=3355c0d4d0cd&redirect_uri=http://localhost:3000/Auth">Connexion a l'api</a>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/Auth" component={Connection} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default Navigation;