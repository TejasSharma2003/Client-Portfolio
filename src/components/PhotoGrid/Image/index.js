import React, { useState } from 'react'
import * as styles from './image.module.css'

import { GatsbyImage } from 'gatsby-plugin-image'

import { GoEye } from '@react-icons/all-files/go/GoEye'

import { motion } from 'framer-motion'



const cardVariants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.34, 0.2, 0, 0.97],
            duration: 1.5
        }
    }
};



const Image = (props) => {
    const [isHovering, setIsHovering] = useState(false);

    const onClickHandler = () => {
        props.getItemId(props.id);
    }

    return (
        <motion.div
            className='cursor-pointer mb-10 w-full overflow-hidden relative rounded-lg'
            onClick={onClickHandler}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            variants={cardVariants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{ once: true }}
        >
            <div
                className={`${styles.imageWrap} ${isHovering && styles.imageHover}`}
            >
                <GatsbyImage
                    className={`w-full transition-transform`}
                    image={props.imageSrc}
                    alt="some-image" />
                <GoEye className={styles.eyeIcon} />
            </div>
        </motion.div>
    )
}

export default Image