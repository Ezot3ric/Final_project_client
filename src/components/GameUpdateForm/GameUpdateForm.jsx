import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GameContext } from '../../contexts/game.context'
import Loader from '../Loader/Loader'
import { Form, Row, Col, Button } from 'react-bootstrap'
import uploadServices from '../../services/upload.services'
import { useParams } from 'react-router-dom'

export default function GameUpdateForm() {

    const { game_id } = useParams()
    const navigate = useNavigate()
    const { updateGame, getOneGame } = useContext(GameContext)

    const [isLoading, setIsLoading] = useState(false)
    const [isGameLoading, setIsGameLoading] = useState(true)

    const [gameData, setGameData] = useState({
        name: '',
        release: '',
        imgs: '',
        description: '',
        rating: '',
        platforms: '',
        genre: '',
        price: '',
        studio: ''
    })

    const { name, release, description, rating, platforms, genre, price, studio } = gameData

    useEffect(() => {


        getOneGame(game_id)
            .then(({ data }) => {
                const {
                    name, release, imgs, description, rating, platforms, genre, price, studio
                } = data
                const updatedGame = {
                    name, release, imgs, description, rating, platforms, genre, price, studio
                }
                setGameData(updatedGame)
                setIsGameLoading(false)
            })
            .catch(err => console.log(err))
    }, [])

    const handleInputChange = e => {

        const { name, value } = e.target
        setGameData({ ...gameData, [name]: value })
    }

    const uploadGameImage = e => {

        setIsLoading(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(({ data }) => {
                setIsLoading(false)
                setGameData({ ...gameData, imgs: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateGame(game_id, gameData)
        navigate('/games-list')
    }



    return (

        <>

            {
                isGameLoading
                    ?

                    <Loader />

                    :

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={name} onChange={handleInputChange} name="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="release">
                            <Form.Label>Release</Form.Label>
                            <Form.Control type="text" value={release} onChange={handleInputChange} name="release" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="avatar">
                            <Form.Label>Image</Form.Label>
                            <Form.Control type="file" onChange={uploadGameImage} name="imgs" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="description">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type="text" value={description} onChange={handleInputChange} name="description" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="rating">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control type="number" value={rating} onChange={handleInputChange} name="rating" />
                        </Form.Group>

                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="platforms">
                                    <Form.Label>Platforms</Form.Label>
                                    <Form.Control type="text" value={platforms} onChange={handleInputChange} name="platforms" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="genre">
                                    <Form.Label>Genre</Form.Label>
                                    <Form.Control type="text" value={genre} onChange={handleInputChange} name="genre" />
                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="price">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" value={price} onChange={handleInputChange} name="price" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mb-3" controlId="studio">
                            <Form.Label>Studio</Form.Label>
                            <Form.Control type="text" value={studio} onChange={handleInputChange} name="studio" />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="dark" type="submit" disabled={isLoading}>{isLoading ? 'One moment please' : 'Update Game'}</Button>
                        </div>

                    </Form>
            }
        </>
    )
}
