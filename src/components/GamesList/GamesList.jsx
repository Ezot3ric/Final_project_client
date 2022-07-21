import './GamesList.css'
import { Col, Container, Row } from 'react-bootstrap'
import GameCard from '../GameCard/GameCard'

const GamesList = ({ games, onAdd }) => {
    return (
        <Container>
            <Row>
                {
                    games.map((game) => (
                        <Col md={3} key={game._id}>
                            <GameCard key={game._id} {...game} onAdd={onAdd} ></GameCard>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    )
}



export default GamesList