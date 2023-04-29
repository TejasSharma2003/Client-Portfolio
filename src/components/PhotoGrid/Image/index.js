import React, { useState } from 'react'
import * as styles from './image.module.css'

import { GatsbyImage } from 'gatsby-plugin-image'

import { BsEye } from '@react-icons/all-files/bs/BsEye'

import {motion} from 'framer-motion'


const cardContainerVariants = {
    onscreen: {
        transition: {
            staggerChildren: .5
        }
    }
}

const cardVariants = {
    offscreen: {
        opacity: 0,
    },
    onscreen: {
        opacity: 1,
        transition: {
            ease: [0.87, 0, 0.13, 1],
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
            className='cursor-pointer mb-10 w-full overflow-hidden relative'
            onClick={onClickHandler}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            variants={cardVariants}
            initial='offscreen'
            whileInView='onscreen'
            viewport={{once:true}}
        >
            <div
                className={`${styles.imageWrap} ${isHovering && styles.imageHover}`}
            >
                <GatsbyImage
                    className={`w-full transition-transform`}
                    image={props.imageSrc}
                    alt="some-image" />
                <BsEye className={styles.eyeIcon} />
            </div>
        </motion.div>
    )
}

export default Image