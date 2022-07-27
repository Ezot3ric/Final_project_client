import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Form, Button, Container } from 'react-bootstrap'

import Loader from '../Loader/Loader'
import uploadServices from '../../services/upload.services'
import { UserContext } from '../../contexts/user.context'


export default function UserUpdateForm() {

    const { user_id } = useParams()
    const navigate = useNavigate()
    const { updateUser, getUser } = useContext(UserContext)

    const [isLoading, setIsLoading] = useState(false)
    const [isUserLoading, setIsUserLoading] = useState(true)

    const [userData, setUserData] = useState({
        name: '',
        username: '',
        email: ''
    })

    const { name, username, email, password } = userData

    useEffect(() => {


        getUser(user_id)
            .then(({ data }) => {
                const {
                    name, username, email
                } = data
                const updateUser = {
                    name, username, email
                }
                setUserData(updateUser)
                setIsUserLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const handleInputChange = e => {

        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const uploadUserImage = e => {

        setIsLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(({ data }) => {
                setIsLoading(false)
                setUserData({ ...userData, avatar: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateUser(user_id, userData)
        navigate('/my-profile')
    }



    return (

        <>
            <Container>

                {
                    isUserLoading
                        ?

                        <Loader />

                        :

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>username</Form.Label>
                                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="avatar">
                                <Form.Label>Image</Form.Label>
                                <Form.Control type="file" onChange={uploadUserImage} name="imgs" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>email</Form.Label>
                                <Form.Control type="text" value={email} onChange={handleInputChange} name="email" />
                            </Form.Group>

                            <div className="d-grid">
                                <Button variant="dark" type="submit" disabled={isLoading}>{isLoading ? 'One moment please' : 'Update user'}</Button>
                            </div>

                        </Form>
                }

            </Container>
        </>

    )
}
