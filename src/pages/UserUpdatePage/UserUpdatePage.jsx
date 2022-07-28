import React from 'react'
import { Container } from 'react-bootstrap'
import UserUpdateForm from '../../components/UserUpdateForm/UserUpdateForm'

export default function UserUpdateFormPage() {
    return (
        <Container>
            <br />
            <h1>Edit User</h1>

            <UserUpdateForm />

        </Container>
    )
}
