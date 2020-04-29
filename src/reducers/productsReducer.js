import{
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCES,
    START_PRODUCTS_DOWNLOAD,
    PRODUCTS_DOWNLOAD_SUCCESS,
    PRODUCTS_DOWNLOAD_ERROR,
    GET_DELETE_PRODUCT,
    PRODUCT_DELETED_SUCCESS,
    PRODUCT_DELETED_ERROR,
    GET_EDIT_PRODUCT,
    PRODUCT_EDIT_SUCCESS,
    PRODUCT_EDIT_ERROR

} from '../types'

// each reducer has his owned state
const initialState = {
    products: [],
    error: null,
    loading: false,
    deleteProduct: null,
    editProduct: null
}

export default function( state = initialState, action){
    switch (action.type) {

        case START_PRODUCTS_DOWNLOAD:
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

        case PRODUCTS_DOWNLOAD_ERROR:
        case ADD_PRODUCT_ERROR:
        case PRODUCT_DELETED_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case PRODUCTS_DOWNLOAD_SUCCESS:
            return{
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }

        case GET_DELETE_PRODUCT:
            return{
                ...state,
                deleteProduct: action.payload
            }  
        case PRODUCT_DELETED_SUCCESS:
            return{
                ...state,
                products: state.products.filter( product => product.id !== state.deleteProduct),
                deleteProduct: null
            } 
        case GET_EDIT_PRODUCT:
            return{
                ...state,
                editProduct: action.payload
            } 
        default:
            return state;
    }
}