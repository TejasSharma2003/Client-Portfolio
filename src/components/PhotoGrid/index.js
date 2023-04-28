import React from 'react'
import * as styles from './photoGrid.module.css'



import { graphql, useStaticQuery } from 'gatsby'

import PhotoSwipe from './PhotoSwipe'

const cardContainerVariants = {
  onscreen: {
    transition: {
      staggerChildren: .5
    }
  }
}

const cardVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: [0.87, 0, 0.13, 1],
      duration: 1
    }
  }
};


const PhotoGrid = () => {
  const data = useStaticQuery(graphql`
  query{
    allContentfulAsset {
      edges {
        node {
          id
          url
          smallerImage: gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 270
            quality: 90
          )
          file {
            details {
              image {
                width
                height
              }
            }
          }
        }
      }
    }
    allFile(
      filter: { sourceInstanceName: { eq: "images" },relativeDirectory :{ eq :"works"}}
      sort: {fields: [birthTime], order: ASC}
    )
     {
         nodes {
           childImageSharp {
             gatsbyImageData
           }
         }
     }
    }
  `)

  return (
    <PhotoSwipe id="photo-grid" images={data.allContentfulAsset.edges} />
  )
}

export default PhotoGrid

