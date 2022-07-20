import { useEffect, useState, useContext } from 'react'
import './GamesPage.css'
import gameService from '../../services/game.services'
import GamesList from './../../components/GamesList/GamesList'
import { Container } from 'react-bootstrap'

const GamesPage = () => {

    const [games, setGames] = useState([])

    useEffect(() => {
        loadGames()
    }, [])

    const loadGames = () => {
        gameService
            .getGames()
            .then(({ data }) => setGames(data))
            .catch(err => console.error(err))
    }


    return (
        <>
            <Container>
                <h1>Available Video Games</h1>
                {<GamesList games={games} />}
            </Container>
        </>
    )
}

export default GamesPage