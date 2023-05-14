import React from 'react'
import Section from '../../ui/Section'
import SectionHeading from '../SectingHeading'
import { Carousel } from '../Carosel'
import Container from '../../ui/Container'

const Testimonial = () => {
    return (
        <Section className='relative'>
            <Container className="relative">
                <SectionHeading upperText="Testimonial" bottomText="What they say" />
                <Carousel />
            </Container>
        </Section>
    )
}

export default Testimonial