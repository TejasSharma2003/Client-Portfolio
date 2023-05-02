import React, { useEffect, useState } from 'react'
import * as  styles from './navbar.module.css';

import Button from '../../elements/Button'
import NavLinks from './NavLinks';

import { AnimatePresence } from 'framer-motion';

import Logo from '../Logo';
import ScrollDown from '../../util/ScrollDown';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const onClickMenuHandler = () => {
        setMenuActive(pre => !pre);
    }

    useEffect(() => {

        if (menuActive) {
            disableBodyScroll(document.body);
        }
        else {
            enableBodyScroll(document.body);
        }

    }, [menuActive])

    const onClickHandlerScroll = () => {
        //close menu before reaching target
        setMenuActive(false);
        ScrollDown('footer')
    }

    const resetMenuActive = () => {
        setMenuActive(false);
    }
    return (
        <>
            <AnimatePresence>
                {menuActive && <NavLinks menuActive={menuActive} resetMenuActive={resetMenuActive} />}
            </AnimatePresence>
            <nav className={`${styles.navbar} relative z-40 flex  items-center  pt-5  `}>
                <div className='w-full sm:w-5/12 '>
                    <div className={`${styles.menu} flex self-center`}>
                        <div onClick={onClickMenuHandler} className={`${styles.menuBox} flex justify-center self-center cursor-pointer items-center`}>
                            <div className={`mr-4 relative`}>
                                <span className={`${styles.menuText} inline-block ${menuActive && 'opacity-0 -translate-y-10'}`}>Menu</span>
                                <span className={`${styles.menuText} ${styles.closeText} ${menuActive && styles.closeTextShow} inline-block `}>Close</span>
                            </div>

                            <div className={`${styles.menu} self-center w-12`}>
                                <span className={`${styles.line} ${styles.upperLine} ${menuActive && styles.upperLineActive} block h-1 mb-2 `}></span>
                                <span className={`${styles.line} ${styles.lowerLine} ${menuActive && styles.lowerLineActive} block h-1 `}></span>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/" className={`w-5/12 text-center ${styles.logoBox}`}>
                    <div className={`${styles.logoBox} m-auto`}>
                        <Logo />
                    </div>
                </a>

                <div onClick={onClickHandlerScroll} className='w-full sm:w-5/12 text-right'>
                    <Button className={`self-center px-10 py-3 capitalize whitespace-nowrap`}>get in touch</Button>
                </div>
            </nav>
        </>

    )
}

export default Navbar