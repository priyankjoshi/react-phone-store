import React from 'react'
import CartItems from './CartItems'
export default function CartList({value}) {
    const {cart} = value
    return (
        <div className="container-fluid">
            {cart.map(item=>{
                return <CartItems key={item.key} item={item} value={value}></CartItems>
            })}
        </div>
    )
}
