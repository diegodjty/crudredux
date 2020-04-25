import{
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCES
} from '../types'

// Create new Products
export function createNewProductAction(product) {
    return (dispatch) => {
        dispatch( addProduct() );

        try {
            dispatch( addProductSuccess(product))
        } catch (error) {
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