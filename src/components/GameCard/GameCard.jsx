import './GameCard.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const GameCard = ({ img, name, _id, price }) => {

    return (
        <Card className='GameCard mb-4'>
            <Card.Img varian="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle>{price}</Card.Subtitle>
                <hr />
                <Link to={`/details/${_id}`}>
                    <div className="d-grid">
                        <Button variant='dark' size='sm' as='div'>More details</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default GameCard