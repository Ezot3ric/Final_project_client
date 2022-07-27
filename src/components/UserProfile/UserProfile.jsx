import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FavoritesCard from './../FavoritesCard/FavoritesCard'

export default function UserProfile({ user }) {

    return (
        <>
            <Container>
                <Row>
                    <Col md="8" span="4">

                        <h3>Name: {user.name}</h3>
                        <h4>Username: {user.username}</h4>
                        <h5>E-mail: {user.email}</h5>
                        <img src={user.avatar} alt="userimg" />
                        <Link to={`/my-profile/edit`}>
                            <div className="d-grid mb-6">
                                <Button variant='dark' href="my-profile/edit" as='div'>Edit Profile</Button>
                            </div>
                        </Link>
                    </Col>
                    {
                        user.favorites?.map((favorite) => (
                            <Col md="4" span="4" key={favorite._id}>
                                <FavoritesCard {...favorite} />
                            </Col>
                        ))
                    }

                </Row>
            </Container>
        </>
    )
}
