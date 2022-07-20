import './GamesList.css'
import { Col, Row } from 'react-bootstrap'
import GameCard from '../GameCard/GameCard'

const GamesList = ({ games, onAdd }) => {
    return (
        <Row>
            {
                games.map((game) => (
                    <Col md={3} key={game.id}>
                        <GameCard key={game._id} game={game} onAdd={onAdd} ></GameCard>
                    </Col>
                ))
            }
        </Row>
    )
}



export default GamesList
