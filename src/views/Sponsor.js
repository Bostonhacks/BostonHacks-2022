import * as React from 'react';
import SponsorTitleSection from '../components/sponsor/TitleSection/TitleSection';
import TwilioQuote from '../components/sponsor/TwilioQuote/TwilioQuote';
import WhoAreWe from '../components/sponsor/WhoAreWe/WhoAreWe';
import SponsorOpps from '../components/sponsor/SponsorOpps/SponsorOpps';
import ReviewSection from '../components/sponsor/ReviewSection/ReviewSection';
import SponsorUs from '../components/sponsor/SponsorUs/SponsorUs';
import WhyUs from '../components/sponsor/WhyUs/WhyUs';
import Chain from '../components/sponsor/WhoAreWe/Chain';
import './Sponsor.css';
import TwillioBubble from '../components/sponsor/TwilioQuote/TwilioBubble';

// Sponsorship page
export default function Sponsor() {
  return (
    <div className="sponsor">
      <SponsorTitleSection />
      <TwilioQuote />
      <TwillioBubble />
      <WhoAreWe />
      <WhyUs />
      <SponsorOpps />
      <ReviewSection />
      <SponsorUs />
      <Chain />
    </div>
  );
}
