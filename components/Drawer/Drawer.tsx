'use client'

import React, { Dispatch, ReactNode, SetStateAction } from 'react'
import styles from './drawer.module.css'

interface Props {
  position?: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactNode
}
const Drawer = ({ position, open, setOpen, children }: Props) => {
  const styl = {
    drawerOpen: {
      transform: 'translateX(0%)',
      width: '250px',
      height: '100%',
      padding: '10px 15px',
      boxSizing: 'border-box',
      backgroundColor: 'aliceblue',
      transition: 'all 300ms',
    },
    drawerClose: {
      transform: position == 'left' ? 'translateX(-100%)' : 'translateX(100%)',
      width: '250px',
      height: '100%',
      padding: '10px 15px',
      backgroundColor: 'aliceblue',
      transition: 'all 300ms',
    },
  }

  return (
    <>
      <div
        className={open ? styles.overlayy : styles.ovv}
        onBlur={() => setOpen(false)}
        // tabIndex="0"
        style={{ justifyContent: position == 'left' ? 'start' : 'flex-end' }}
      >
        <div
          style={open === true ? styl.drawerOpen : styl.drawerClose}
          // tabIndex="-1"
          onClick={(e) => e.preventDefault()}
        >
          {children}
        </div>
      </div>
    </>
  )
}

export default Drawer