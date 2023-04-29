import * as React from 'react';
import * as styles from './carosel.module.css'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';

import testimonial from './testimonials';

import Para from '../../elements/Para'


const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
        };
    },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
};

export const Carousel = () => {

    const [[page, direction], setPage] = useState([0, 0]);

    const pageIndex = wrap(0, testimonial.length, page);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div className={`${styles.testimonialContainer} flex justify-center items-center`}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    className="text-center absolute"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                >
                    <Para className={`${styles.sayAuthor}`}>{testimonial[pageIndex].say}</Para>
                    <h4 className="mt-20 font-play-fair text-4xl tracking-widest">{testimonial[pageIndex].author}</h4>
                </motion.div>
            </AnimatePresence>
            <div className={styles.next} onClick={() => paginate(1)}>
                {'‣'}
            </div>
            <div className={styles.prev} onClick={() => paginate(-1)}>
                {'‣'}
            </div>
        </div>

    );
};
