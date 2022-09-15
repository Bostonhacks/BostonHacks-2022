import React from 'react';

const WhoAreWeGradient = () => {
  return (
    <svg
      className="who-are-we-gradient"
      width="720"
      height="942"
      viewBox="0 0 720 942"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_310_1322)">
        <ellipse
          cx="188.996"
          cy="470.981"
          rx="223.919"
          ry="363.597"
          transform="rotate(57.8756 188.996 470.981)"
          fill="#F0ABFF"
          fill-opacity="0.25"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_310_1322"
          x="-341.241"
          y="0.158325"
          width="1060.47"
          height="941.645"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="100"
            result="effect1_foregroundBlur_310_1322"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default WhoAreWeGradient;
