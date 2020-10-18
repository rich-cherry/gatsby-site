import React from 'react'
import Header from './header'
import Footer from '../components/footer'
import layoutContactStyles from './layoutContact.module.scss'


export default function LayoutContact(props) {
    return (
        <div className={layoutContactStyles.mainContainer}>
            <div className={layoutContactStyles.container}>
                <div className={layoutContactStyles.content}>
                    <Header />
                    {props.children}
                </div>
                <Footer />
            </div>
        </div >
    )
}