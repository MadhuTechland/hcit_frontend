import React from 'react'
import CpgAndRetail from './CpgAndRetail'
import OverView from './OverView'
import PodCast from './PodCast'
import FashionRetail from './FashionRetail'
import SubIndustries from './SubIndustries'
import OurExpertise from './OurExpertise'
import CPGSolutions from './CPGSolutions'
import CoreOffering from './CoreOffering'
import IndustryCaseStudy from './IndustryCaseStudy'
import LeadershipPulse from './LeadershipPulse'
import HomeContact from "../Home/HomeContact"
const CpgAndRetailLayout = () => {
    return (
        <div>
            <CpgAndRetail />
            <OverView />
            <PodCast />
            <FashionRetail />
            <SubIndustries />
            <OurExpertise />
            <CPGSolutions />
            <CoreOffering />
            <IndustryCaseStudy />
            <LeadershipPulse />
    <HomeContact />
        </div>
    )
}

export default CpgAndRetailLayout