import {GET_DOG, GET_DOGS, GET_DOG_DETAIL, GET_TEMPERAMENTS} from './types.js'

import axios from 'axios' 

// GETS ACTIONS

export function getDogs(data){
    return{
        type:GET_DOGS,
        payload: data
    }
}

export function getTemperaments(data) {
  return {
    type: GET_TEMPERAMENTS,
    payload: data,
  };
}