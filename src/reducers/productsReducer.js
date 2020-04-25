import{
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCES

} from '../types'

// each reducer has his one state
const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function( state = initialState, action){
    switch (action.type) {
        
        default:
            return state;
    }
}