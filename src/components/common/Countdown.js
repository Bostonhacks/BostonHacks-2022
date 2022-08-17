import React from 'react';
import { useState, useEffect } from 'react';

/**
 * @author Matt Firmin, Simran Singh
 */

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    let deadline = new Date(`11/12/${year}`);   // Will always say the current year >:)
    deadline.setHours(10, 20, 0);
    let difference = +deadline - +new Date();

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

    var time = calculateTimeLeft();
    return (
        <div id="Countdown">
            <h2>{time.days} Days {time.hours}:{time.minutes}:{time.seconds}</h2>
        </div>
    );
}

