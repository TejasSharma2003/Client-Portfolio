import React from 'react'
import * as styles from './para.module.css'

const Para = (props) => {
  return (
    <p className={`${styles.para} ${props.className}`}>{props.children}</p>
  )
}

export default Para