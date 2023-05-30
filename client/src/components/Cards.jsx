import React, { useEffect } from "react";
import { useState } from "react";
import Card from './Card.jsx'
import Button from "./Button.jsx";
import styles from '../styles/Cards.module.css'



import {useSelector} from 'react-redux'


const ITEMS_PAGE = 8

function Cards() {
  
  
    const dogss = useSelector((state) => state.dogs)
    
    const allDogs = dogss
    console.log(allDogs)
        
    const [items, setItems] = useState([...allDogs].splice(0, ITEMS_PAGE))
    const [currentPage, setCurrentPage] = useState(1);
   
    console.log(items)
    const nextHandler = () => {

        const totalDogs = allDogs.length;
 
        const nextPage = currentPage + 1;

        const firstIndex = nextPage * ITEMS_PAGE; 

        if(firstIndex > totalDogs) return;

        setItems([...allDogs].splice(firstIndex, ITEMS_PAGE))
        setCurrentPage(nextPage)
    }

    const prevHandler = () => {

        const prevPage = currentPage - 1

        if(prevPage < 0) return

        const firstIndex = prevPage * ITEMS_PAGE;

        setItems([...allDogs].splice(firstIndex, ITEMS_PAGE))
        setCurrentPage(prevPage)

    }

    useEffect(()=> {
        setItems([...allDogs].splice(0, ITEMS_PAGE))
    }, [allDogs])

    return (
        <div>
 
            <div className={styles.cards_container}>
                {items.length < 1 ? 'Loading...':
                items.map((dog) => {
                    return <Card 
                    key={dog.id}
                    id={dog.id}
                    name={dog.name}
                    image={dog.image.url}
                    weight={dog.weight}
                    temperament={dog.temperament}
                    />
                })
                }
            </div>
            <div>
                <Button onClick={prevHandler} textButton = 'Prev'/>
                <Button onClick={nextHandler} textButton ='Next'/>
            </div>
        </div>
  )
}

export default Cards