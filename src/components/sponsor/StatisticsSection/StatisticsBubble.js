import React from 'react';
import Bubble from '../svg/StatisticsBubble.svg';

const StatisticsBubble = () => {
  return (
    <img className="statistics-bubble" style={{width: "25%", paddingLeft: "0", height: "auto"}} src={Bubble} alt="Statistics Bubble" />
  );
};

export default StatisticsBubble;
