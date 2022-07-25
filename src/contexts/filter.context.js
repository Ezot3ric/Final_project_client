import { createContext, useState } from 'react'

const FilterContext = createContext()

function FilterProviderWrapper(props) {

    const [gamesList, setGameList] = useState([])
    const [gamesSelected, setGamesSelected] = useState([])

    //FILTER GAMES
    const filterGames = letter => {
        letter = 'A'
        if (letter === 'All') {
            setGameList(gamesSelected)

        } else {
            const filteredGames = gamesSelected.filter(elm => elm.name.startsWith(letter))

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