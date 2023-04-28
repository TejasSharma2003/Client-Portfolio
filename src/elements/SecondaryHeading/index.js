import React from 'react'
import * as styles from './secondaryHeading.module.css'

const SecondaryHeading = (props) => {
    return (
        <h2 className={`${props.className}`}>{props.children}</h2>
    )
}

export default SecondaryHeading