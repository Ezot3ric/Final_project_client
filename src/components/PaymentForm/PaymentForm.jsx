import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Container, Form, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useState } from "react"
import './PaymentForm.css'
import axios from 'axios'
import "bootswatch/dist/lux/bootstrap.min.css"


const PaymentForm = () => {

    const stripe = useStripe()
    const elements = useElements()

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })
        setLoading(true);

        if (!error) {

            const { id } = paymentMethod
            try {
                const { data } = await axios.post(
                    "http://localhost:3000/api/checkout",
                    {
                        id,
                        amount: 10000
                    }
                )

                elements.getElement(CardElement).clear()
            } catch (error) {

            }
            setLoading(false)
        }
    }
    return (

        <Container>
            <h1>Pay With Card</h1>
            <Form onSubmit={handleSubmit} >
                <img
                    src="https://qualityinspection.org/wp-content/uploads/2012/01/HowtoPayChineseSuppliersbyBankTransferTT.jpg"
                    alt="Card image"
                    className="img-fluid"
                />

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="phone" name="phone" />
                </Form.Group>


                <div className="form-group">
                    <CardElement />
                </div>
                <Link to="/cart/paymentConfirm">
                    <Button disabled={!stripe} className='button-85'>
                        {loading ? (
                            <div className="spinner-border text-light" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        ) : (
                            'Buy'
                        )}
                    </Button>
                </Link>
            </Form>
        </Container >

    )
}

export default PaymentForm