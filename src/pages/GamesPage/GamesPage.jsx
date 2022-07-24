import { useEffect, useState, useContext } from 'react'
import './GamesPage.css'
import GamesList from './../../components/GamesList/GamesList'
import { Col, Container, Row } from 'react-bootstrap'
import gameServices from '../../services/game.services'


const GamesPage = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        loadGames()
    }, [])

    const loadGames = () => {
        gameServices
            .getGames()
            .then(({ data }) => setGames(data))
            .catch(err => console.error(err))
    }

    return (
        <Container>
            <Row>
                <Col>
                    <GamesList games={games} />
                </Col>
            </Row>
        </Container>

    )
}

export default GamesPage