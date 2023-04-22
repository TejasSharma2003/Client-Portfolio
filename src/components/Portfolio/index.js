import React from 'react'
import * as styles from './portfolio.module.css'

import SecondaryHeading from '../../elements/SecondaryHeading'
import Heading from '../../elements/Heading'

import PhotoGrid from '../../components/PhotoGrid'

import bridal from '../../images/bridal.jpg'
import bridalSmall from '../../images/bridal-small.jpg'

import images from './images';


import Container from '../../ui/Container'

const Portfolio = () => {
    return (
        <section className='relative bg-black z-2'>
            <Container>
                <div className={``}>
                    <SecondaryHeading className="capitalize flex items-center">
                        <span className='inline-block bg-white mr-5  w-12 h-0.5'></span>
                        My work
                    </SecondaryHeading>
                    <Heading className={`capitalize mt-4`}>Portfolio</Heading>
                    <PhotoGrid galleryID="my-test-gallery" images={images} />
                </div>

            </Container>
        </section>
    )
}

export default Portfolio