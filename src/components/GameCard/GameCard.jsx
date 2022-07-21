import './GameCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from './../../contexts/cart.context'
import { useContext } from 'react'


const GameCard = ({ name, imgs, price, _id }) => {
    const { addItem } = useContext(CartContext)
    const { removeItem } = useContext(CartContext)

    return (

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
                </div>
            </Card.Body>
        </Card>

    )
}

export default GameCard