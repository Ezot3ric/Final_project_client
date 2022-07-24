import { createContext, useState } from 'react'
import gamesServices from '../services/game.services'

const GamesContext = createContext()

function GamesProviderWrapper(props) {

    const [games, setGames] = useState([])

    const updateGame = (game_id) => {

        gamesServices

            .updateGame(game_id)
            .then(({ data }) => setGames(data))
            .catch(err => console.error(err))
    }


    const gamesDelete = game_id => {

        gamesServices

            .deleteGame(game_id)
            .then(({ data }) => setGames(data))
            .catch(err => console.error(err))
    }

    return (
        <GamesContext.Provider value={{ games, updateGame, gamesDelete }}>
            {props.children}
        </GamesContext.Provider>
    )
}

export { GamesContext, GamesProviderWrapper }