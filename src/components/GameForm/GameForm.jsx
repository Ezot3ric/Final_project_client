import { Form, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import gameService from '../../services/game.services'

const GameForm = () => {

    const [gameData, setGameData] = useState({

        name: '',
        release: '',
        imgs: '',
        description: '',
        rating: '',
        platforms: '',
        genre: '',
        price: '',
        studio: '',
    })

    const handleChange = e => {
        const { value, name } = e.target
        setGameData({ ...gameData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        gameService
            .addGame(gameData)
            .then(() => console.log('yiha!'))
            .catch(err => console.error(err))

    }

    const { name, release, imgs, description, rating, platforms, genre, price, studio } = gameData

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="release">
                <Form.Label>Release</Form.Label>
                <Form.Control type="text" value={release} onChange={handleChange} name="release" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imgs">
                <Form.Label>Imagen</Form.Label>
                <Form.Control type="text" value={imgs} onChange={handleChange} name="imgs" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Descripción</Form.Label>
                <Form.Control type="text" value={description} onChange={handleChange} name="description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="number" value={rating} onChange={handleChange} name="rating" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="platforms">
                        <Form.Label>Platforms</Form.Label>
                        <Form.Control type="text" value={platforms} onChange={handleChange} name="platforms" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="genre">
                        <Form.Label>Genre</Form.Label>
                        <Form.Control type="text" value={genre} onChange={handleChange} name="genre" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" value={price} onChange={handleChange} name="price" />
                    </Form.Group>
                </Col>
            </Row>

            <Form.Group className="mb-3" controlId="studio">
                <Form.Label>Studio</Form.Label>
                <Form.Control type="text" value={studio} onChange={handleChange} name="studio" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Register new game</Button>
            </div>

        </Form>
    )
}

export default GameForm