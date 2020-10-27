import React from 'react'
import { Link } from 'gatsby'
import actionCallStyles from './action-call.module.scss'

export default function Overview() {
    return (
        <div className={actionCallStyles.container}>
            <div className={actionCallStyles.overviewContainer}
                data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="200"
                data-sal-easing="ease">
                <h1>Ready to start? Let's talk.</h1>
                <Link to="/contact"><button className={actionCallStyles.button}><span>Get in touch</span></button></Link>
            </div>
        </div>
    )
}