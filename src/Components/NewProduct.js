import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Redux actions
import {createNewProductAction} from '../actions/productsAction'

const NewProduct = () => {


    // use dispatch creates a function
    const dispatch = useDispatch();

    const addProduct = () =>  dispatch( createNewProductAction )

    // When user press submit
    const newProductSubmit = e =>{
        e.preventDefault()

        // Validate form

        // Check for error

        // create new product
        addProduct()
    }

    return (
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold">
                            Add New Product
                        </h2>
                        <form
                            onSubmit={newProductSubmit}
                        >
                            <div className="form-group">
                                <label htmlFor="">Name of product</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Name of product"
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                            <label htmlFor="">Price of product</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Price of product"
                                    name="precio"
                                />
                            </div> 

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                            Add
                            </button>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct
