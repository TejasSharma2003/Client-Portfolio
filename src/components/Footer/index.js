import React, { useState } from 'react'
import * as styles from './footer.module.css'
import Logo from '../Logo'

import faceBook from '../../images/facebook.svg'
import Instagram from '../../images/instagram.svg'


import SocialHandleContainer from './SocialHandleContainer'

const handles = [
    {
        flatform: Instagram,
        name: 'instagram',
        hover: '#E1306C'
    },
    {
        flatform: faceBook,
        name: 'Facebook',
        hover: '#4267B2'
    }
]

const Footer = () => {

    return (
        <footer className={`flex items-center justify-center text-center ${styles.footer}`}>
            <div className=''>
                <Logo />
                <span className='capitalized block text-2xl mt-5 mb-12 tracking-widest'>Make-up & Nail Artist</span>
                <div className='flex items-center'>
                    {handles.map((handle, idx) => {
                        return <SocialHandleContainer prop={handle} key={idx} />
                    })}
                </div>
                <span className='text-lg mt-12 inline-block text-white/[.55]'>© 2023 Naina Makeover - Code by Tejas</span>
            </div>
        </footer>
    )
}

export default Footer