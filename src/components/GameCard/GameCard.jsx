import './GameCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GameCard = ({ game, onAdd }) => {

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
                    <Button onClick={() => onAdd(game)} variant='dark' as='div'>Add to cart</Button>
                </div>
            </Card.Body>
        </Card>

    )
}

export default GameCard