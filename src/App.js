import React from 'react';
import logo from '../src/comingsoon/svgs/bhackslogo.svg';
import MLHBanner from './components/sponsor/MLHBanner/MLHBanner';
import { Link } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="main-div fadeInDown">
      <img src={logo} className="bhacks-logo" alt="Bhacks Logo" />
      <a href="https://organize.mlh.io/participants/events/9891-bostonhacks">
        <MLHBanner />
      </a>
      <div className="newsletter-container">
        <h3>Want Email updates on Bostonhacks? Join our newsletter!</h3>
        <form>
          <input type="text" placeholder="Email" name="email-input"></input>
        </form>
      </div>
      <div className="bhacks-text-container">
        <h1 className="bhacks-text">Bostonhacks 2023</h1>
      </div>
      <div className="coming-soon-container">
        <h1 className="coming-soon-text">Coming Soon in November.</h1>
      </div>
      <div className="buttons-container">
        <a
          href="https://organize.mlh.io/participants/events/9891-bostonhacks"
          className="apply-button"
        >
          Apply Here
        </a>
        <a
          href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
          className="mlh-code-of-conduct"
        >
          MLH Code of Conduct
        </a>
      </div>
      <div className="mlh-code-of-conduct-container"></div>
    </div>
  );
};

export default App;
