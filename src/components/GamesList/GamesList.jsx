import './GamesList.css'
import { Col, Row } from 'react-bootstrap'
import GameCard from '../GameCard/GameCard'


const GamesList = ({ games }) => {
    return (
        <Row>
            {
                games.map(game => {
                    return (
                        <Col md={3} key={game._id}>
                            <GameCard {...game} />
                        </Col>
                    )
                })
            }
        </Row>
    )
}

export default GamesList