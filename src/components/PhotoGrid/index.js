import React, { useState } from 'react'
import * as styles from './photoGrid.module.css'


import { graphql, useStaticQuery } from 'gatsby'

import {  getImage } from 'gatsby-plugin-image'
import Image from './Image'

import ImageCarosel from './ImageCarosel'
import { AnimatePresence } from 'framer-motion'


const PhotoGrid = () => {
  const [currentImageIdx, setCurrentImageIdx] = useState(null);

  const data = useStaticQuery(graphql`
  query{
    allContentfulAsset {
      edges {
        node {
          id
          url
          file {
            details {
              image {
                width
                height
              }
            }
          }
          gatsbyImageData(layout: FULL_WIDTH)
          smallerImage: gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 270
            quality: 100
          )
        }
      }
    }
  }
  `)

  const getItemId = (itemId) => {
    setCurrentImageIdx(itemId);
  }

  const resetCurrentImageIdx = () => {
    console.log('reset');
    setCurrentImageIdx(null);
  }

  return (
    <>
      <AnimatePresence>
        {currentImageIdx !== null ? <ImageCarosel currentImageIdx={currentImageIdx} contentfulData={data.allContentfulAsset.edges} resetCurrentImageIdx={resetCurrentImageIdx} /> : ''}

      </AnimatePresence>

      <div className={styles.grid}>
        {data.allContentfulAsset.edges.map((edge, idx) => {
          const imageSrc = getImage(edge.node.smallerImage);
          return (
            <Image key={idx} id={idx} getItemId={getItemId} imageSrc={imageSrc} />
          )
        })}
      </div>
    </>
  )
}

export default PhotoGrid
