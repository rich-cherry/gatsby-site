import React from 'react'
import overviewStyles from './overview.module.scss'

export default function Overview() {
  return (
    <div className={overviewStyles.container}>
      <div className={overviewStyles.a}
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="100"
        data-sal-easing="ease">
        <div>
          <h1> overview</h1>
          <hr />
        </div>
      </div>

      <div className={overviewStyles.b}
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="300"
        data-sal-easing="ease">
        <h3>US-based Full-stack Shopify Developer with over six years of experience working within the Shopify platform, as well as building headless Shopify sites.</h3>
      </div>
      <div className={overviewStyles.c}
        data-sal="fade"
        data-sal-duration="2000"
        data-sal-delay="700"
        data-sal-easing="ease">
        <ul>
          <li>Shopify Design & Build</li>
          <li>3rd-Party App Integration</li>
          <li>API Integration</li>
          <li>Content Management</li>
          <li>Email Automation</li>
          <li>Headless eCommerce</li>
          <li>Inventory Management</li>
          <li>Platform / Data Migration</li>
          <li>Site Optimization</li>
          <li>Theme Development</li>
          <li>Transportation & Fulfillment Setup</li>
          <li>Tweaks & Customizations</li>
        </ul>
      </div>

    </div>

  )


}
