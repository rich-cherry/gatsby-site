import React from 'react'
import { Link } from 'gatsby'
import buttonStyles from './button.module.scss'

export default function Button(props) {
    return (
        <div className={buttonStyles.buttonBorder}>
            <div className={buttonStyles.hireButton}>
                <Link to="/contact"><button><span>{props.children}</span></button></Link>
            </div>
        </div>
    )
}

