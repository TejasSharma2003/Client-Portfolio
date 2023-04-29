import React from 'react'
import * as styles from './portfolio.module.css'

import PhotoGrid from '../../components/PhotoGrid'

import Container from '../../ui/Container'
import Section from '../../ui/Section'
import SectionHeading from '../SectingHeading'


const Portfolio = () => {
    return (
        <Section className='relative bg-black z-2'>
            <SectionHeading upperText="Portfolio" bottomText="My Dextirity with brushes" />
            <PhotoGrid />
        </Section>
    )
}

export default Portfolio