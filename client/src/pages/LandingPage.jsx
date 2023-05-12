import React from 'react'
import  styles from '../styles/LandingPage.module.css'


function LandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h3>Wellcome to de Dog word!!</h3>
        <button>Ingresar</button>
      </div>
    </div>
  )
}

export default LandingPage