import { Container, Col, Carousel, Row, Button } from "react-bootstrap"
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState, useContext } from "react"

import './GameDetails.css'
import Rating from './../../components/Rating/Rating'

import heart from './../../Images/heart.png'
import lover from './../../Images/lover.png'

import { FavoritesContext } from "../../contexts/favorites.context"
import { AuthContext } from '../../contexts/auth.context'

import gamesServices from "../../services/game.services"
import favoritesService from "../../services/favorites.services"
import { CartContext } from "../../contexts/cart.context"
import { GameContext } from "../../contexts/game.context"

const GameDetails = () => {

  const { addToFavorites, removeFromFavorites } = useContext(FavoritesContext)

  const [game, setGame] = useState({})
  const [isFav, setIsFav] = useState(undefined)
  const [favorites, setFavorites] = useState(undefined)
  const { addItem, removeItem } = useContext(CartContext)

  const { user } = useContext(AuthContext)

  const favourite = favorites?.includes(game._id)

  const toggleFav = () => {
    isFav ? removeFromFavorites(game._id) : addToFavorites(game._id)
    setIsFav(!isFav)
  }

  const { deleteGame } = useContext(GameContext)
  const navigate = useNavigate()

  const { game_id } = useParams()


  const handleDelete = () => {
    deleteGame(game_id)
    navigate('/games-list')
  }

  useEffect(() => {
    loadGames()
  }, [])

  useEffect(() => {
    user && getFavorites()
  }, [user])

  useEffect(() => {
    setIsFav(favourite)
  }, [favourite])



  const getFavorites = () => {
    favoritesService
      .getAllFavorites()
      .then(({ data }) => setFavorites(data))
      .catch(err => console.log(err))
  }

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
    gamesServices
      .getOneGame(game_id)
      .then(({ data }) => setGame(data))
      .catch(err => console.error(err))

  }, [])

  return (
    <Container>

      <div className="GameDetails">

        <Row>
          <Col md={6}>

            <h3>{game.name}</h3>
            <p>{game.description}</p>
            <p>Genre: {game.genre}</p>
            <p>Released: {game.release}</p>
            <p>Rating: <Rating>{game.rating}</Rating></p>
            <p>Available for:{game.platforms}</p>
            <p>Price: {game.price}$</p>
            <img className='image' onClick={() => toggleFav()} src={isFav ? lover : heart} />

          </Col>

          <Col md={6}>

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
        <div>
          <Link to={`/game-update/${game_id}`}>
            <h1>{user?.role === 'ADMIN' && <Button className='button-86' as="div">Update game</Button>}</h1>
          </Link>
          <h1>{user?.role === 'ADMIN' && <Button className='button-86' onClick={handleDelete} variant='dark' as='div'>Delete Game</Button>}</h1>
          <div className="d-flex justify-content-center">
            <Button className='button-86' onClick={() => addItem(game._id)} variant='dark' as='div'>Add to cart</Button>
          </div>
        </div>
      </div>
    </Container >
  )
}

export default GameDetails