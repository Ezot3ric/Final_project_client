import './GamesList.css'
import { Col, Container, Row } from 'react-bootstrap'
import GameCard from '../GameCard/GameCard'
import GamesFilter from '../GamesFilter/GamesFilter'
import { useState } from 'react'

const GamesList = ({ games }) => {

    const [gamesList, setGameList] = useState(games)
    const [gamesData, setGamesData] = useState(games)

    //FILTER GAMES
    const filterGames = letter => {

        if (letter === 'All') {
            setGameList(gamesData)

        } else {
            const filteredGames = gamesData.filter(elm => elm.name.startsWith(letter))
            setGameList(filteredGames)
        }
    }

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