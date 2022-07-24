import './GameCard.css'
import { useContext } from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { CartContext } from './../../contexts/cart.context'
import { FavoritesContext } from './../../contexts/favorites.context'
import { useContext } from 'react'
import { GameContext } from '../../contexts/game.context'

const GameCard = ({ name, imgs, price, _id }) => {

    //CART
    const { addItem } = useContext(CartContext)
    const { removeItem } = useContext(CartContext)

    //WISHLIST
    const { addToFavorites } = useContext(FavoritesContext)
    const { removeFromFavorites } = useContext(FavoritesContext)
    const { removeGame } = useContext(GameContext)


    //GAMES
    // const { updateGame } = useContext(GamesContext)
    const { gamesDelete } = useContext(GamesContext)

    return (
        <Row>
            <Card className='GameCard mb-6'>
                <Card.Img varian="top" src={imgs[0]} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Subtitle>{price}$</Card.Subtitle>
                    <hr />
                    <Link to={`/details/${_id}`}>
                        <div className="d-grid mb-6">
                            <Button variant='dark' as='div'>More details</Button>
                        </div>
                    </Link>

                    <div className="d-grid mb-6">
                        <Button onClick={() => addItem(_id)} variant='dark' as='div'>Add to cart</Button>
                        <Button onClick={() => removeItem(_id)} variant='dark' as='div'>Remove Item</Button>

                        <Button onClick={() => addToFavorites(_id)} variant='dark' as='div'>Add to wishlist</Button>
                        <Button onClick={() => removeFromFavorites(_id)} variant='dark' as='div'>Remove from wishlist</Button>
                        <Button onClick={() => removeGame(_id)} variant='dark' as='div'>Delete Game</Button>
                        <Link to={`/game-update/${_id}`}>

                            <div className="d-grid">
                                <Button variant="dark" as="div">Update</Button>
                            </div> <br />
                        </Link>

                    </div>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default GameCard