import React from 'react'
import Button from '../components/Button'
import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'


function Detail() {

  const {name, image, weight, temperament, life_span, height} = useSelector((state) => state.dog)

  return (
    <div>
        
        <div>
            <img src={image} alt="" />
            <h2>{name}</h2>
            <h4>{weight}</h4>
            <h4>{height}</h4>
            <h5>{temperament}</h5>
            <h5>{life_span}</h5>
        </div>


        <NavLink to='/home'>
            <Button textButton = "Home" />
        </NavLink>
        
         
    </div>
  )
}

export default Detail