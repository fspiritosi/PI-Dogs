import React, { useState } from 'react';
import {useDispatch } from 'react-redux';
import {getDogs} from '../redux/actions.js'
function SearchBar() {
  
  const dispatch = useDispatch()
  const [name, setName] = useState('');


  const handleInputChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
    
  }
  const getDogsData = async (name) => {
    const response = await fetch(`http://localhost:3001/dogs?name=${name}`)

    const responseJSON = await response.json();
    dispatch(getDogs(responseJSON))

  }
    const handleSubmit = (event) => {
    event.preventDefault();
    getDogsData()
  }
    // Aquí es donde manejarías la búsqueda, por ejemplo, enviando la consulta de búsqueda a un servidor o filtrando datos locales.
  

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Find:
        <input type="text" value={name} onChange={handleInputChange} />
      </label>
      <button type="submit">Find</button>
    </form>
  );
}

export default SearchBar;