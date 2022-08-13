import * as React from 'react';
import SponsorTitleSection from '../components/sponsor/svg/SponsorTitleSection';
import SponsorTable from '../components/sponsor/SponsorTable';
import BackgroundGradient from '../components/sponsor/svg/BackgroundGradient';

// Sponsorship page
export default function Sponsor() {
  return (
    <div>
      <h1>Sponsor (Public)</h1>
      <SponsorTable />
      <SponsorTitleSection />
      <BackgroundGradient />
    </div>
  );
}
