import{
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCES,
    START_PRODUCTS_DOWNLOAD,
    PRODUCTS_DOWNLOAD_SUCCESS,
    PRODUCTS_DOWNLOAD_ERROR,
    GET_DELETE_PRODUCT,
    PRODUCT_DELETED_SUCCESS,
    PRODUCT_DELETED_ERROR
} from '../types'
import axiosClient from '../config/axios';
import Swal from 'sweetalert2'

// Create new Products
export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch( addProduct() );
        try {
            // insert on API
            await axiosClient.post('/productos', product)
            dispatch( addProductSuccess(product))

            // Alert
            Swal.fire(
                'Correct',
                'product added correctly',
                'success'
            )

        } catch (error) {
            console.log(error)
            dispatch( addProductError(true))

            // alert
            Swal.fire({
                icon: 'error',
                title: "An error occured",
                text: "An error occured, try again"
            })
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

// function that download products from db

export function getProductsAction () {
    return async (dispatch) =>{
        dispatch( downloadProducts())
        try {
                const response = await axiosClient.get('/productos')
                dispatch( downloadProductsSucces (response.data) )           
        } catch (error) {
            console.log(error)
            dispatch( downloadProductsError() )
        }
    }
}

const downloadProducts = () => ({
    type: START_PRODUCTS_DOWNLOAD,
    payload: true
})

const downloadProductsSucces = (products) => ({
    type: PRODUCTS_DOWNLOAD_SUCCESS,
    payload: products
})

const downloadProductsError = () =>({
    type: PRODUCTS_DOWNLOAD_ERROR,
    payload: true
})

// Select and delete product
export function deleteProductAction(id) {
    return async (dispatch) =>{
        dispatch(getDeleteProduct(id));
        
        try {
            await axiosClient.delete(`/productos/${id}`)
            dispatch( deleteProductSuccess() )

            // 
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
        } catch (error) {
            console.log(error)
            dispatch( deleteProductError() )
        }
    }
}

const getDeleteProduct = (id) => ({
    type: GET_DELETE_PRODUCT,
    payload: id
})

const deleteProductSuccess = () =>({
    type: PRODUCT_DELETED_SUCCESS
})
const deleteProductError = () => ({
    type: PRODUCT_DELETED_ERROR,
    payload: true
})