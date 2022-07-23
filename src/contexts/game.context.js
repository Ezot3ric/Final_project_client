// import { createContext, useState, useEffect } from 'react'
// import gameServices from '../services/game.services'

// const GameContext = createContext()

// function GameProviderWrapper(props) {

//     const [games, setGames] = useState([])


//     const updateGame = (itemId) => {

//         gameServices
//             .updateGame(itemId)
//             .then(({ data }) => setGames(data.items))
//             .catch(err => console.error(err))
//     }


//     const removeGame = itemId => {

//         gameServices
//             .deleteGame(itemId)
//             .then(({ data }) => setGames(data.items))
//             .catch(err => console.error(err))
//     }

//     return (
//         <GameContext.Provider value={{ updateGame, removeGame }}>
//             {props.children}
//         </GameContext.Provider>
//     )
// }

// export { GameContext, GameProviderWrapper }