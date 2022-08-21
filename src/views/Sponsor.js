import * as React from 'react';
import SponsorTitleSection from '../components/sponsor/svg/SponsorTitleSection';
import TwilioQuote from '../components/sponsor/svg/TwilioQuote';
import WhoAreWe from '../components/sponsor/svg/WhoAreWe';
import WhyUs from '../components/sponsor/svg/WhyUs';
import SponsorOpps from '../components/sponsor/svg/SponsorOpps';
import ReviewSection from '../components/sponsor/svg/ReviewSection';
import SponsorUs from '../components/sponsor/svg/SponsorUs';
import './Sponsor.css';

// Sponsorship page
export default function Sponsor() {
  return (
    <div className="sponsor">
      <SponsorTitleSection />
      <TwilioQuote />
      <WhoAreWe />
      <WhyUs />
      <SponsorOpps />
      <ReviewSection />
      <SponsorUs />
    </div>
  );
}
