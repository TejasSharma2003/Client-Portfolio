import React from 'react'
import * as styles from './about.module.css'
import { StaticImage } from 'gatsby-plugin-image'

import Para from '../../elements/Para'
import Section from '../../ui/Section'
import SectionHeading from '../SectingHeading'
import Container from '../../ui/Container'

const About = () => {
    return (
        <Section className={` relative ${styles.aboutSection}`}>
            <Container>
                <div className='grid md:grid-cols-2 md:gap-20'>
                    <div className='col-start-2'>
                        <SectionHeading className={styles.headingBox} upperText="Naina sharma" bottomText="makeup and Nail Artist" />
                        <Para className="text-white/[.55]">A makeup artist is a professional who specializes in the application of cosmetics to enhance the appearance of a person's face, body, or other features. They use various products and techniques to create different looks, ranging from natural and subtle to bold and dramatic.</Para>
                        <Para className="mt-10  text-white/[.55]">
                            A makeup artist is a professional who specializes in the application of cosmetics to enhance the appearance of a person's face, body, or other features. They use various products and techniques to create different looks, ranging from natural and subtle to bold and dramatic.
                        </Para>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default About