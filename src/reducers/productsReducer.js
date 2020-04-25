import{
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCES

} from '../types'

// each reducer has his owned state
const initialState = {
    products: [],
    error: null,
    loading: false
}

export default function( state = initialState, action){
    switch (action.type) {
        case ADD_PRODUCT:
            return{
                ...state,
                loading: action.payload
            }
        case ADD_PRODUCT_SUCCES:
            return{
                ...state,
                loading: false,
                products: [...state.products,action.payload]
            }
        case ADD_PRODUCT_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}