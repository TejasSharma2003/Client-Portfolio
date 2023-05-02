import React from 'react'
import * as styles from './heading.module.css'

const Heading = (props) => {
    return (
        <h1 className={`${props.className} ${styles.heading} font-play-fair tracking-wider`}>{props.children}</h1>
    )
}

export default Heading