import * as React from 'react'
import SVGTest from '../components/sponsor/SVGTest'
import SponsorTable from '../components/sponsor/SponsorTable'

// Sponsorship page
export default function Sponsor() {
    return (
        <div>
            <h1>Sponsor (Public)</h1>
            <SponsorTable />
            <SVGTest />
        </div>
    )
}
