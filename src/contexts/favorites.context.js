import { createContext, useState } from 'react'
import favoritesService from '../services/favorites.services'

const FavoritesContext = createContext()

function FavoritesProviderWrapper(props) {

    const [favorites, setFavorites] = useState([])

    const addToFavorites = (game_id) => {

        favoritesService

            .addFavorite(game_id)
            .then(({ data }) => setFavorites(data))
            .catch(err => console.error(err))
    }

    const removeFromFavorites = game_id => {

        favoritesService

            .removeFavorite(game_id)
            .then(({ data }) => setFavorites(data))
            .catch(err => console.error(err))
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {props.children}
        </FavoritesContext.Provider>
    )
}

export { FavoritesContext, FavoritesProviderWrapper }