import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Cards from '../components/Cards.jsx'
import Filterbar from '../components/Filterbar.jsx'
import styles from '../styles/Home.module.css'

function Home() {




  return (
    <div>
        <div className={styles.headerContainer}>
          <Navbar></Navbar>
          <Filterbar></Filterbar>
        </div>
        <Cards ></Cards>
    </div>
  )
}

export default Home