import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import Swal from 'sweetalert2';


// REDUX
import { useDispatch } from 'react-redux';
import { deleteProductAction, getProductEditAction } from '../actions/productsAction'

const Product = ({product}) => {

    const {name,price,id} = product

    const dispatch = useDispatch()
    const history = useHistory()
    // Confirm if user wants to delete it
    const confirmDeleteProduct = id =>{
        // Ask user
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
                // Pass to action
                dispatch(deleteProductAction(id))
            }
          })
    }

    // Function that redirects
    const EditRedirect = product =>{
        dispatch(getProductEditAction(product))
        history.push(`/products/edit/${product.id}`)
    }
    return (
        <tr>
            <td>{name}</td>
            <td><span className="font-weight-bold">${price}</span></td>
            <td className="acciones">
                <button 
                    type='button'
                    className="btn btn-primary mr-2"
                    onClick={ ()=> EditRedirect(product) }    
                >
                    
                    Edit
                </button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=> confirmDeleteProduct(id)}
                >
                Delete
                </button>
            </td>
        </tr>
    )
}

export default Product