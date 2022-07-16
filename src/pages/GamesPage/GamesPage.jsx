import { useEffect } from 'react'
import { useState } from 'react'
import './GamesPage.css'
import gameService from '../../services/game.services'
import GamesList from './../../components/GamesList/GamesList'
import { Container } from 'react-bootstrap'
const GamesPage = () => {

    const { showGames, setShowGames } = useState([])

    useEffect(() => {
        loadGames()
    }, [])

    const loadGames = () => {
        gameService
            .getGames()
            .then(({ data }) => setShowGames(data))
            .catch(err => console.error(err))
    }


    return (
        <>
            <Container>
                <h1>Available Video Games</h1>
                <GamesList games={showGames} />
            </Container>
        </>








    )
}

export default GamesPage