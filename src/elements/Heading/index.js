import React from 'react'

const Heading = (props) => {
    return (
        <h1 style={{fontSize:'4.5rem'}} className={`${props.className} font-play-fair tracking-wider`}>{props.children}</h1>
    )
}

export default Heading