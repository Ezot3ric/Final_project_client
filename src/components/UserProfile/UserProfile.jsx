import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FavoritesCard from './../FavoritesCard/FavoritesCard'

export default function UserProfile({ user }) {

    return (
        <>
            <Container>
                <Row>
                    <Col md="4" span="4">
                        <img src={user.avatar} alt="user img" />
                        <h3>Name: {user.name}</h3>
                        <p>Username: {user.username}</p>
                        <p>E-mail: {user.email}</p>
                        <Link to={`/my-profile/edit`}>
                            <div className="d-grid mb-6">
                                <Button variant='dark' href="my-profile/edit" as='div'>Edit Profile</Button>
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
