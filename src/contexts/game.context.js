import { createContext, useState, useEffect } from 'react'
import gameServices from '../services/game.services'

const GameContext = createContext()

function GameProviderWrapper(props) {

    const [games, setGames] = useState([])

    useEffect(() => {

        removeGame()

    }, [games])


    const getOneGame = (game_id) => {
        return gameServices.getOneGame(game_id)
    }


    const updateGame = (game_id, gameData) => {

        gameServices
            .updateGame(game_id, gameData)
            .then(() => loadGames())
            .catch(err => console.error(err))
    }

    const loadGames = () => {

        gameServices
            .getGames()
            .then(({ data }) => setGames(data))
            .catch(err => console.error(err))
    }


    const removeGame = game_id => {

        gameServices
            .deleteGame(game_id)
            .then(({ data }) => setGames(data))
            .catch(err => console.error(err))
    }

    return (
        <GameContext.Provider value={{ updateGame, removeGame, games, loadGames, getOneGame }}>
            {props.children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProviderWrapper }