import { GET_DOGS, GET_TEMPERAMENTS } from "./types"

const initialState = {
    dogs: [],
    allDogs: [],
    temeperaments: []
}

function rootReducer(state = initialState, {type, payload}){
    switch(type){
        case GET_DOGS:
            return {
                ...state,
                dogs: [...state.dogs, payload],
                allDogs: [...state.allDogs, payload]
            };
        
        case GET_TEMPERAMENTS:
            return {
                ...state,
                temeperaments: [...state.temeperaments, payload]

            };
        default:
            return state
    }
}

export default rootReducer