import React from 'react'
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FavoritesCard from './../FavoritesCard/FavoritesCard'
import './UserProfile.css'

export default function UserProfile({ user }) {

    return (
        <>

            <Container>
                <Row>
                    <Card className='GameCard mb-2'></Card>
                    <Col md="4" span="4">
                        <h2>User Profile</h2>
                        <hr />
                        <div className='avatar'>
                            <Card.Img varian="top" src={user.avatar} />
                            <hr />
                        </div>
                        <hr />
                        <Form.Label>{user.name}</Form.Label>
                        <br />
                        <Form.Label>{user.username}</Form.Label>
                        <br />
                        <Form.Label>{user.email}</Form.Label>

                        <Link to={`/my-profile/edit`}>
                            <div className="d-grid mb-6">
                                <Button className="button-85" href="my-profile/edit" as='div'>Edit Profile</Button>
                            </div>
                        </Link>
                    </Col>

                    <h1>Wishlist</h1>
                    {
                        user.favorites?.map((favorite) => (
                            <Col md="2" span="4" key={favorite._id}>
                                <FavoritesCard {...favorite} />
                            </Col>
                        ))
                    }

                </Row>
            </Container>

        </>
    )
}
