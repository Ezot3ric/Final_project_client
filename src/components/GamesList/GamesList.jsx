import './GamesList.css'
import { Col, Container, Row } from 'react-bootstrap'
import GameCard from '../GameCard/GameCard'
import GamesFilter from '../GamesFilter/GamesFilter'
import { FilterContext } from '../../contexts/filter.context'
import { useContext } from 'react'

const GamesList = ({ games }) => {

    const { filterGames } = useContext(FilterContext)

    return (
        <Container>
            <Row>

                <GamesFilter filterGames={filterGames} />
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