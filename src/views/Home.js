import React from 'react'
import FAQBlock from '../components/home/FAQBlock'
import Title from '../components/home/svgs/title'
import Theme from '../components/home/svgs/theme'
import Tracks from '../components/home/svgs/tracks'
import './Home.css'
var FAQData = [
    {
        "q": "What is BostonHacks?",
        "a": "BostonHacks is a 24-hour event where students from different backgrounds gather together to use technology to create cool projects. Come to BostonHacks to expand your knowledge and skills, make new friends, win prizes and network with recruiters from our corporate sponsors! "
    },
    {
        "q": "When and where is BostonHacks?",
        "a": "BostonHacks is a in-person 24-hour hackathon on November 12-13th, 2022. "
    },
    {
        "q": "Who can attend?",
        "a": "All students including undergraduate, graduate and high school students with any background, all across the world are welcome! "
    },
    {
        "q": "Do I need experience?",
        "a": "No experience is necessary. We will have plenty of mentors and resources available, along with several workshops targeted for beginners. Come learn and experience your first hackathon at BostonHacks! "
    },
    {
        "q": "Does it cost anything?",
        "a": "BostonHacks is 100% free. You don’t have to spend a dime! Unfortunately, we won’t be providing any travel reimbursements this year. "
    },
    {
        "q": "Can we form teams?",
        "a": "Of course you can! We encourage people to work in teams of up to 4 people. You may opt-in to team formation through our Discord Channel which will match you with an ideal team. You can work alone, but it won’t be the same. "
    },
    {
        "q": "Are there any rules?",
        "a": "We want to ensure a positive experience for all participants. We encourage you to read the MLH Code of Conduct."
    }
];
export default function Home() {
    return (
        <div className='home'>
            <Title/>
            <Theme/>
            <Tracks/>
            <FAQBlock pairs={FAQData}/>
        </div>

    );
}