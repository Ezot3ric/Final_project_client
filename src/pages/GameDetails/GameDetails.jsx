import { Container, Col, Carousel, Row, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import gameService from "../../services/game.services"
import Rating from './../../components/Rating/Rating'
import heart from './../../Images/heart.png'
import lover from './../../Images/lover.png'
import { FavoritesContext } from "../../contexts/favorites.context"
import { useContext } from "react"
import { AuthContext } from '../../contexts/auth.context'
import gamesServices from "../../services/game.services"

const GameDetails = () => {

  const { addToFavorites, removeFromFavorites } = useContext(FavoritesContext)

  const [game, setGame] = useState({})
  const [isFav, setIsFav] = useState(false)
  const [favorites, setFavorites] = useState([])
  const { user } = useContext(AuthContext)
  const toggleFav = () => {
    isFav ? removeFromFavorites(game._id) : addToFavorites(game._id)
    setIsFav(!isFav)
  }

  const { game_id } = useParams()

  useEffect(() => {
    loadGames()
  }, [])

  const loadGames = () => {
    gamesServices
      .getGames()
      .then(({ data }) => {
        setFavorites(data.favorites)
        setIsFav(favorites.includes(game._id))
      })
      .catch(err => console.error(err))
  }


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
          <p>Rating: <Rating>{game.rating}</Rating></p>
          <p>Available for:{game.platforms}</p>
          <p>Price: {game.price}$</p>
          <img className='image' onClick={() => toggleFav()} src={isFav ? lover : heart} />

          <Link to={`/game-update/${game_id}`}>
            <h1>{user?.role === 'ADMIN' && <Button className='button-86' as="div">Update game</Button>}</h1>
          </Link>

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
