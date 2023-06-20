import React from 'react';
import Banner from '../svg/MLHBanner.svg';

const MLHBanner = () => {
  return (
    <a href="https://mlh.io/seasons/2024/events">
      <img
        className="mlh-banner"
        src={Banner}
        alt="Major League Hacking 2024 Hackathon Season"
      />
    </a>
  );
};

export default MLHBanner;
