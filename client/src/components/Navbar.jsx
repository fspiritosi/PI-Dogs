import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'


function Navbar() {
  return (
    <div className={styles.header}>
        <NavLink className={styles.logo}to='/home'>
          <div></div>
        </NavLink>
        <div className={styles.menuToggle}></div>
        <ul className={styles.nav}>
            <li><NavLink to='/form'>Create Dog</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar