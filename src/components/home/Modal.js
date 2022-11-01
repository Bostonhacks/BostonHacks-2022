import React from 'react';

import "./Modal.css";

const AITrackHeader = () => {
    return <h2 className="track-header">Innovating with AI</h2>
}

const AITrackContent = () => {
    return (
        <div className="track-content">
            <p>We see AI all around us today: it personalizes your shopping ads, performs in self-driving cars, and powers the voice assistants on our phones. After all, developers are constantly incorporating it to create new technologies that mimic human behavior to perform it better and faster. What are some innovative ways we can use AI to improve our quality of life? </p>
            
            <ul>
                <li>Can you think of AI technologies right now that could be further improved?</li>
                <li>How can we enhance safety features in different tools, such as self-driving cars and surgical procedures in healthcare?</li>
                <li>Can we incorporate AI to improve our financial markets?</li>
                <li>How can we account for various scenarios in AI, especially unexpected situations?</li>
                <li>How can these AI technologies potentially integrate with other technologies (ML, AR/VR, cloud, big data, etc)?</li>
            </ul>
        </div>
    )
}

const AutomationTrackHeader = () => {
    return <h2 className="track-header">Automating for Meaning</h2>
}

const AutomationTrackContent = () => {
    return (
        <div className="track-content">
            <p>Companies and entrepreneurs innovate different ways to optimize their operations by approaching time consuming, repetitive tasks with new automated technologies. Think of some tedious and mundane tasks in your life that you spend a lot of time doing. How can we reduce the amount of time spent on that task and automate it to save time for meaningful things?</p>

            <ul>
                <li>What are examples of mundane tasks you encounter in your life?</li>
                <li>How can we make these automated solutions easy to use?</li>
                <li>How can we test these automated solutions? Which cases to consider?</li>
                <li>Is there any part of your daily routine that takes up a lot of time?</li>
            </ul>
        </div>
    )
}

const RevampingTrackHeader = () => {
    return <h2 className="track-header">Revamping the Old</h2>
}

const RevampingTrackContent = () => {
    return (
        <div className="track-content">
            <p>A lot of the applications that we currently use today were developed years ago, with an outdated vision of our needs. With society moving forward, so should these technologies. How can we place a new twist on some old applications or websites to better fit our society's more recent needs?</p>
        
            <ul>
                <li>Sponsored by Sargaent College: How can we revamp existing healthcare technology, tools and systems to devise better approaches to inspire healthy lifestyles for people of all ages and to mitigate the impact of stress, burnout and trauma?</li>
                <li>What is a new feature you would like to see on an existing application?</li>
                <li>How can we address prevalent social issues with current technologies?</li>
                <li>What is something that relies a lot more on technology now than before?</li>
                <li>Could you create a Google Extension to help you improve the experience of an existing website? What about blockchain websites?</li>
                <li>How can you add accessibility features to promote inclusivity?</li>
            </ul>
        </div>
    )
}

const Modal = ({showModal, onHideModal, track}) => {
    if (showModal) {
        return (
            <div className="modal-overlay" onClick={() => onHideModal()}>
                <div className="modal">
                    <div className="modal-header">
                        {track === 0 && <AITrackHeader/>}
                        {track === 1 && <AutomationTrackHeader/>}
                        {track === 2 && <RevampingTrackHeader/>}
                    </div>

                    {track === 0 && <AITrackContent/>}
                    {track === 1 && <AutomationTrackContent/>}
                    {track === 2 && <RevampingTrackContent/>}
                </div>
            </div>
        )
    }
}

export default Modal;