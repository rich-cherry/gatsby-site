import React from 'react'
import overviewStyles from './overview.module.scss'

export default function Overview() {
    return (
        <div className={overviewStyles.container}>
            <div className={overviewStyles.overviewContainer}
                data-sal="fade"
                data-sal-duration="2000"
                data-sal-delay="1000"
                data-sal-easing="ease">
                <div className={overviewStyles.overviewText}>
                    <h1>Overview &#10143;</h1>
                    <h2>Hello Hello!</h2>
                </div>

                <div className={overviewStyles.card}
                    data-sal="fade"
                    data-sal-duration="2000"
                    data-sal-delay="2000"
                    data-sal-easing="ease">
                    <h1>Hello</h1>
                </div>

            </div>
        </div>
    )
}
