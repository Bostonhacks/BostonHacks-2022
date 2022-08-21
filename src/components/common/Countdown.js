import React from 'react';
import { useState, useEffect } from 'react';
import Pie from './Pie';

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
        // <div id="Countdown" style={{paddingTop:"70px"}}>
        //     <h2 style={{margin: "0"}}>{time.days} Days {time.hours}:{time.minutes}:{time.seconds}</h2>
        // </div>
        <div className="Circle">
            <Pie percentage={currentTimeLeft.days / totalInterval.days * 100} label="DAYS" value={currentTimeLeft.days} colour="lightblue" />
            <Pie percentage={currentTimeLeft.hours / 24 * 100} label="HOURS" value={currentTimeLeft.hours} colour="lightblue" />
            <Pie percentage={currentTimeLeft.minutes / 60 * 100} label="MINUTES" value={currentTimeLeft.minutes} colour="lightblue" />
            <Pie percentage={currentTimeLeft.seconds / 60 * 100} label="SECONDS" value={currentTimeLeft.seconds} colour="lightblue" />


            <h3>{currentTimeLeft.days} days, {currentTimeLeft.hours} hours, {currentTimeLeft.minutes} minutes, {currentTimeLeft.seconds} seconds!</h3>
        </div>    
    );
}

