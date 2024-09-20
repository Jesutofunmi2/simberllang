'use client'

import React, { useState } from 'react'
import styles from './navbar.module.css'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MobileNavbarViewDash } from '../mobileViewMenu'
import { useSelector } from 'react-redux'
import { RootState } from "../../../services/redux/store";

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const userData = useSelector((state: RootState) => state.user.currentUser);
  return (
    <>
      <section className="h-[100px] flex bg-blue-400 px-4 justify-between items-center w-full md:w-">

        <div className={styles.logoWrap}>
          <span className={styles.hamburger}>
            <GiHamburgerMenu onClick={() => setOpen(true)} />
          </span>
        </div>

        <p className="text-3xl">
           Welcome <span>{userData?.name}</span> 
        </p>

        <MobileNavbarViewDash open={open} setOpen={setOpen} />
      </section>
    </>
  )
}

export default Navbar