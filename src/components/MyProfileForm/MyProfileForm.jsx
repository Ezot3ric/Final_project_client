import { useState } from "react"
import { Form, Button, Container } from 'react-bootstrap'
import { useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { MessageContext } from "../../contexts/userMessage.context"

import uploadServices from './../../services/upload.services'
import userServices from '../../services/user.services'

const MyProfileForm = () => {

    const [myProfile, setMyProfile] = useState({
        name: '',
        username: '',
        email: '',
        avatar: ''

    })

    const { setShowMessage } = useContext(MessageContext)
    const navigate = useNavigate()

    const handleChange = e => {
        const { value, name } = e.target
        setMyProfile({ ...myProfile, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        userServices
            .editUser(myProfile)
            .then(() => {
                setShowMessage({ show: true, title: `User edit!` })
                navigate('/my-profile')
            })

            .catch(err => console.log(err))
    }

    const handleFileInput = e => {

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadImage(myProfile)
            .then(({ data }) => setMyProfile({ ...myProfile, avatar: data.cloudinary_url }))
            .catch(err => console.log(err))
    }

    const { name, username, email } = myProfile

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
                        <Form.Control type="file" onChange={handleFileInput} name="avatar" />
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