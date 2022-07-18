import { Container } from 'react-bootstrap'
import GameForm from '../../components/GameForm/GameForm'

import './NewGameForm.css'

const NewGamePage = () => {

    return (

        <Container>

            <h1>Register new game</h1>

            <hr />

            <GameForm />

        </Container>

    )
}

export default NewGamePage