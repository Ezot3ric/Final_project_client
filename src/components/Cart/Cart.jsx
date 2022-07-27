import React from 'react'
import { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../contexts/cart.context'
import { Container, Row, Col } from 'react-bootstrap'


export default function Cart() {

    const { items, getItems, totalPrice, shippingPrice, addItem, removeItem, itemsPrice } = useContext(CartContext)

    useEffect(() => {

        getItems()

    }, [])

    return (

        <>
            <div>
                <h1>Articles in your cart</h1>
            </div>

            <Container>

                <Row>
                    <Col md={9} span={9}>
                        <Row>
                            <Col ><div className='d-flex justify-content-start'>Article</div></Col>
                            <Col ><div className='d-flex justify-content-center'>Quantity</div></Col>
                            <Col><div className='d-flex justify-content-end'>Price</div></Col>
                        </Row>


                        <hr />
                        {
                            !items.length ?
                                <div>Cart is empty</div>

                                :

                                items.map((item) => (
                                    <>
                                        <Row key={item._id}>
                                            <Col >
                                                <div className='d-flex justify-content-start align-items-center'>
                                                    <div>
                                                        <img style={{ width: "150px", height: "130px" }} src={item.product.imgs} />
                                                    </div>
                                                    <div>
                                                        <span style={{ width: '300px', fontSize: '13px' }}>{item.product.name}</span>
                                                    </div>
                                                </div>

                                            </Col>
                                            <Col className='d-flex justify-content-center align-items-center'>
                                                <div >
                                                    <button onClick={() => addItem(item.product)} className="add">+</button>
                                                    <button onClick={() => removeItem(item._id)} className="remove">-</button>
                                                </div>
                                            </Col>
                                            <Col className='d-flex justify-content-end align-items-center'>
                                                <div >
                                                    {item.product.price}$
                                                </div>
                                            </Col>

                                        </Row>
                                        <hr />
                                    </>
                                ))
                        }
                    </Col>

                    {items.length !== 0 && (

                        <Col md={3} span={3}>

                            <div className='col 2 d-flex justify-content-center'> Total</div>

                            <hr />

                            <Row >

                                <Col>
                                    <div className='d-flex justify-content-start'>Items Price</div>
                                    <div className='d-flex justify-content-start'>Shipping Price</div>
                                    <div className='d-flex justify-content-start'>Total Price</div>
                                </Col>

                                <Col >
                                    <div className='d-flex justify-content-end'>${itemsPrice.toFixed(2)}</div>
                                    <div className='d-flex justify-content-end'>${shippingPrice}</div>
                                    <div className='d-flex justify-content-end'>${totalPrice.toFixed(2)}</div>
                                </Col>

                            </Row>

                            <div style={{ marginTop: '10px' }} className='d-flex justify-content-center'>
                                <button onClick={() => alert('Implement Checkout!')}>Checkout</button>
                            </div>

                        </Col>
                    )}
                </Row>

            </Container>
        </>
    )
}









