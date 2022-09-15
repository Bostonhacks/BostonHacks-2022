import * as React from 'react';
import SponsorTitleSection from '../components/sponsor/TitleSection/TitleSection';
import TwilioQuote from '../components/sponsor/TwilioQuote/TwilioQuote';
import WhoAreWe from '../components/sponsor/WhoAreWe/WhoAreWe';
import SponsorOpps from '../components/sponsor/SponsorOpps/SponsorOpps';
import ReviewSection from '../components/sponsor/ReviewSection/ReviewSection';
import WhyUs from '../components/sponsor/WhyUs/WhyUs';
import Chain from '../components/sponsor/WhyUs/Chain';
import TwillioBubble from '../components/sponsor/TwilioQuote/TwilioBubble';
import WhyUsBubble from '../components/sponsor/WhyUs/WhyUsBubble';
import StatisticsSection from '../components/sponsor/StatisticsSection/StatisticsSection';
import BostonHaxButton from '../components/sponsor/SponsorUs/BhaxButton';
import './Sponsor.css';
// Sponsorship page
export default function Sponsor() {
  return (
    <div className="sponsor">
      <SponsorTitleSection />
      <TwilioQuote />
      <TwillioBubble />
      <WhoAreWe />
      <WhyUs />
      <Chain />
      <WhyUsBubble />
      <SponsorOpps />
      <StatisticsSection />
      <ReviewSection />
      <BostonHaxButton buttonText="Sponsor Us" />
    </div>
  );
}
