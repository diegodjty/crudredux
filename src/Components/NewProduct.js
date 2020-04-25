import React,{useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'

// Redux actions
import {createNewProductAction} from '../actions/productsAction'

const NewProduct = () => {


    //state
    const [name,setName] = useState('')
    const [price, setPrice] = useState(0)

    // use dispatch creates a function
    const dispatch = useDispatch();

    // access store state
    const loading = useSelector( state => state.products.loading)
    const error = useSelector( state => state.products.error)

    const addProduct = (product) =>  dispatch( createNewProductAction(product) )

    // When user press submit
    const newProductSubmit = e =>{
        e.preventDefault()

        // Validate form
        if(name.trim() === '' || price <= 0){
            return;
        }
        // Check for error

        // create new product
        addProduct({
            name,
            price
        });
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
                                    value={name}
                                    onChange={ e => setName (e.target.value)}
                                />
                            </div>

                            <div className="form-group">
                            <label htmlFor="">Price of product</label>
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Price of product"
                                    name="precio"
                                    value={price}
                                    onChange={ e => setPrice ( Number(e.target.value))}
                                />
                            </div> 

                            <button
                                type="submit"
                                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
                            >
                            Add
                            </button>
                            
                        </form>
                        {loading ? <p>Loading</p> :null}
                        {error ? <p className="alert alert-danger p2 mt-4 text-center">And error occured</p> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProduct
