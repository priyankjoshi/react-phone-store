import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import propTypes from 'prop-types'
import ProductConsumer from '../context'
export default class Product extends Component {

    render() {
        const {id, title, img, price, inCart} = this.props.product;
        return (
                <ProductWarpper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value =>
                            (
                            <div className="img-container p-5 " onClick={()=>
                                value.handleDetails(id)
                            }>
                            <Link to="/details">
                                <img src={img} alt="product" className="card-img-top"  />
                            </Link>
                            <button className="cart-btn" disabled={inCart?true:false} onClick={()=>{
                                value.addToCart(id)
                                value.openModal(id)

                            }}>
                            {inCart ? (<p className="text-capatalize mb-0" disabled>
                                {" "}
                                in cart
                            </p>
                            ):(<i className="fas fa-cart-plus"/>)}    
                            </button>
                            </div>
                        ) }
                    </ProductConsumer>
                </div>
                {/* card footer */}
                <div className="card-footer d-fex justify-content-between">
                    <p className="align-self-center mb-0">
                        {title}
                    </p>
                    <h5>${price}</h5>
                </div>
                </ProductWarpper>
        )
    }
}

Product.propTypes = {
    product:propTypes.shape({
        id:propTypes.number,
        title:propTypes.string,
        img:propTypes.string,
        price:propTypes.number,
        inCart:propTypes.bool
    }).isRequired
}

const ProductWarpper = styled.div`
 .card{
    border-color: transparent;
    transition: all 1s linear;
 }
 .card-footer{
     background: transparent;
     border-top: transparent;
     transition: all 1s linear;
 }
 &:hover{

 }
`
