import { createContext, useState, useEffect } from 'react'
import gameServices from '../services/game.services'

const GameContext = createContext()

function GameProviderWrapper(props) {

    const [games, setGames] = useState([])


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

    return (
        <GameContext.Provider value={{ updateGame, games, loadGames, getOneGame }}>
            {props.children}
        </GameContext.Provider>
    )
}

export { GameContext, GameProviderWrapper }