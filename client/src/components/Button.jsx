import React from 'react'
import styles from '../styles/Button.module.css'

function Button(props) {

  return (
    <>
        <button className={styles.btnInfo} onClick={props.onClick} type={props.type}>
            {props.textButton}
        </button>
    </>
  )
}

export default Button