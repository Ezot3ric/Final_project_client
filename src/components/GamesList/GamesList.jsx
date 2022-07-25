import './GamesList.css'
import { Col, Container, Row } from 'react-bootstrap'
import GameCard from '../GameCard/GameCard'


const GamesList = ({ games }) => {

    return (
        <Container>
            <Row>

                {
                    games.map((game) => (
                        <Col md={3} key={game._id}>
                            <GameCard {...game} />

                        </Col>

                    ))
                }

            </Row>
        </Container>
    )
}

export default GamesList