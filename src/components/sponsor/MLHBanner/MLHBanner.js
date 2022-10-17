import React from 'react';
import Banner from '../svg/MLHBanner.svg';

const MLHBanner = () => {
  return (
    <a href="https://mlh.io/seasons/2023/events">
      <img
        className="mlh-banner"
        src={Banner}
        alt="Major League Hacking 2023 Hackathon Season"
      />
    </a>
  );
};

export default MLHBanner;
