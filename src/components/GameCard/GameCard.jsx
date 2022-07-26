import './GameCard.css'
import { useContext, useState } from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import heart from './../../Images/heart.png'
import lover from './../../Images/lover.png'
import { CartContext } from './../../contexts/cart.context'
import { FavoritesContext } from './../../contexts/favorites.context'

const GameCard = ({ name, imgs, price, _id, favourite }) => {

    //CART
    const { addItem, removeItem } = useContext(CartContext)

    //WISHLIST
    const { addToFavorites, removeFromFavorites } = useContext(FavoritesContext)

    const [isFav, setIsFav] = useState(favourite)

    const toggleFav = () => {
        isFav ? removeFromFavorites(_id) : addToFavorites(_id)
        setIsFav(!isFav)
    }

    //USER  
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
                    <Link to={`/game-update/${_id}`}>

                        <div className="d-grid">
                            <Button variant="dark" as="div">Update</Button>
                        </div> <br />
                    </Link>

                    <div className="d-grid mb-6">
                        <Button onClick={() => addItem(_id)} variant='dark' as='div'>Add to cart</Button>
                        <Button onClick={() => removeItem(_id)} variant='dark' as='div'>Remove Item</Button>
                    </div>

                    <div className='button'>
                        <img className='image' onClick={() => toggleFav()} src={isFav ? lover : heart} />
                    </div>

                </Card.Body>
            </Card>
        </Row>
    )
}

export default GameCard