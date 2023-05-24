import {GET_DOGS, GET_TEMPERAMENTS, GET_DOGS_BY_NAME, FILTER_BY_ORIGIN} from './types.js'

export const getAllDogs = () => async (dispatch) => {
    const resp = await fetch('http://localhost:3001/dogs')
    const data = await resp.json()
    console.log(data)
    dispatch({
        type: GET_DOGS,
        payload: data
    })
}

export const getTemperaments = () => async (dispatch) => {
    const resp = await fetch('http://localhost:3001/temperaments')
    const data = await resp.json()
    dispatch({
        type: GET_TEMPERAMENTS,
        payload: data
        })
}

export const getDogsByName = (name) => async (dispatch) => {
    const resp = await fetch(`http://localhost:3001/dogs?name=${name}`);
    const data = await resp.json()
    console.log(data)
    dispatch({
      type: GET_DOGS_BY_NAME,
      payload: data
    });
}

export const filterDogsByOrigin = (data) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload: data
    }
}