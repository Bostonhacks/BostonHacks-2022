import React from 'react';
import './SponsorUs.css';

const CustomButton = (props) => {
  return <button className={props.class}>{props.buttonText}</button>;
};

export default CustomButton;
