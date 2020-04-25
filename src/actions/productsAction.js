import{

    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCES
} from '../types'
import axiosClient from '../config/axios';


// Create new Products
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );

        try {
            // insert on API
            await axiosClient.post('/productos', product)
            dispatch( addProductSuccess(product))
        } catch (error) {
            console.log(error)
            dispatch( addProductError(true))
        }
    }
}

const addProduct = () =>({
    type: ADD_PRODUCT,
    payload: true
})

// if product gets saved in DB
const addProductSuccess = (product) =>({
    type: ADD_PRODUCT_SUCCES,
    payload: product
})

//
const addProductError = (status) => ({
    type: ADD_PRODUCT_ERROR,
    payload: status
})