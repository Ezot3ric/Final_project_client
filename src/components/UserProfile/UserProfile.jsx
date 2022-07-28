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
                        <Form.Label><p>Name: {user.name}</p></Form.Label>
                        <br />
                        <Form.Label><p>Username: {user.username}</p></Form.Label>
                        <br />
                        <Form.Label><p>E-mail: {user.email}</p></Form.Label>

                        <Link to={`/my-profile/edit`}>
                            <div className="d-grid mb-6">
                                <Button className="button-85" href="my-profile/edit" as='div'>Edit Profile</Button>
                            </div>
                        </Link>
                    </Col>
                    <Col md={2}></Col>
                    <Col md={6}>
                        <h1>Wishlist</h1>
                        <Row>
                            {
                                user.favorites?.map((favorite) => (
                                    <Col md={4} key={favorite._id}>
                                        <FavoritesCard {...favorite} />
                                    </Col>
                                ))
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
