import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


export default function Cart() {

    const { items, getItems, totalPrice, shippingPrice, addItem, removeItem } = useContext(CartContext)


    useEffect(() => {
        getItems()
    }, [])


    console.log(items)



    return (


        <>
            <h2>Cart Items</h2>
            {
                !items.length ? <div>Cart is empty</div> :

                    items.map((item) => (
                        <div key={item._id} className="row">
                            <div className='col-2'>{item.product.name}</div>
                            <div className='col-2'>
                                <button onClick={() => addItem(item.product)} className="add">+</button>
                                <button onClick={() => removeItem(item.product)} className="remove">-</button>
                            </div>
                            <div className='col-2 text-right'>
                                {/* {product.qty} x {product.price.toFixed(2)}$ */}
                            </div>
                        </div>
                    ))
            }

            {items.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${/*itemsPrice.toFixed(2)*/}</div>
                    </div>
                    <div className="row">
                        <div className="col-2">Shipping Price</div>
                        <div className="col-1 text-right">
                            ${shippingPrice.toFixed(2)}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2">
                            <strong>Total Price</strong>
                        </div>
                        <div className="col-1 text-right">
                            <strong>${totalPrice.toFixed(2)}</strong>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <button onClick={() => alert('Implement Checkout!')}>
                            Checkout
                        </button>
                    </div>
                </>
            )}


        </>



    )
}
