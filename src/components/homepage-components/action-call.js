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
                    <h1>(action-call)</h1>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique libero nam pariatur in? Laborum dolores consequatur exercitationem quae nam quidem, veniam ut, molestias quo, labore laudantium dolorum illo. Asperiores, veniam?</p>
                </div>

                <div className={actionCallStyles.card}
                    data-sal="slide-down"
                    data-sal-duration="2000"
                    // data-sal-delay="2000"
                    data-sal-easing="ease">
                    <p>(picture)</p>
                    <div className={actionCallStyles.cardBackground}
                        data-sal="slide-right"
                        data-sal-duration="2000"
                        // data-sal-delay="1000"
                        data-sal-easing="ease">
                        <p>(picture)</p>
                    </div>
                </div>

            </div>
        </div>
    )
}