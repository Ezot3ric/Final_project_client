import React from 'react'
import { Container } from 'react-bootstrap'
import GameUpdateForm from '../../components/GameUpdateForm/GameUpdateForm'

export default function GameUpdateFormPage() {
    return (
        <Container>
            <br />
            <h1>Update Game</h1>

            <GameUpdateForm />

        </Container>
    )
}
