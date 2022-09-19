import React from 'react'
import Title from '../components/home/svgs/title'
import Theme from '../components/home/svgs/theme'
import Apply from '../components/home/svgs/apply'
import Sponsorhome from '../components/home/images/sponsorhome.png'
import Tracks from '../components/home/images/tracks.png'
import Faq from '../components/home/svgs/faq'
import ApplyButton from '../components/home/svgs/applybutton'
import SponsorButton from '../components/home/svgs/sponsorbutton'
import './Home.css'


export default function Home() {
    return (
        <div className='home'>
            <Title/>
            <ApplyButton className="button"/>
            <SponsorButton className="button"/>
            <Theme />
            <img  src={Tracks} style={{width: "100%", height: "auto"}}/>
            <Faq />
            <img  src={Sponsorhome} style={{width: "60%", paddingLeft: "7%", height: "auto"}}/>
            <Apply />
            <ApplyButton className="button"/>
        </div>

    );
}