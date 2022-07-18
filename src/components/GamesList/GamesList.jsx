import './GamesList.css'
import { Col, Row } from 'react-bootstrap'
import GameCard from '../GameCard/GameCard'
<<<<<<< HEAD

=======
>>>>>>> 712d638861679bb81ee74477ff8f46e30d6fa6f0

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