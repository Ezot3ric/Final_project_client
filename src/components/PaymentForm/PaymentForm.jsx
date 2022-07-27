import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js"
import { Container, Form, Button } from "react-bootstrap"
import { useState } from "react"

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
                );
                console.log(data);

                elements.getElement(CardElement).clear();
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
    }
    return (

        <Container>

            <Form onSubmit={handleSubmit} className="card card-body">
                <img
                    src="https://qualityinspection.org/wp-content/uploads/2012/01/HowtoPayChineseSuppliersbyBankTransferTT.jpg"
                    alt="Card image"
                    className="img-fluid"
                />

                <div className="form-group">
                    <CardElement />
                </div>
                <button disabled={!stripe} className="btn btn-success">
                    {loading ? (
                        <div className="spinner-border text-light" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) : (
                        "Buy"
                    )}
                </button>
            </Form>
        </Container >

    )
}

export default PaymentForm