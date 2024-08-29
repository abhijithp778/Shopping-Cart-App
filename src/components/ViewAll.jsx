import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const shoppingApi = () => {
        axios.get("https://fakestoreapi.com/products?").then(
            (response) => {
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(() => { shoppingApi() }, [])
    return (
        <div>
            <Navbar/>
            <br />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                data.map(
                                    (value, index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                            <div class="card">
                                                <img src={value.image} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.title}</h5>
                                                    <p class="card-text">{value.description}</p>
                                                    <p class="card-text">{value.price}</p>
                                                    <a href="#" class="btn btn-warning">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll


