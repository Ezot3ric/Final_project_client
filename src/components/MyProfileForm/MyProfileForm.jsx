import React, { useContext } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import { UserContext } from '../../contexts/user.context'


const MyProfileForm = ({ name, username, email, _id }) => {


    const { updateUserProfile } = useContext(UserContext)

    return (
        <>
            <h1>Edit your profile</h1>
            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>{name}</Form.Label>
                        <Form.Control type="text" name="name" placeholder="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>{username}</Form.Label>
                        <Form.Control type="text" name="username" placeholder="username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>{email}</Form.Label>
                        <Form.Control type="text" name="" placeholder="email" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button onClick={() => updateUserProfile(_id)} variant='dark' as='div'>Edit profile</Button>
                    </div>

                </Form>
            </Container>
        </>
    )
}

export default MyProfileForm
