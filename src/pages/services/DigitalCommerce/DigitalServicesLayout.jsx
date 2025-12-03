import React from 'react'
import DigitalCommerce from './DigitalCommerce'
import DCOverview from './DCOverview'
import DigitalCommerceProducts from './DigitalCommerceProducts'
import DCResources from './DCResources'
import DCFAQ from './DCFAQ'
import HomeContact from '../../Home/HomeContact'

const DigitalServicesLayout = () => {
  return (
    <div>
      <DigitalCommerce />
      <DCOverview />
      <DigitalCommerceProducts />
      <DCResources />
      <DCFAQ />
     <HomeContact />
    </div>
  )
}

export default DigitalServicesLayout