import React from 'react'
import * as styles from './button.module.css'

const Button = (props) => {
    return (
        <button className={`${styles.btn} ${props.className}`}>{props.children}</button>
    )
}

export default Button