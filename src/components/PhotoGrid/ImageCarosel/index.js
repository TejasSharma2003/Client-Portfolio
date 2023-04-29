import * as React from "react";
import * as styles from './imageCarosel.module.css'


import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

import Spinner from "../../Spinner";

import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose'



import { IoArrowBack } from '@react-icons/all-files/io5/IoArrowBack'


const variants = {
    enter: (direction) => {
        return {
            // x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            // x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    },
};


const animateVariants = {
    show: {
        opacity: 1
    },
    hidden: {
        opacity: 0
    }
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

const ImageCarosel = ({ contentfulData, currentImageIdx, resetCurrentImageIdx }) => {

    const [[page, direction], setPage] = useState([currentImageIdx, 0]);
    const [imageLoaded, setImageLoaded] = useState(false);

    const imageIndex = wrap(0, contentfulData.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <>
            <motion.button
                key="close-button"
                onClick={resetCurrentImageIdx}
                className={styles.closeButton}
                variants={animateVariants}
                animate='show'
                initial='hidden'
                exit='hidden'
            >
                <AiOutlineClose className={styles.closeButtonIcon} />
            </motion.button>


            <motion.div
                key="carosel"
                className={`${styles.exampleContainer}`}
                variants={animateVariants}
                initial='hidden'
                animate='show'
                exit='hidden'
            >
                <AnimatePresence
                    initial={false}
                    custom={direction}>

                    {!imageLoaded && <Spinner />}
                    <motion.img
                        key={page}
                        src={contentfulData[imageIndex].node.url}
                        onLoad={() => { setImageLoaded(true) }}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        style={{ display: `${imageLoaded ? 'block' : 'none'}` }}
                        className={styles.img}
                        exit="exit"
                        transition={{
                            opacity: { duration: .3 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);
                            setImageLoaded(false)
                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    />
                </AnimatePresence>

                <div className={styles.next} onClick={() => { paginate(1); setImageLoaded(false) }}>
                    <IoArrowBack className="text-2xl" />
                </div>

                <div className={styles.prev} onClick={() => { paginate(-1); setImageLoaded(false) }}>
                    <IoArrowBack className="text-2xl" />

                </div>
            </motion.div>
        </>
    );
};

export default ImageCarosel