import React from "react";
import { useSelector } from 'react-redux'
import { useState } from "react";
import Card from './Card.jsx'
import styles from '../styles/Cards.module.css'


const ITEMS_PAGE = 8

function Cards() {
  
    const dogs = useSelector((state) => state.allDogs)
    //const allTemperaments = useSelector((state) => state.allTemperaments)

    const allDogs = dogs[0]
    //const temperaments = allTemperaments[0]

    const [items, setItems] = useState([...allDogs].splice(0, ITEMS_PAGE))
    const [currentPage, setCurrentPage] = useState(0);

    const nextHandler = () => {

        const totalDogs = allDogs.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * ITEMS_PAGE; 

        if(firstIndex === totalDogs) return;

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


    return (
        <div>
            <div>
                <button onClick={prevHandler}>Prev</button>
                <button onClick={nextHandler}>Next</button>
            </div>
            <div className={styles.cards_container}>
                {!items ? 'Loading...':
                items.map((dog) => {
                    return <Card 
                    key={dog.id}
                    name={dog.name}
                    image={dog.image.url}
                    weight={dog.weight}
                    temperament={dog.temperament}
                    />
                })
                }
            </div>
        </div>
  )
}

export default Cards