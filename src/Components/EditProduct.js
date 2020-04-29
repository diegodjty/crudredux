import React,{useState,useEffect} from 'react'


import { useDispatch, useSelector } from 'react-redux';
import {editProductAction} from '../actions/productsAction'

const EditProduct = () => {

    //Product State
    const [product, setProduct] = useState({
        name: '',
        price: ''
    })

    // product to edit
    const edit = useSelector( state => state.products.editProduct)
    
    useEffect(() => {
        setProduct(edit)
    }, [edit])

    
    //read data from form
    const onChangeForm = e =>{
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const {name,price,id} = product
    const submitEditProduct = e =>{
        e.preventDefault()

        editProductAction()
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Edit Product
                        </h2>
                        <form
                            onSubmit={submitEditProduct}
                        >
                            <div className="form-group">
                                <label htmlFor="">Name of product</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Name of product"
                                    name="name"
                                    value={name}
                                    onChange={onChangeForm}
                                />
                            </div>

                            <div className="form-group">
                            <label htmlFor="">Price of product</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Price of product"
                                    name="price"
                                    value={price}
                                    onChange={onChangeForm}
                                />
                            </div> 

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                            Save Changes
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default EditProduct
