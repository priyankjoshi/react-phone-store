import React, { Component } from 'react'
import ProductConsumer from '../context'
import {Link} from 'react-router-dom'
export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
            {value=>{
                    const {id, company, img, info, price, title, inCart} = value.detailProduct;
                    return(
                        <div className="container py-5">
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue text-capitalize my-5">
                                    <h1>{title}</h1>
                                </div>
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <img src={img} className="img-fluid" alt="product"/>
                                    </div>
                                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                        <h1>model : {title}</h1>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            made by : <span className="text-uppercase">
                                                {company}
                                            </span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>price :<span> ${price}</span></strong>
                                        </h4>
                                        <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                            details: <span>{info}</span>
                                        </p>
                                        <div>
                                            <Link to="/">
                                                <button>Back to Products</button>
                                            </Link>
                                            <Link>
                                            <button disabled={inCart?true:false} onClick={()=>{
                                                value.addToCart(id)
                                                value.openModal(id)
                                            }}>{inCart?"In Cart":"Add to Cart"}
                                            </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            }
            </ProductConsumer>
        )
    }
}
