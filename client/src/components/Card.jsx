import React from 'react'
import styles from '../styles/Card.module.css'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getDogById } from '../redux/actions'

function Card(props) {

  const dispatch = useDispatch()
  const tempDog = props.temperament
  const id = props.id
  


  const handleClik = () => {
    dispatch(getDogById(id))
  }
  
  return (
    <NavLink to='/detail' onClick={handleClik}>
      <div className={styles.card_container} >
        <div className={styles.card_cont}>
            <img src={props.image} alt="not found" width='400px' height='auto'/>
        </div>
        <h3 className={styles.card_title}>Name: {props.name}</h3>
        <h5 className={styles.card_weigth}>Weigth: {props.weight[0]} - {props.weight[1]}</h5>
        <h6 className={styles.card_temperament}>Temperament: 
          {tempDog?.map(e => (<li key={e}>{e}</li>))}
        </h6>
    </div>
    </NavLink>

  )
}

export default Card