import axios from 'axios'

class GameService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/games`
        })
    }


    getGames() {
        return this.api.get('/getAllGames')
    }


    getOneGame(game_id) {
        return this.api.get(`/getOneGame/${game_id}`)
    }


    addGame(gameData) {
        return this.api.get('/addGame', gameData)
    }


    updateGame(game_id, gameData) {
        return this.api.get(`/updateGame/${game_id}`, gameData)
    }


    deleteGame(game_id) {
        return this.api.get(`/deleteGame/${game_id}`)
    }
}

const gameService = new GameService()

export default gameService