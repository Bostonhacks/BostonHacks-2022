import React from 'react'
import Title from '../components/home/svgs/title'
import Theme from '../components/home/svgs/theme'
import Apply from '../components/home/svgs/apply'
import Sponsorhome from '../components/home/images/sponsorhome.png'
import TracksHeader from '../components/home/images/tracksHeader.png'
import Track1 from '../components/home/images/track1.png'
import Track2 from '../components/home/images/track2.png'
import Track3 from '../components/home/images/track3.png'
import Faq from '../components/home/svgs/faq'
import ApplyButton from '../components/home/svgs/applybutton'
import SponsorButton from '../components/home/svgs/sponsorbutton'
import Modal from "../components/home/Modal"
import MLHBanner from '../components/sponsor/MLHBanner/MLHBanner';
import Footer from "../components/common/Footer";
import './Home.css'

export default function Home() {
    const [showModal, setShowModal] = React.useState(false);
    const [track, setTrack] = React.useState(0);

    const onShowModal = (track) => {
        setTrack(track);
        setShowModal(true);
    }
    
    const onHideModal = () => {
        setShowModal(false);
    }

    return (
        <div className='home'>
            <Modal showModal={showModal} onHideModal={onHideModal} track={track}/>
            <MLHBanner />
            <Title/>
            <ApplyButton className="button"/>
            <SponsorButton className="button"/>
            <Theme />
            <img  src={TracksHeader} alt="tracks" style={{width: "20%", paddingLeft: "40%", height: "auto", paddingBottom: "10px"}}/>
            <h3 className="sideNote">Click each Track for more information!</h3>
            <div style={{width: "100%", display : 'inline-block'}}>
                <img src={Track1} alt="tracks" className="tracks-img" onClick={() => onShowModal(0)}/>
                <img src={Track2} alt="tracks" className="tracks-img" onClick={() => onShowModal(1)}/>
                <img src={Track3} alt="tracks" className="tracks-img" onClick={() => onShowModal(2)}/>
            </div>
            <Faq />
            <img  src={Sponsorhome} alt="sponsors" style={{width: "60%", paddingLeft: "20%", height: "auto"}}/>
            <Apply />
            <ApplyButton className="button"/>
            <Footer />
        </div>

    );
}