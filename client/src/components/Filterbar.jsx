
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Filterbar.module.css'
import Searchbar from './Searchbar'
import {filterDogsByOrigin} from '../redux/actions.js'

function Filterbar() {

  const dispatch = useDispatch()
  const dogs = useSelector((state) => state.allDogs)

  const handlefilterByOrigin = (e) => {
    console.log(e.target.value)
    const dataOptions = ['all', 'db', 'api']

    const dataFilter = e.target.value
    if(dataFilter === dataOptions[1]) {
       const dogsDB = dogs.filter(dog => typeof(dog.id) !== 'number' )
      dispatch(filterDogsByOrigin(dogsDB))
    }else if(dataFilter === dataOptions[2]){
      const dogsApi = dogs.filter(dog => typeof(dog.id) === 'number' )
      dispatch(filterDogsByOrigin(dogsApi))
    }else{
     
      dispatch(filterDogsByOrigin(dogs))
    }
  }
 

  return (
    <div className={styles.filterContainer}>
        <Searchbar/>
        <div color='#fff'>Filtrar por temperamento</div>
        <div>
          <section>
            <h4>DB or API</h4>
            <select onChange={(e) => handlefilterByOrigin(e)}>
              <optgroup rating='origin'>
                <option value='all'>All</option>
                <option value="db">Data Base</option>
                <option value="api">API</option>
              </optgroup>
            </select>
          </section>
        </div>
        <div color='#fff'>Ordenar nombre de raza</div>
        <div color='#fff'>Ordenar Pesos</div>
    </div>
  )
}

export default Filterbar