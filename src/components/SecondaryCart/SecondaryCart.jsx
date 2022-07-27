import React from 'react'
import { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../contexts/cart.context'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './SecondaryCart.css'

export default function SecondaryCart() {
    const { items, getItems, totalPrice, shippingPrice, addItem, removeItem, itemsPrice } = useContext(CartContext)

    useEffect(() => {

        getItems()

    }, [])



    return (

        <>
            <Container>
                <div>
                    <h1 className='CarTextTitle'>Articles in your cart</h1>
                </div>



                <Row>
                    <Col ><div className='d-flex justify-content-start'>Article</div></Col>
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
                                    <Col xs={6} span={6}>
                                        <Row>
                                            <Col className='d-flex align-items-center' xs={6} span={6}>
                                                <img style={{ width: '100%' }} src={item.product.imgs} />
                                            </Col>
                                            <Col className='d-flex justify-content-start' xs={6} span={6}>
                                                <span style={{ width: '100%', fontSize: '13px' }}>{item.product.name}</span>
                                            </Col>
                                        </Row>

                                    </Col>
                                    <Col xs={6} span={6} className='d-flex justify-content-end align-items-center'>
                                        <div >
                                            {item.product.price}$
                                        </div>
                                    </Col>

                                </Row>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <Button className='button-87' onClick={() => addItem(item.product._id)}>+</Button>
                                    {item.quantity}
                                    <Button className='button-87' onClick={() => removeItem(item.product._id)}>-</Button>
                                </div>

                                <hr />
                            </>
                        ))
                }


                {items.length !== 0 && (
                    <>


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
                            <Link to="/cart">
                                <Button className='button-85' as='div'>Go to cart</Button>
                            </Link>
                        </div>
                    </>

                )}


            </Container>
        </>
    )
}
