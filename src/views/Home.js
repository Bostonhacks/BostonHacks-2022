import React from 'react'
import Title from '../components/home/svgs/title'
import Theme from '../components/home/svgs/theme'
import Apply from '../components/home/svgs/apply'
import Sponsorhome from '../components/home/images/sponsorhome.png'
import Tracks from '../components/home/images/tracks.png'
import Faq from '../components/home/svgs/faq'
import ApplyButton from '../components/home/svgs/applybutton'
import SponsorButton from '../components/home/svgs/sponsorbutton'
import Modal from "../components/home/Modal"
import './Home.css'

export default function Home() {
    const [showModal, setShowModal] = React.useState(false);

    const onShowModal = () => {
        setShowModal(true);
    }
    
    const onHideModal = () => {
        setShowModal(false);
    }

    return (
        <div className='home'>
            <Modal showModal={showModal} onHideModal={onHideModal}/>
            <Title/>
            <ApplyButton className="button"/>
            <SponsorButton className="button"/>
            <Theme />
            <img src={Tracks} alt="tracks" className="tracks-img" onClick={() => onShowModal()}/>
            <Faq />
            <img  src={Sponsorhome} alt="sponsors" style={{width: "60%", paddingLeft: "20%", height: "auto"}}/>
            <Apply />
            <ApplyButton className="button"/>
        </div>

    );
}