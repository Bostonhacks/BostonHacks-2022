import React from 'react';

function SocialMediaIcon(props) {
    /**
     * Creates SVG + external link for each boston hacks social media
     * @param {String} props.platform accepts Facebook, Instagram, and Twitter as inputs
     */

    const platform = props.platform;
    
    const style = {  "width": "70px", "max-width": "100%"};

    switch (String(platform.toLowerCase())) {
        case "facebook":
            return (
                <a target='_blank' href='https://www.facebook.com/bostonhacks'>
                    <svg style={style}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="-7 -7 67 67"
                    >
                        <path
                            id="fbLogo"
                            fill="black"
                            d="M49 0H6a6 6 0 00-6 5v41a6 6 0 006 5h16V34h-7v-8h7v-7c0-7 5-11 12-11a49 49 0 017 1v7h-4c-4 0-5 2-5 4v6h8l-1 8h-7v17h17a6 6 0 005-5V5a6 6 0 00-5-5z"
                        />
                    </svg>
                </a>
            );
        case "instagram":
            return (
                <a target='_blank' href='https://www.twitter.com/boston_hacks'>
                    <svg style={style}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="-3 -3 70 70"
                    >
                        <path
                            fill="black"
                            d="M28.5 13.9a14.6 14.6 0 1014.7 14.6A14.6 14.6 0 0028.5 14zm0 24.1a9.5 9.5 0 119.5-9.5 9.5 9.5 0 01-9.5 9.5zm18.7-24.7a3.4 3.4 0 11-3.4-3.4 3.4 3.4 0 013.4 3.4zm9.7 3.5c-.3-4.6-1.3-8.7-4.7-12S45 .4 40.4.2c-4.7-.3-18.8-.3-23.5 0-4.6.2-8.6 1.3-12 4.6S.4 12.2.2 16.8c-.3 4.7-.3 18.8 0 23.5.2 4.6 1.3 8.6 4.6 12s7.4 4.3 12 4.5c4.7.3 18.8.3 23.5 0 4.6-.2 8.6-1.2 12-4.6s4.3-7.3 4.6-12c.2-4.6.2-18.7 0-23.4zm-6.1 28.5a9.6 9.6 0 01-5.4 5.5c-3.8 1.5-12.7 1.1-16.9 1.1s-13 .3-16.8-1.1a9.6 9.6 0 01-5.4-5.5c-1.5-3.7-1.1-12.6-1.1-16.8s-.4-13 1.1-16.8a9.6 9.6 0 015.4-5.4C15.5 4.8 24.4 5 28.5 5s13.1-.3 16.9 1.2a9.6 9.6 0 015.4 5.4c1.5 3.8 1.1 12.7 1.1 16.8s.4 13.1-1.1 16.8z"
                            id="instagramLogo"
                        />
                    </svg>
                </a>
            );
        case "twitter":
            return (
                <a target='_blank' href='https://www.instagram.com/bostonhacks'>
                    <svg style={style}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="-7 -7 67 67"
                    >
                        <path
                            id="twitterLogo"
                            fill="black"
                            d="M46 0H6a6 6 0 00-6 5v41a6 6 0 006 5h40a6 6 0 005-5V5a6 6 0 00-5-5zm-6 18v1a22 22 0 01-3 12 21 21 0 01-18 10 21 21 0 01-12-4 16 16 0 002 0 15 15 0 009-3 8 8 0 01-7-5 8 8 0 004 0 8 8 0 01-6-8 8 8 0 003 1 8 8 0 01-3-6 7 7 0 011-4 21 21 0 0015 8 8 8 0 0113-7 15 15 0 005-2 7 7 0 01-3 4 15 15 0 004-1 16 16 0 01-4 4z"
                        />
                    </svg>
                </a>
            );
        default:
            throw new Error('Invalid Input');
    }
}

export default SocialMediaIcon;