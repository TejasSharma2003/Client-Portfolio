import React from 'react'
import * as styles from './socialContainer.module.css'

import { RiWhatsappFill } from '@react-icons/all-files/ri/RiWhatsappFill'
import { RiInstagramFill } from '@react-icons/all-files/ri/RiInstagramFill'
import { RiFacebookCircleFill } from '@react-icons/all-files/ri/RiFacebookCircleFill'

const SocialContainer = () => {

    const links = [
        {
            platform: 'Instagram',
            icon: RiInstagramFill,
            directTo: '#'
        },
        {
            platform: 'facebook',
            icon: RiFacebookCircleFill,
            directTo: '#'
        },
        {
            platform: 'whatsapp',
            icon: RiWhatsappFill,
            directTo: '#'
        }
    ]

    return (
        <div className={`${styles.socialLinks} relative z-40`}>
            {links.map(link =>
                <a href={link.directTo} target="_blank" className={`block text-3xl cursor-pointer`}><link.icon className='hover:fill-secondary  transition-colors' /></a>)}

            {/* <span className={`block text-4xl cursor-pointer`}><RiInstagramFill className='hover:fill-secondary  transition-colors' /></span>
            <span className={`block text-4xl`}><RiFacebookCircleFill /></span>
            <span className={`block text-4xl`}><RiWhatsappFill /></span> */}
        </div>
    )
}

export default SocialContainer;