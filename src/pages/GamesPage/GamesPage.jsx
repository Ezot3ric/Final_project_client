import { useEffect, useState, useContext } from 'react'
import './GamesPage.css'
import gameService from '../../services/game.services'
import GamesList from './../../components/GamesList/GamesList'
import { Col, Container, Row } from 'react-bootstrap'
import Cart from '../../components/Cart/Cart'

const GamesPage = () => {

    const [games, setGames] = useState([])

    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        loadGames()
    }, [])

    const loadGames = () => {
        gameService
            .getGames()
            .then(({ data }) => setGames(data))
            .catch(err => console.error(err))
    }

    const onAdd = (game) => {
        const exist = cartItems.find((x) => x._id === game._id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x._id === game._id ? { ...exist, qty: exist.qty + 1 } : x
                )
            )
        } else {
            setCartItems([...cartItems, { ...game, qty: 1 }])
        }
    }

    const onRemove = (game) => {
        const exist = cartItems.find((x) => x._id === game._id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x._id !== game._id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x._id === game._id ? { ...exist, qty: exist.qty - 1 } : x
                )
            );
        }
    };


    return (
        <Container>
            <Row>

                <Col>
                    {<GamesList games={games} onAdd={onAdd} />}
                </Col>

                <Col>
                    
                </Col>

            </Row>
        </Container>












    )
}

export default GamesPage