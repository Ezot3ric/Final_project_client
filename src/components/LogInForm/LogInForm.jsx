import { useContext, useState } from "react"
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

import authService from '../../services/auth.services'

import { MessageContext } from './../../contexts/userMessage.context'
import { authContext } from './../../contexts/auth.context'

const LogInForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const { setShowMessage } = useContext(MessageContext)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService
            .login(loginData)
            .then(({ data }) => {

                setShowMessage({ show: true, title: `Welcome!`, text: `U are login!` })
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    const { email, password } = loginData

    return (
        <>
            <h1>Log In</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>email</Form.Label>
                    <Form.Control type="text" value={email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>password</Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                </Form.Group>


                <div className="d-grid">
                    <Button variant="dark" type="submit">Log In</Button>
                </div>

            </Form>
        </>
    )
}

export default LogInForm