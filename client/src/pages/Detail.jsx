import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {resetDog} from '../redux/actions.js'
import Loader from '../components/Loader'


function Detail() {

  const dispatch = useDispatch()
  const {name, image, weight, temperament, life_span, height} = useSelector((state) => state.dog)
  
  const funcResetDog = () => {
    dispatch(resetDog())
  }

  return (
    <div>
        <Navbar/>
        <div>
          {
            !name 
            ?
            <Loader/> 
            : 
            <div>
              <img src={image} alt="" />
              <h2>{name}</h2>
              <h4>{weight}</h4>
              <h4>{height}</h4>
              <h5>{temperament}</h5>
              <h5>{life_span}</h5>
            </div>
          }
        </div>
        


        <NavLink to='/home'>
            <Button textButton = "Home" onClick={()=> funcResetDog()}/>
        </NavLink>
        
         
    </div>
  )
}

export default Detail