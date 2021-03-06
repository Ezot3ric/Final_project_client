import React from 'react'
import { useContext, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { CartContext } from '../../contexts/cart.context'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './Cart.css'

export default function Cart() {

    const { items, getItems, totalPrice, shippingPrice, addItem, removeItem, itemsPrice } = useContext(CartContext)
    const navigate = useNavigate()
    useEffect(() => {

        getItems()

    }, [])

    return (

        <>
            <div>
                <h1 className='CarTextTitle'>Articles in your cart</h1>
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
                                                <div onClick={() => navigate(`/details/${item.product._id}`)} className='d-flex justify-content-start align-items-center'>
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
                                                    <button className='button-68' onClick={() => addItem(item.product._id)}>+</button>
                                                    {item.quantity}
                                                    <button className='button-68' onClick={() => removeItem(item.product._id)}>-</button>
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
                                <Link to="/cart/payment">
                                    <Button className='button-85' as='div'>Buy</Button>
                                </Link>
                            </div>

                        </Col>
                    )}
                </Row>

            </Container>
        </>
    )
}