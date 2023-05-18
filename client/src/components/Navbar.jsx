import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../styles/Navbar.module.css'


function Navbar() {
  return (
    <div className={styles.header}>
        <NavLink className={styles.logo}to='/home'>Home</NavLink>
        <div className={styles.menuToggle}></div>
        <ul className={styles.nav}>
            <li className={styles.active}>
                <NavLink to='/detail'>Details</NavLink>
            </li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/service'>Service</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar