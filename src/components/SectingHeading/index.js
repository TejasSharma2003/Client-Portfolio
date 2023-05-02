import React from 'react'

import SecondaryHeading from '../../elements/SecondaryHeading'
import Heading from '../../elements/Heading'

const SectionHeading = (props) => {
    return (
        <div className={`mb-32 ${props.className}`}>
            <SecondaryHeading className="capitalize flex items-center text-primary text-3xl sm:text-4xl">
                <span className='inline-block bg-white mr-5  w-12 h-0.5'></span>
                {props.upperText}
            </SecondaryHeading>
            <Heading className={`capitalize`}>{props.bottomText}</Heading>
        </div>
    )
}

export default SectionHeading