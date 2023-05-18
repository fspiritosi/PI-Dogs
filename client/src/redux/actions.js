import {GET_DOG, GET_DOGS, GET_DOG_DETAIL, GET_TEMPERAMENTS} from './types.js'

// GETS ACTIONS

export function getDogs(data){
    return{
        type:GET_DOGS,
        payload: data
    }
}

export function getGod(data){
  return {
    type: GET_DOG,
    payload: data
  }
}

export function getTemperaments(data) {
  return {
    type: GET_TEMPERAMENTS,
    payload: data,
  };
}