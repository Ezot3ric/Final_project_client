import { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/auth.services'

import { MessageContext } from '../../contexts/userMessage.context'

const SignUpForm = () => {

    const [signupData, setSignupData] = useState({
        name: '',
        username: '',
        email: '',
        password: ''
    })

    const { setShowMessage } = useContext(MessageContext)
    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({ ...signupData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()


        authService
            .signup(signupData)
            .then(({ data }) => {
                setShowMessage({ show: true, title: `Welcome, ${data.user.username}`, text: 'You are signup' })
                navigate('/login')
            })
            .catch(err => console.log(err))
    }


    const { name, username, email, password } = signupData

    return (
        <>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" value={name} onChange={handleInputChange} name="name" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="username">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" value={username} onChange={handleInputChange} name="username" placeholder="Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label></Form.Label>
                    <Form.Control type="text" value={email} onChange={handleInputChange} name="email" placeholder="Email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="password">
                    <Form.Label></Form.Label>
                    <Form.Control type="password" value={password} onChange={handleInputChange} name="password" placeholder="Password" />
                </Form.Group>



                <div className="d-grid">
                    <Button variant="dark" type="submit">Sign Up</Button>
                </div>

            </Form>
        </>
    )
}

export default SignUpForm