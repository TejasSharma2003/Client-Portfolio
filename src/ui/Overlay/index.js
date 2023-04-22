import React from 'react'
import * as styles from './overlay.module.css'

const Overlay = () => {
    return (
        <div className={`${styles.overlay}`}>
            <div className={`${styles.preloaderSpinner}`}></div>
        </div>
    )
}

export default Overlay