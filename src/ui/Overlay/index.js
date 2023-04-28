import React from 'react'
import * as styles from './overlay.module.css'

import { AnimatePresence, motion } from 'framer-motion'

import Logo from '../../components/Logo'

const Overlay = ({ id }) => {
    return (
        <motion.div
            key={id}
            className={`${styles.overlay}`}
            exit={{ opacity: 0 }}
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: .2 }}
                style={{flexDirection:'column'}}
                className='flex items-center justify-center'
            >
                <Logo className={`${styles.bannerLogo}`} />
                <div className={styles.loaderLine}></div>
            </motion.div>
        </motion.div>
    )
}

export default Overlay