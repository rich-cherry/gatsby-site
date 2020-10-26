import React from 'react'
import actionCallStyles from './action-call.module.scss'

export default function Overview() {
    return (
        <div className={actionCallStyles.container}>
            <div className={actionCallStyles.overviewContainer}>
                <div className={actionCallStyles.overviewText}
                    data-sal="fade"
                    data-sal-duration="2000"
                    // data-sal-delay="1000"
                    data-sal-easing="ease">
                    <h1>Ready to start?</h1>
                    <hr />
                </div>
            </div>
        </div>
    )
}