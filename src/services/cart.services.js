import axios from 'axios'

class CartService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/cart`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getItems() {
        return this.api.get('/getItems')
    }

    addItem = itemId => {
        return this.api.put('/addItem', { game_id: itemId })
    }

    removeItem = itemId => {
        return this.api.put('/removeItem', { game_id: itemId })
    }


}

const cartService = new CartService()

export default cartService