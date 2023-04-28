import React from 'react'
import * as styles from './hero.module.css'

import { StaticImage } from "gatsby-plugin-image"

import Para from '../../elements/Para'
import Button from '../../elements/Button'

import { BsChevronDown } from "@react-icons/all-files/bs/BsChevronDown";

const Hero = () => {
    return (
        <div className={`${styles.hero} mt-40 `}>
            <div className={`${styles.heroTextBox} `}>
                <div><span className={`block uppercase text-primary ${styles.role}`}>Makeup / Nails Artist</span></div>
                <h1 className={`${styles.heroH1} font-play-fair uppercase `}>naina <br />sharma</h1>
                <Para className={`${styles.heroPara} mt-6 max-w-3xl text-white/[.55]`}>Hello, I’m Naina Sharma I would like to welcome you to my Personal Porfolio Check out my work by clicking below button</Para>
            </div>
            <Button className={`${styles.heroButton} py-4 px-8 mt-10 `}>
                <span className='flex items-center'>Explore My Work<span className={`ml-3 `}>
                    <BsChevronDown className={styles.heroArrowUpIcon} />
                </span></span>
            </Button>


            <div className={`${styles.leftFade} ${styles.fade}`}></div>
            <div className={`${styles.bottomFade} ${styles.fade}`}></div>
            <div className={`${styles.topFade} ${styles.fade}`}></div>

            <div>
                <StaticImage
                    src="../../images/work.jpg"
                    alt="myword"
                    className={styles.heroImage}
                    layout="constrained"
                    placeholder="tracedSVG"
                    loading='eager'

                />
            </div>
            <span className='absolute  z-30 bottom-5 right-2 text-xl text-white/50 tracking-wider uppercase t'>A glimse of my Work.</span>
        </div>
    )
}

export default Hero