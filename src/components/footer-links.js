import React from 'react'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faShopify, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import footerStyles from './footer-links.module.scss'

export default function FooterLinks() {
    return (
        <ul className={footerStyles.links}>
            <li className={footerStyles.link}>Why Shopify? <FontAwesomeIcon icon={faShopify} /> </li>
            <li className={footerStyles.link}>Client Login <FontAwesomeIcon icon={faSignInAlt} /></li>
            <li className={footerStyles.link}><FontAwesomeIcon icon={faGithub} /></li>
            <li className={footerStyles.link}><FontAwesomeIcon icon={faLinkedin} /></li>
        </ul>
    )
}



