import React from 'react'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faShopify, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import footerStyles from './footer-links.module.scss'

export default function FooterLinks() {
    return (
        <ul className={footerStyles.links}>
            <div>
                <li>Contact</li>
                <li>Why Shopify? <FontAwesomeIcon icon={faShopify} /> </li>
                <li>Client Login <FontAwesomeIcon icon={faSignInAlt} /></li>
            </div>

            <li><FontAwesomeIcon icon={faGithub} /></li>
            <li><FontAwesomeIcon icon={faLinkedin} /></li>
        </ul>
    )
}



