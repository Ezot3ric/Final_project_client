import { Container, Col, Carousel, Row } from "react-bootstrap"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import gameService from "../../services/game.services"


const GameDetails = () => {

  const { game_id } = useParams()

  const [game, setGame] = useState({})

  useEffect(() => {
    gameService
      .getOneGame(game_id)
      .then(({ data }) => setGame(data))
      .catch(err => console.error(err))

  }, [])

  return (
    <Container>
      <Row>

        <Col md={{ span: 6 }}>

          <h3>{game.name}</h3>
          <p>{game.description}</p>
          <p>Genre: {game.genre}</p>
          <p>Released: {game.release}</p>
          <p>Rating: {game.rating}</p>
          <p>Available for:{game.platforms}</p>
          <p>Price: {game.price}$</p>

        </Col>

        <Col md={{ span: 4 }}>

          <Carousel>
            {
              game?.imgs?.map(el => {
                return (<Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={el}
                    alt="game img"
                  />
                </Carousel.Item>)
              })
            }

          </Carousel>

        </Col>

      </Row>


    </Container >
  )
}

export default GameDetails
