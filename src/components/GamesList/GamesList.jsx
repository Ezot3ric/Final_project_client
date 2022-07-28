import './GamesList.css'
import { Col, Container, Row } from 'react-bootstrap'
import GameCard from '../GameCard/GameCard'




const GamesList = ({ games, favorites }) => {

    return (
        <Container>
            <Row>

                {
                    games.map((game) => (
                        <Col md={3} key={game._id}>
                            <GameCard {...game} favourite={favorites?.includes(game._id)} />
                        </Col>

                    ))
                }

            </Row>
        </Container>
    )
}

export default GamesList