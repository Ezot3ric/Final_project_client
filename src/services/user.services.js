import axios from 'axios'

class UserServices {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem('authToken')

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }


    getUser(user_id) {
        return this.api.get(`/profile/${user_id}`)
    }

    updateUser(user_id, userData) {
        return this.api.put(`/profile/edit/${user_id}`, userData)
    }

    deleteUser(user_id) {
        return this.api.delete(`/deleteUser/${user_id}`)
    }

}

const userServices = new UserServices()

export default userServices