import React from 'react';
import { useState, useEffect } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Countdown.css';

/**
 * @author Matt Firmin, Simran Singh
 */



/**
 * Call with current date and also with coundown start date and subtract the two
 * @returns Gives how many days left until the countdown ends from now
 */
const calculateTimeLeft = (fromTime, endTime) => {
    
    let difference = +endTime - + fromTime;

    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    return timeLeft;
}

export default function Coundown() {
    const [cTime, setTime] = useState(Date.now());

    useEffect(() => {
        const interval = setInterval(() => setTime(Date.now()), 1000);
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    const countdownStartDate = new Date('August 19, 2022 23:15:30');

    const deadline = new Date('November 12, 2022 10:20:00');
    
    var totalInterval = calculateTimeLeft(countdownStartDate, deadline);
    var currentTimeLeft = calculateTimeLeft(cTime, deadline);

    return (
    <div className="countdown">
        <h1 style={{color: "white"}}>Coming Soon</h1>
        <ul >
            <li>
            <CircularProgressbar value={currentTimeLeft.days} maxValue={totalInterval.days} text={`${currentTimeLeft.days} Days`} styles={progressStyle} />
            </li>
            <li>
            <CircularProgressbar value={currentTimeLeft.hours} maxValue={24} text={`${currentTimeLeft.hours} Hours`} styles={progressStyle}/>
            </li>
            <li>
            <CircularProgressbar value={currentTimeLeft.minutes} maxValue={60} text={`${currentTimeLeft.minutes} Mins`} styles={progressStyle}/>
            </li>
            <li>
            <CircularProgressbar value={currentTimeLeft.seconds} maxValue={60} text={`${currentTimeLeft.seconds} Secs`} styles={progressStyle}/>
            </li>
        </ul>
    </div>
    );
}

var progressStyle = buildStyles({
    // Rotation of path and trail, in number of turns (0-1)

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',


    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.75,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: '#98A5F2',
    textColor: '#FFFFFF',
    trailColor: '#FFFFFF',
  });


