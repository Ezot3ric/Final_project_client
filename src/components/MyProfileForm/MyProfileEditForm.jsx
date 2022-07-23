import { useState } from "react"
import { Form, Button, Container } from 'react-bootstrap'
import userServices from '../../services/user.services'
import { useEffect } from "react"

const MyProfileForm = () => {

    const [myProfile, setMyProfile] = useState({
        name: '',
        username: '',
        email: '',
        avatar: '',
    })

    useEffect(() => {

        userServices

            .editUser()
            .then(response => {
                setMyProfile({
                    name: response.data.name,
                    username: response.data.username,
                    email: response.data.email,
                    avatar: response.data.avatar

                })
            })
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        const { value, name } = e.target
        setMyProfile({ ...myProfile, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()
    }

    const { name, username, email, avatar } = myProfile

    return (
        <>
            <h1>Edit your profile</h1>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={name} onChange={handleChange} name="name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" value={username} onChange={handleChange} name="username" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={email} onChange={handleChange} name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="avatar">
                        <Form.Label>Avatar</Form.Label>
                        <Form.Control type="text" value={avatar} name="avatar" />
                    </Form.Group>

                    <div className="d-grid">
                        <Button variant="dark" type="submit">Edit your Profile</Button>
                    </div>

                </Form>
            </Container>
        </>
    )
}

export default MyProfileForm