import React from 'react'
import techPartnerStyles from './tech-partners.module.scss'

export default function TechPartners() {
    return (
        <div className={techPartnerStyles.container}>
            <div className={techPartnerStyles.techPartnerContainer}>
                <div className={techPartnerStyles.techPartnerText}
                    data-sal="slide-left"
                    data-sal-duration="2000"
                    // data-sal-delay="1000"
                    data-sal-easing="ease">
                    <h1>Tech Partners</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique qui temporibus quis voluptas totam unde, quae omnis architecto? Aliquid optio quis officia enim corrupti natus aut quod dignissimos magnam odit.</p>
                </div>
                <div className={techPartnerStyles.techPartnerGrid}
                    data-sal="slide-right"
                    data-sal-duration="2000"
                    // data-sal-delay="2000"
                    data-sal-easing="ease">
                    <div className={techPartnerStyles.box}>A</div>
                    <div className={techPartnerStyles.box}>B</div>
                    <div className={techPartnerStyles.box}>C</div>
                    <div className={techPartnerStyles.box}>D</div>
                    <div className={techPartnerStyles.box}>E</div>
                    <div className={techPartnerStyles.box}>F</div>
                </div>
            </div>


        </div >
    )
}