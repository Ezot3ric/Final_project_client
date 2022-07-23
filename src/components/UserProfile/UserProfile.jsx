import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export default function UserProfile({ user }) {

    return (
        <>
            <Container>
                <Row>
                    <Col md="8" span="4">
                        <img src={user.avatar} alt="user img" />
                        <h3>Name: {user.name}</h3>
                        <p>Username: {user.username}</p>
                        <p>E-mail: {user.email}</p>
                        <Link to={`/my-profile/edit`}>
                            <div className="d-grid mb-6">
                                <Button variant='dark' as='div'>Edit Profile</Button>
                            </div>
                        </Link>
                    </Col>
                    <Col md="4" span="4">
                        <h3>Wishlist</h3>
                        <p>Aquí van a estar los juegos que deseas comprar(favoritos)</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
