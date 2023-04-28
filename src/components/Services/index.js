import React, { useRef } from 'react'
import * as styles from './services.module.css'

import SecondaryHeading from '../../elements/SecondaryHeading'
import Section from '../../ui/Section'
import SectionHeading from '../SectingHeading'

import { m, useInView } from 'framer-motion'

import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const caption = ['Haldi Makeup', 'Nails embellish', 'Hastfast makeup', 'Bridal makeup']

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
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `)

  console.log(data);
  return (
    <Section>
      <SectionHeading upperText="Services" bottomText="what i pursue is art" />
      <div className={`${styles.imageContainer}`}>
        {data.allFile.nodes.map((node, idx) => {
          return (
            <m.div
            key={idx}
              ref={ref}
              className={`${styles.animateBox} relative inline-block
              ${isInView && ((idx + 1) % 2 == 0 ? styles.fullUp : styles.halfUp)}
              `}>
              <GatsbyImage className={styles.image} image={node.childImageSharp.gatsbyImageData} alt="Work image" />
              <SecondaryHeading className={`${styles.imageCaption} tracking-wide text-4xl max-capitalize whitespace-nowrap`}>{caption[idx]}</SecondaryHeading>
              <div className={styles.bottomFade}></div>
            </m.div>
          )
        }
        )}
      </div>
    </Section>
  )
}

export default Services