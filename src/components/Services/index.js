import React, { useRef } from 'react'
import * as styles from './services.module.css'

import SecondaryHeading from '../../elements/SecondaryHeading'
import Section from '../../ui/Section'
import SectionHeading from '../SectingHeading'

import { m, useInView } from 'framer-motion'

import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Services = () => {

  //For scroll in view animation
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  //Retriving images from file System
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, relativeDirectory: { eq: "services" } }
        sort:{fields:[birthTime],order : ASC}
        )   
      {
        nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)


  return (
    <Section id='services'>
      <SectionHeading upperText="Services" bottomText="what i pursue is art" />
      <div className={`${styles.imageContainer}`}>
        {data.allFile.nodes.map((node, idx) => {
          return (
            <m.div
              key={idx}
              ref={ref}
              className={`${styles.animateBox} ${styles.imageWrapper}  relative inline-block
              ${isInView && ((idx + 1) % 2 == 0 ? styles.fullUp : styles.halfUp)}
              `}>

              <div className=' overflow-hidden rounded-t-xl h-full'>
                <GatsbyImage className={styles.image} image={node.childImageSharp.gatsbyImageData} alt="Work image" />
              </div>

              <div className={`${styles.bottomFade}`}></div>

              <SecondaryHeading className={`${styles.imageCaption} tracking-wider text-3xl max-capitalize whitespace-nowrap font-normal`}>{node.name}</SecondaryHeading>
            </m.div>
          )
        }
        )}
      </div>
    </Section>
  )
}

export default Services