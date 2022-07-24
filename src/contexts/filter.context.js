import { createContext, useState } from 'react'

const FilterContext = createContext()

function FilterProviderWrapper(props) {

    const [gamesList, setGameList] = useState([])
    const [gamesData, setGamesData] = useState([])

    //FILTER GAMES
    const filterGames = letter => {

        if (letter === 'All') {
            setGameList(gamesData)

        } else {
            const filteredGames = gamesData.filter(elm => elm.name.startsWith(letter))

            setGameList(filteredGames)
        }
    }

    return (
        <FilterContext.Provider value={{ filterGames }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export { FilterContext, FilterProviderWrapper }