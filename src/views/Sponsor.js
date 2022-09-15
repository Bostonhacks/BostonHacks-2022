import * as React from 'react';
import SponsorTitleSection from '../components/sponsor/TitleSection/TitleSection';
import TwilioQuote from '../components/sponsor/TwilioQuote/TwilioQuote';
import TwilioBubble from '../components/sponsor/TwilioQuote/TwilioBubble';
import WhoAreWe from '../components/sponsor/WhoAreWe/WhoAreWe';
import WhoAreWeGradient from '../components/sponsor/WhoAreWe/WhoAreWeGradient';
import SponsorOpps from '../components/sponsor/SponsorOpps/SponsorOpps';
import SponsorOppsGradient1 from '../components/sponsor/SponsorOpps/SponsorOppsGradient1';
import SponsorOppsGradient2 from '../components/sponsor/SponsorOpps/SponsorOppsGradient2';
import SponsorOppsGradient3 from '../components/sponsor/SponsorOpps/SponsorOppsGradient3';
import ReviewSection from '../components/sponsor/ReviewSection/ReviewSection';
import ReviewBubble1 from '../components/sponsor/ReviewSection/ReviewBubble1';
import ReviewBubble2 from '../components/sponsor/ReviewSection/ReviewBubble2';
import WhyUs from '../components/sponsor/WhyUs/WhyUs';
import WhyUsGradient1 from '../components/sponsor/WhyUs/WhyUsGradient1';
import WhyUsGradient2 from '../components/sponsor/WhyUs/WhyUsGradient2';
import Chain from '../components/sponsor/WhyUs/Chain';
import WhyUsBubble from '../components/sponsor/WhyUs/WhyUsBubble';
import StatisticsSection from '../components/sponsor/StatisticsSection/StatisticsSection';
import StatisticsBubble from '../components/sponsor/StatisticsSection/StatisticsBubble';
import StatisticsGradient from '../components/sponsor/StatisticsSection/StatisticsGradient';
import SponsorUs from '../components/sponsor/SponsorUs/SponsorUs';
import ChromeBar from '../components/sponsor/SponsorUs/ChromeBar';
import SponsorUsBubble from '../components/sponsor/SponsorUs/SponsorUsBubble';
import './Sponsor.css';
// Sponsorship page
export default function Sponsor() {
  return (
    <div className="sponsor">
      <SponsorTitleSection />
      <TwilioQuote />
      <TwilioBubble />
      <WhoAreWe />
      <WhoAreWeGradient />
      <WhyUs />
      <WhyUsGradient1 />
      <WhyUsGradient2 />
      <Chain />
      <WhyUsBubble />
      <SponsorOpps />
      <SponsorOppsGradient1 />
      <SponsorOppsGradient2 />
      <SponsorOppsGradient3 />
      <StatisticsSection />
      <StatisticsBubble />
      <StatisticsGradient />
      <ReviewSection />
      <ReviewBubble1 />
      <ReviewBubble2 />
      <SponsorUs />
      <ChromeBar />
      <SponsorUsBubble />
    </div>
  );
}
