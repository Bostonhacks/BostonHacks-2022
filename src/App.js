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
      <div></div>
      <div className="bhacks-text-container">
        <h1 className="bhacks-text">Bostonhacks 2024</h1>
      </div>
      <div className="coming-soon-container">
        <h1 className="coming-soon-text">Coming Soon Nov. 18-19</h1>
      </div>
      <div className="outer-buttons-container">
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
          <a
            href="https://drive.google.com/file/d/1QXGi1T9DDUsQ0gbiHKvN5lo3pR0fJw2f/view?usp=sharing"
            className="sponsor-us-button"
          >
            Sponsor Us!
          </a>
        </div>
      </div>
      <form className="email-form">
        <label className="email-label">
          Interested in hearing more? Join our email list!
        </label>
        <input className="email-input" type="text" placeholder="email" />
      </form>
    </div>
  );
};

export default App;
