import { Form, Button, Row, Col } from 'react-bootstrap'
import { useState } from 'react'
import gameService from '../../services/game.services'

const GameForm = () => {

    const [gameData, setGameData] = useState({

        name: '',
        release: '',
        description: '',
        img: '',
        rating: '',
        platform: '',
        genre: '',
        price: '',

    })

    const handleChange = e => {
        const { value } = e.target.value
        const name = e.target.name

        setGameData({ ...gameData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        gameService
            .addGame(gameData)
            .then(() => console.log('prueba form'))
            .catch(ERR => console.error(ERR))
    }

    const { name, release, description, img, rating, platform, genre, price } = gameData
    console.log(gameData)
    return (
        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label className=''>Name</Form.Label>
                <Form.Control type="text" value={name} onChange={handleChange} name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="release">
                <Form.Label>Release</Form.Label>
                <Form.Control type="text" value={release} onChange={handleChange} name="release" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" value={description} onChange={handleChange} name="description" />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Group className="mb-3" controlId="rating">
                        <Form.Label>Rating</Form.Label>
                        <Form.Control type="number" value={rating} onChange={handleChange} name="rating" />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group className="mb-3" controlId="platform">
                        <Form.Label>Platform</Form.Label>
                        <Form.Control type="text" value={platform} onChange={handleChange} name="platform" />
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Form.Group className="mb-3" controlId="img">
                    <Form.Label>Imagen (URL)</Form.Label>
                    <Form.Control type="text" value={img} onChange={handleChange} name="img" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="genre">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" value={genre} onChange={handleChange} name="genre" />
                </Form.Group>

                <Form.Group className="mb-6" controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" value={price} onChange={handleChange} name="price" />
                </Form.Group>
            </Row>

            <div className="d-grid">
                <Button variant="dark" type="submit">Register new game</Button>
            </div>

        </Form>
    )
}

export default GameForm