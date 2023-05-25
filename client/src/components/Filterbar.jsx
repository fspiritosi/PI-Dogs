
import { useDispatch, useSelector } from 'react-redux'
import styles from '../styles/Filterbar.module.css'
import Searchbar from './Searchbar'
import {filterDogsByOrigin, filterDogsByTemperament} from '../redux/actions.js'

function Filterbar() {

  const dispatch = useDispatch()
  const allDogs = useSelector((state) => state.allDogs)
  const dogs = useSelector((state) => state.dogs)
  const temperaments = useSelector((state) => state.temperaments)
  // console.log(temperaments)

  const handlefilterByOrigin = (e) => {
    // console.log(e.target.value)
    const dataOptions = ['all', 'db', 'api']

    const dataFilter = e.target.value
    if(dataFilter === dataOptions[1]) {
       const dogsDB = dogs.filter(dog => typeof(dog.id) !== 'number')
      dispatch(filterDogsByOrigin(dogsDB))
    }else if(dataFilter === dataOptions[2]){
      const dogsApi = dogs.filter(dog => typeof(dog.id) === 'number' )
      dispatch(filterDogsByOrigin(dogsApi))
    }else{
      dispatch(filterDogsByOrigin(allDogs))
    }
  }

  const handleFilterByTemperament = (e) => {
    const tempFilter = e.target.value;
    const filteredDogs = allDogs.filter((dog) => dog.temperament?.includes(tempFilter) ? dog : '')
    dispatch(filterDogsByTemperament(filteredDogs))
  }
  
 

  return (
    <div className={styles.filterContainer}>
        <Searchbar/>
        <div>
          <section>
            <h4>Temeperaments</h4>
            <select onChange={(e) => handleFilterByTemperament(e)}>
              <optgroup label='Temperaments'>
              {temperaments?.map((temp) => (<option value={temp.name} key={temp.id}>{temp.name}</option>))}
              </optgroup>
            </select>
            
          </section>
        </div>
        <div>
          <section>
            <h4>DB or API</h4>
            <select onChange={(e) => handlefilterByOrigin(e)}>
              <optgroup rating='origin' label='Origin'>
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