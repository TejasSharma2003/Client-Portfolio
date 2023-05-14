import React from 'react'
import * as styles from './hero.module.css'

import { StaticImage } from "gatsby-plugin-image"

import ScrollDown from '../../util/ScrollDown'

import Para from '../../elements/Para'
import Button from '../../elements/Button'

import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";

const Hero = () => {

    const onClickHandlerScroll = () => {
        ScrollDown('services');
    }

    return (
        <div className={`${styles.hero} mt-40 `}>
            <div>
                <div><span className={`block uppercase text-primary ${styles.role}`}>Makeup / Nails Artist</span></div>
                <h1 className={`${styles.heroH1} font-play-fair uppercase `}>naina <br />sharma</h1>
                <Para className={`${styles.heroPara} mt-6 max-w-3xl text-white/[.55]`}>
                    Welcome to the world of beauty! Naina is a professional makeup artist with a passion for enhancing natural beauty and creating unique looks that make my clients feel confident and beautiful.</Para>
            </div>
            <Button onClick={onClickHandlerScroll} className={`${styles.heroButton} py-4 px-8 mt-10 `}>
                <span className='flex items-center'>Find Out More<span className={`ml-3 `}>
                    <BsChevronDown className={styles.heroArrowUpIcon} />
                </span></span>
            </Button>


            <div className={`${styles.leftFade} ${styles.fade}`}></div>
            <div className={`${styles.bottomFade} ${styles.fade}`}></div>
            <div className={`${styles.topFade} ${styles.fade}`}></div>
            <div className={`${styles.rightFade} ${styles.fade}`}></div>


            <StaticImage
                src="../../images/work.jpg"
                style={{ position: 'absolute' }}
                alt="myword"
                className={`${styles.heroImage}`}
                layout="constrained"
                placeholder="tracedSVG"
                loading='eager'

            />

            <span className='absolute  z-30 bottom-5 right-2 text-xl text-white/50 tracking-wider uppercase t'>A glimse of Work.</span>
        </div>
    )
}

export default Hero