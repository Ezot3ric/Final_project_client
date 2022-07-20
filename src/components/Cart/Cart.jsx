import React from 'react'

export default function Cart({ cartItems, onAdd, onRemove }) {

    const itemsPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.qty, 0)
    const shippingPrice = itemsPrice > 200 ? 0 : 5
    const totalPrice = itemsPrice + shippingPrice


    return (
        <>
            <h2>Cart Items</h2>
            <div>
                {cartItems.length === 0 && <div>Cart is empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className='col-2'>{item.name}</div>
                    <div className='col-2'>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                        <button onClick={() => onAdd(item)} className="add">+</button>
                    </div>
                    <div className='col-2 text-right'>
                        {item.qty} x {item.price.toFixed(2)}$
                    </div>
                </div>
            ))}

            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div className="col-2">Items Price</div>
                        <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
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
