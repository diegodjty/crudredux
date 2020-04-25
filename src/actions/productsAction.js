import{
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCES
} from '../types'

// Create new Products
export function createNewProductAction(product) {
    return () => {
        console.log(product)
    }
}