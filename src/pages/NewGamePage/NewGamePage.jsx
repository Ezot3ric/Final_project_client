import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import GameForm from '../../components/GameForm/GameForm'

import './NewGameForm.css'

const NewGamePage = () => {

    const navigate = useNavigate()

    return (

        <Container>

            <h1>Register new game</h1>

            <hr />

            <GameForm fireFinalActions={() => navigate(`/games-list`)} />

        </Container>

    )
}

export default NewGamePage