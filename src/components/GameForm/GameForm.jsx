import { Form, Button, Row, Col } from 'react-bootstrap'
import { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { MessageContext } from './../../contexts/userMessage.context'

import gameService from '../../services/game.services'
import uploadServices from './../../services/upload.services'

const GameForm = ({ fireFinalActions }) => {

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

    const [isLoading, setIsLoading] = useState(false)

    const { setShowMessage } = useContext(MessageContext)
    const navigate = useNavigate()

    const handleChange = e => {
        const { value, name } = e.target
        setGameData({ ...gameData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        gameService
            .addGame(gameData)
            .then(() => {
                fireFinalActions()
                setShowMessage({ show: true, title: `Game registrer!`, text: `Last game add` })
                navigate('/games-list')
            })
            .catch(err => console.log(err))
    }

    const handleFileInput = e => {

        setIsLoading(true)

        const formData = new FormData()

        for (const file of e.target.files) {
            formData.append('imageData', file)
        }

        console.log(formData)

        uploadServices
            .uploadImage(formData)
            .then(({ data }) => {
                setIsLoading(false)
                setGameData({ ...gameData, imgs: data })
                    .catch(err => console.log(err))
            })
    }
    const { name, release, imgs, description, rating, platforms, genre, price, studio } = gameData

    return (
        <div className='button-86'>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={handleChange} name="name" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="release">
                    <Form.Label>Release</Form.Label>
                    <Form.Control type="text" value={release} onChange={handleChange} name="release" placeholder="Release" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="imgs">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="file" onChange={handleFileInput} name="imgs" multiple />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control type="text" value={description} onChange={handleChange} name="description" placeholder="Description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control type="number" value={rating} onChange={handleChange} name="rating" placeholder="Rating" />
                </Form.Group>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="platforms">
                            <Form.Label>Platforms</Form.Label>
                            <Form.Control type="text" value={platforms} onChange={handleChange} name="platforms" placeholder="Platforms" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="genre">
                            <Form.Label>Genre</Form.Label>
                            <Form.Control type="text" value={genre} onChange={handleChange} name="genre" placeholder="Genre" />
                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group className="mb-3" controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" value={price} onChange={handleChange} name="price" placeholder="Price" />
                        </Form.Group>
                    </Col>
                </Row>

                <Form.Group className="mb-3" controlId="studio">
                    <Form.Label>Studio</Form.Label>
                    <Form.Control type="text" value={studio} onChange={handleChange} name="studio" placeholder="Studio" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit" disabled={isLoading}>{isLoading ? 'One moment please' : 'Register new game'}</Button>
                </div>

            </Form>
        </div>
    )
}

export default GameForm