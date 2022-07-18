import { useEffect } from "react"
import { useState } from "react"
import { Col, Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import gameService from "../../services/game.services"


const GameDetails = () => {

    const [game, setGame] = useState({})

    const { game_id } = useParams()

    useEffect(() => {

        gameService
            .getOneGame(game_id)
            .then(({ data }) => setGame(data))
            .catch(err => console.error(err))
    }, [])


    return (
        <Container>
            <Col md={{ span: 6 }}>
                <h3>{game.name}</h3>
                <p>{game.description}</p>
                <p>Genre: {game.genre}</p>
                <p>Released: {game.release}</p>
                <p>Rating: {game.rating}</p>
                <p>Available for:</p>
                
                <p>Price: {game.price}</p>
            </Col>

            <Col md={{ span: 4 }}>
                <img src={game.img} alt="game img" />
            </Col>
        </Container>
    )
}

export default GameDetails