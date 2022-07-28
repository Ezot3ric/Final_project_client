import './GameCard.css'
import { useContext, useState, useEffect } from 'react'
import { Card, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import heart from './../../Images/heart.png'
import lover from './../../Images/lover.png'

import { CartContext } from './../../contexts/cart.context'
import { FavoritesContext } from './../../contexts/favorites.context'
import { MessageContext } from '../../contexts/userMessage.context'
<<<<<<< HEAD

=======
import { useEffect } from 'react'
>>>>>>> 90bf738267df2a3b415b7e017bfc281bd7bc4ef5


const GameCard = ({ name, imgs, price, _id, favourite }) => {

    //CART
    const { addItem, removeItem } = useContext(CartContext)
    const { setShowMessage } = useContext(MessageContext)
    //WISHLIST
    const { addToFavorites, removeFromFavorites } = useContext(FavoritesContext)

    const [isFav, setIsFav] = useState(undefined)

    const toggleFav = () => {
        isFav ? removeFromFavorites(_id) : addToFavorites(_id)
        setIsFav(!isFav)
    }

    useEffect(() => {
        setIsFav(favourite)
    }, [favourite])

    return (

        <div className="card2">
            <Row>
                <Card className='GameCard mb-2'>
                    <Card.Img varian="top" src={imgs[0]} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>{price}$</Card.Subtitle>
                        <hr />
                        <div>
                            <Link to={`/details/${_id}`}>
                                <Button className='button-86' variant='dark' as='div'>More details</Button>
                            </Link>
                            <Button className='button-86' onClick={() => addItem(_id)} variant='dark' as='div'>Add to cart</Button>

                        </div>
                        <img className='image' onClick={() => toggleFav()} src={isFav ? lover : heart} />
                    </Card.Body>
                </Card>
            </Row >
        </div>

    )
}

export default GameCard