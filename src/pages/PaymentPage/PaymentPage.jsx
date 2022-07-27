import { Container } from "react-bootstrap"
import PaymentForm from './../../components/PaymentForm/PaymentForm'
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const PaymentPage = () => {

    const stripePromise = loadStripe("pk_test_51LPkKHFdoPMUvrD8enSqB68uReW6ejnUkMGo0SPDIAaWjeRGMd8roOO0by9y9a5F1MO0YwlqFfEWvp4jFZY7eAP000UyGJkcHs")

    return (

        <Container>
            <Elements stripe={stripePromise}>
                <div className="container p-4">
                    <div className="row h-100">
                        <div className="col-md-4 offset-md-4 h-100">
                            <PaymentForm />
                        </div>
                    </div>
                </div>
            </Elements>

        </Container>

    )
}

export default PaymentPage