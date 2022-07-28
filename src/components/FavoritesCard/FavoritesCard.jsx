import React from 'react'
import { Row, Card, Container } from 'react-bootstrap'
import './FavoritesCard.css'
import { useNavigate } from 'react-router-dom'

export default function FavoritesCard({ name, imgs, price, _id }) {
    const navigate = useNavigate()

    return (
        <>
            <Card onClick={() => navigate(`/details/${_id}`)} key={_id} className='GameCard mb-6'>
                <Card.Img varian="top" src={imgs[0]} />
                <Card.Body>
                    <Card.Title className='card-text card-size'>{name}</Card.Title>
                    <Card.Subtitle className='card-text'><strong>{price}$</strong></Card.Subtitle>
                    <hr />
                </Card.Body>
            </Card>
        </>
    )
}
