import React from 'react'
import Title from '../components/home/svgs/title'
import Theme from '../components/home/svgs/theme'
import Apply from '../components/home/svgs/apply'
import Sponsorhome from '../components/home/images/sponsorhome.png'
import Track1 from '../components/home/images/track1.png'
import Track2 from '../components/home/images/track2.png'
import Track3 from '../components/home/images/track3.png'
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
            <div style={{width: "100%", display : 'inline-block'}}>
                <img src={Track1} alt="tracks" className="tracks-img" onClick={() => onShowModal()}/>
                <img src={Track2} alt="tracks" className="tracks-img" onClick={() => onShowModal()}/>
                <img src={Track3} alt="tracks" className="tracks-img" onClick={() => onShowModal()}/>
            </div>
            <Faq />
            <img  src={Sponsorhome} alt="sponsors" style={{width: "60%", paddingLeft: "20%", height: "auto"}}/>
            <Apply />
            <ApplyButton className="button"/>
        </div>

    );
}