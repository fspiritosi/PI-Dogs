import React, { useState } from 'react'
import styles from '../styles/Filterbar.module.css'
import SearchBar from './Searchbar'

function Filterbar() {

 

  return (
    <div className={styles.filterContainer}>
        {/* <SearchBar></SearchBar> */}
        <div color='#fff'>Filtrar por temperamento</div>
        <div color='#fff'>filtrar DB o API</div>
        <div color='#fff'>Ordenar nombre de raza</div>
        <div color='#fff'>Ordenar Pesos</div>
        <button>prev</button>
        <button>next</button>
    </div>
  )
}

export default Filterbar