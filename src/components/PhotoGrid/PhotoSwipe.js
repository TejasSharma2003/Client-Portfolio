import React, { useEffect } from 'react';
import * as styles from './photoSwipe.module.css'


import { BsEye } from '@react-icons/all-files/bs/BsEye'

import { motion } from 'framer-motion'

import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const PhotoSwipe = ({ images, id }) => {


    useEffect(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: '#' + id,
            children: 'a',
            pswpModule: () => import('photoswipe'),
        });
        lightbox.init();

        return () => {
            lightbox.destroy();
            lightbox = null;
        };
    }, []);

    return (
        <>
            <div className={`pswp-gallery ${styles.grid}`} id={id}>
                {images.map((image, index) => {
                    const imgSrc = getImage(image.node.smallerImage);
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1.5, }}
                            viewport={{ once: true }}
                            className={`${styles.image} gap-6`}>
                            <a
                                href={image.node?.url}
                                data-pswp-width={image.node?.file.details.image.width}
                                data-pswp-height={image.node?.file.details.image.height}
                                key={id + '-' + index}
                                target="_blank"
                                rel="noreferrer">

                                <GatsbyImage
                                    image={imgSrc}
                                    alt="Service"
                                    className='w-full'
                                />

                            </a>
                            <BsEye className={styles.eye} />
                        </motion.div>
                    )
                })}
            </div>
        </>
    );
}

export default PhotoSwipe