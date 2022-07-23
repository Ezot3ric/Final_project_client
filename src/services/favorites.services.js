import axios from 'axios'

class FavoritesService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/favorites`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    addFavorite = game_id => {
        return this.api.put(`/addToFavorites/${game_id}`)
    }

    removeFavorite = game_id => {
        return this.api.put(`/removeFromFavorites/${game_id}`)
    }
}

const favoritesService = new FavoritesService()

export default favoritesService