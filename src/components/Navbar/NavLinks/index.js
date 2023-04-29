import React from 'react'
import * as styles from './navLinks.module.css'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { motion, staggerChildren } from 'framer-motion'

import image from '../../../images/navimg.jpg'

const links = [
    {
        directTo: '/',
        text: 'Homepage'
    },
    {
        directTo: '/portfolio',
        text: 'Portfolio'
    },
    {
        directTo: '/services',
        text: 'Services'
    },
    {
        directTo: '/reviews',
        text: 'Testimonial'
    }
]

const linksContainerVariants = {
    show: { transition: { staggerChildren: 0.2 } }
}


const linkVariant = {
    show: {
        opacity: 1, y: 0, transition: {
            ease: 'easeInOut',
            duration: .5
        }
    },
    hidden: { opacity: 0, y: 20 },
    exit: {
        opacity: 0, y: 20, transition: {
            ease: 'easeInOut',
            duration: .2
        }
    }
}

const NavLinks = () => {

    return (
        <motion.div
            key="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`${styles.navLinksContainer} flex items-center justify-center`}>
            <motion.ul
                variants={linksContainerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className={`${styles.links} text-center`}>
                {links.map((link, idx) => {
                    return (
                        <motion.li
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 1 }}
                            transition={{
                                ease: 'easeInOut',
                                duration: 0.2
                            }}
                            variants={linkVariant}
                            key={idx} className={`block tracking-wider`}>
                            <Link to={link.directTo} activeClassName={styles.activeLink} className={`${styles.link}`}>
                                {link.text}
                            </Link>
                        </motion.li>
                    )
                })}
            </motion.ul>
            <div className={`${styles.leftFade} ${styles.fade}`}></div>
            <div className={`${styles.bottomFade} ${styles.fade} `}></div>
            <div>
                <StaticImage
                    src="/src/images/navimg.jpg"
                    alt="client"
                    className={styles.navImage}
                    layout='constrained'
                    placeholder="tracedSVG"
                    loading='eager'
                />
            </div>
        </motion.div>

    )
}

export default NavLinks