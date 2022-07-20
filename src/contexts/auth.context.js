import { createContext, useEffect, useState } from 'react'
import authService from '../services/auth.services'


const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [user, setUser] = useState(null)

    const storeToken = (token) => {
        localStorage.setItem("authToken", token)
    }

    const authenticateUser = () => {

        const token = localStorage.getItem("authToken")

        authService
            .verify(token)
            .then(({ data }) => setUser("data server", data))
            .catch(err => console.error('the server failed', err))
    }

    const logoutUser = () => {
        setUser(null)
        localStorage.removeItem('authToken')
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ user, storeToken, authenticateUser, logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }