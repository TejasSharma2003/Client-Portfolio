import React, { useState } from 'react'
import * as styles from './shc.module.css'

import SecondaryHeading from '../../../elements/SecondaryHeading'

const SocialHandleContainer = ({ prop }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={`flex items-center ${styles.socialHandleContainer}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false) }}>

            <span className={`${styles.iconCover} flex items-center justify-center`} style={{ backgroundColor: isHovered ? `${prop.hover}` : '' }} >
                <img className='relative w-10 h-10' src={prop.flatform} alt={prop.name} />
            </span>

            <SecondaryHeading className='text-3xl sm:text-4xl capitalize ml-5 font-play-fair tracking-wider'>{prop.name}</SecondaryHeading>
        </div>
    )
}

export default SocialHandleContainer