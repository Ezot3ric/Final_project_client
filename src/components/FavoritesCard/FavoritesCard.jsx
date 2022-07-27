import React from 'react'
import { Button, Row, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function FavoritesCard({ name, imgs, price, _id }) {

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
                        <Button variant='dark' as='div'>Add to cart</Button>
                    </div>
                </Card.Body>
            </Card>
        </Row>
    )
}
