import { GET_DOGS, GET_TEMPERAMENTS, GET_DOGS_BY_NAME, FILTER_BY_ORIGIN, FILTER_BY_TEMPERAMENT } from './types.js'
const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: []
}

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_DOGS:
            return {
                ...state,
                dogs: [...payload],
                allDogs: [...payload]
            }
        case GET_TEMPERAMENTS:
            return {
              ...state,
              temperaments: payload,
            };
        case GET_DOGS_BY_NAME:
            return {
                ...state,
                dogs: [...payload]
            }
        case FILTER_BY_ORIGIN:
            return {
                ...state,
                dogs: [...payload]
            }
        case FILTER_BY_TEMPERAMENT: 
            return{
                ...state,
                dogs: [...payload]
            }
        default:
            return state
    }
}

export default rootReducer