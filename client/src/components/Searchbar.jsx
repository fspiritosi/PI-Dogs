import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { getDogsByName } from '../redux/actions.js'




function Searchbar() {

  const dispatch = useDispatch()

  const [name, setName] = useState('')

  const handleInputChange = (e) => {
    e.preventDefault()
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(getDogsByName(name))
    setName('')

  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='Search...' value={name} onChange={(e) => handleInputChange(e)}/>
        <button>Find</button>
      </form>
    </div>
  )
}

export default Searchbar