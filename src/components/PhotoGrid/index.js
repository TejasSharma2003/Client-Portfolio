import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PhotoGrid = ({ data }) => {
  console.log(data);
  const image = getImage(data.allContentfulImage.nodes[0].image)

  return (
    <div>
      <GatsbyImage image={image} alt="My Image" />
    </div>
  )
}

export default PhotoGrid

export const query = graphql`
  query MyQuery {
    allContentfulAsset {
      nodes {
        hv6qne5gho28
        title
        description
      }
    }
  }
`

// import React from 'react'
// import * as styles from './photoGrid.module.css'
// import 'photoswipe/dist/photoswipe.css'

// import { Gallery, Item } from 'react-photoswipe-gallery'
// import { StaticImage } from 'gatsby-plugin-image'

// const PhotoGrid = ({ images }) => {
//   console.log(images);

//   return (
//     <Gallery>
//       <div className={styles.grid}>
//         {images.map((image, idx) => {
//           return <Item
//             original='../images/works/1.jpg'
//             thumbnail='../images/works/1.jpg'
//             width={image.width}
//             height={image.height}
//           >
//             {({ ref, open }) => (
//               <img
//                 className={styles.item}
//                 src='../images/works/1.jpg'
//                 ref={ref}
//                 onClick={open}
//               />
//             )}
//           </Item>

//         })}
//         <img src='../images/works/2.jpg'/>

//       </div>
//     </Gallery>
//   )
// }

// export default PhotoGrid