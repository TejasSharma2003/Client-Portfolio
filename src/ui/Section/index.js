import React from 'react'
import * as styles from './section.module.css'

const Section = (props) => {

    const id = props.id || null;
    return (
        <section id={id} className={`${props.className} ${styles.section}`}>{props.children}</section>
    )
}

export default Section