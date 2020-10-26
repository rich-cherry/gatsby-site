import React from 'react'
import { Link } from 'gatsby'
import buttonStyles from './button.module.scss'

export default function Button(props) {
    return (
        <div className={buttonStyles.buttonBorder}>
            <Link to="/contact"><button className={buttonStyles.button}><span>{props.children}</span></button></Link>
        </div>
    )
}

