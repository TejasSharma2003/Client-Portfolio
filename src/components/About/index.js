import React from 'react'
import * as styles from './about.module.css'
import { StaticImage } from 'gatsby-plugin-image'

import Para from '../../elements/Para'
import Section from '../../ui/Section'
import SectionHeading from '../SectingHeading'
import Container from '../../ui/Container'

const About = () => {
    return (
        <Section id="about" className={` relative ${styles.aboutSection}`}>
            <Container>
                <div className='grid  sm:grid-cols-2 gap-20'>
                    <div className=' overflow-hidden rounded-lg'>
                        <StaticImage
                            src='../../images/me.jpg'
                            placeholder='tracedSVG'
                            className='h-full'
                        />
                    </div>
                    <div className=' sm:mt-24'>
                        <SectionHeading className={styles.headingBox} upperText="Naina sharma" bottomText="makeup and Nail Artist" />
                        <Para className="text-white/[.55] mt-8 md:mt-0">From subtle and natural looks to bold and dramatic styles, Naina's expertise spans across various makeup techniques, including bridal, editorialand fashion. Her unique approach to makeup artistry is centered around using high-quality products and customized techniques that cater to each client's individual needs and preferences.</Para>
                        <Para className="mt-10  text-white/[.55]">
                            When Naina is not creating stunning makeup looks, she enjoys keeping up with the latest beauty trends and techniques and sharing her knowledge with aspiring makeup artists. She believes that every person deserves to feel beautiful and confident, and she is committed to using her talents to make that a reality for each of her clients.
                        </Para>
                    </div>
                </div>
            </Container>
        </Section>
    )
}

export default About