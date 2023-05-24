import React from 'react'
import styles from '../styles/Card.module.css'

function Card(props) {
  return (
    <div className={styles.card_container}>
        <div className={styles.card_cont}>
            <img src={props.image} alt="not found" width='400px' height='auto'/>
        </div>
        <h3 className={styles.card_title}>Name: {props.name}</h3>
        <h5 className={styles.card_weigth}>Weigth: {props.weight}</h5>
        <h6 className={styles.card_temperament}>Temperament: {props.temperament}</h6>

    </div>
  )
}

export default Card