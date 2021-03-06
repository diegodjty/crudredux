import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../types'

// Each reducer has a state
const initialState = {
    alert: null
}

export default function( state = initialState, action){
    switch(action.type){
        case SHOW_ALERT:
            return{
                ...state,
                alert: action.payload
            }  
        default:
            return state;
    }
}