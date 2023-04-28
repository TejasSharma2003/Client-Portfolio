import React from 'react'
import * as styles from './logo.module.css'
import { StaticImage } from 'gatsby-plugin-image'

import logo from '../../images/logo-new-min.png'

const Logo = (props) => {
    return (
        <img src={logo} alt="logo" className={`${styles.logo} ${props.className}`}/>
    )
}
export default Logo