import React, { Component } from 'react'
import Title from './Title'
import ProductConsumer from '../context'
import Products from './Product'
export default class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <div className="row">
                            <Title name="our" title="products"/>
                        </div>
                    <div className="row">
                        <ProductConsumer>
                            {
                                value =>{
                                    return value.products.map(
                                        product =>{
                                            return <Products key={product.id} product={product}/>
                                        }
                                    )
                                }
                            }
                        </ProductConsumer>
                    </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
