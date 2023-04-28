import React from 'react'
import * as styles from './section.module.css'

const Section = (props) => {
    return (
        <section className={`${props.className} ${styles.section}`}>{props.children}</section>
    )
}

export default Section