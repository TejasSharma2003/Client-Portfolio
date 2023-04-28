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
            {links.map((link, idx) => {
                return <a key={idx} href={link.directTo} target="_blank" className={`block text-3xl cursor-pointer`}><link.icon className='hover:fill-secondary  transition-colors' /></a>
            })}

        </div>
    )
}

export default SocialContainer;