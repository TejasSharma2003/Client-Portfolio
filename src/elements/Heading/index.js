import React from 'react'
import * as styles from './heading.module.css'

const Heading = (props) => {
    return (
        <h1 style={{ fontSize: '3.8rem' }} className={`${props.className} font-play-fair tracking-wider`}>{props.children}</h1>
    )
}

export default Heading