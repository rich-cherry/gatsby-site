import React from 'react'
import techPartnerStyles from './tech-partners.module.scss'

export default function TechPartners() {
    return (
        <div className={techPartnerStyles.container}>
            <div className={techPartnerStyles.techPartnerContainer}>
                <div className={techPartnerStyles.techPartnerText}
                    data-sal="fade"
                    data-sal-duration="2000"
                    // data-sal-delay="1000"
                    data-sal-easing="ease">
                    <h1>Tech Partners</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui temporibus quis voluptas totam unde, quae omnis architecto? Aliquid optio quis officia enim corrupti natus aut quod dignissimos magnam odit.</p>
                </div>
                <div className={techPartnerStyles.techPartnerGrid}
                    data-sal="fade"
                    data-sal-duration="2000"
                    // data-sal-delay="2000"
                    data-sal-easing="ease">
                    <div className={techPartnerStyles.box}>
                        <div className={techPartnerStyles.shopify}></div>
                    </div>
                    <div className={techPartnerStyles.box}>Logo B</div>
                    <div className={techPartnerStyles.box}>Logo C</div>
                    <div className={techPartnerStyles.box}>Logo D</div>
                    <div className={techPartnerStyles.box}>Logo E</div>
                    <div className={techPartnerStyles.box}>Logo F</div>
                </div>
            </div>


        </div >
    )
}