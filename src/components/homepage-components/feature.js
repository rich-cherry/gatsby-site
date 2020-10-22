import React from 'react'
import featureStyles from './feature.module.scss'
import FeatureLaptop from '../../images/backgrounds/feature-laptop'


export default function Feature() {
    return (
        <FeatureLaptop>
            <div className={featureStyles.container}
                data-sal="fade"
                data-sal-duration="2000"
                // data-sal-delay="1000"
                data-sal-easing="ease"
            >
                <h1>Services</h1>
                <div>
                    <div className={featureStyles.textContainer}
                        data-sal="fade"
                        data-sal-duration="2000"
                        data-sal-delay="100"
                        data-sal-easing="ease">
                        <div className={featureStyles.textContainerBorder}>
                            <h2>Lorem ipsum</h2>
                            <p> By the year 2021, worldwide retail ecommerce sales will reach $4.9 trillion.</p>
                        </div>
                    </div>
                    <div className={featureStyles.textContainer}
                        data-sal="fade"
                        data-sal-duration="2000"
                        data-sal-delay="500"
                        data-sal-easing="ease">
                        <div className={featureStyles.textContainerBorder}>
                            <h2>Lorem ipsum</h2>
                            <p> dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className={featureStyles.textContainer}
                        data-sal="fade"
                        data-sal-duration="2000"
                        data-sal-delay="900"
                        data-sal-easing="ease">
                        <div className={featureStyles.textContainerBorder}>
                            <h2>Hello</h2>
                        </div>
                    </div>
                </div>
            </div>
        </FeatureLaptop>
    )
}