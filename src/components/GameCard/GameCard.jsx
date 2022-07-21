import './GameCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CartContext } from './../../contexts/cart.context'
import { useContext } from 'react'


const GameCard = ({ game }) => {
    const { addItem } = useContext(CartContext)

    return (

        <Card className='GameCard mb-6'>
            <Card.Img varian="top" src={game.imgs[0]} />
            <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Subtitle>{game.price}$</Card.Subtitle>
                <hr />
                <Link to={`/details/${game._id}`}>
                    <div className="d-grid mb-6">
                        <Button variant='dark' as='div'>More details</Button>
                    </div>
                </Link>
                <div className="d-grid mb-6">
                    <Button onClick={() => addItem(game._id)} variant='dark' as='div'>Add to cart</Button>
                </div>
            </Card.Body>
        </Card>

    )
}

export default GameCard