import React, { useState } from 'react'
import * as  styles from './navbar.module.css';

import Button from '../../elements/Button'

import logoImage from '../../images/Logo.svg'

import NavLinks from './NavLinks';

import { AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);

    const onClickMenuHandler = () => {
        setMenuActive(pre => !pre);
    }

    return (
        <>
            <AnimatePresence>
                {menuActive && <NavLinks menuActive={menuActive} />}
            </AnimatePresence>
            <nav className={`${styles.navbar} sticky  z-30 top-0 left-0 flex  items-center  pt-5  `}>
                <div className='w-5/12 '>
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

                <div className='w-5/12'>
                    <div className={`${styles.logoBox} w-36 h-36 m-auto`}>
                        <img className={`styles.logo max-w-full`} src={logoImage} />
                    </div>
                </div>

                <div className='w-5/12 text-right'>
                    <Button className={`self-center px-10 py-3`}> Email me</Button>
                </div>
            </nav>
        </>

    )
}

export default Navbar