import { createContext, useState, useEffect } from 'react'
import userServices from '../services/user.services'

const UserContext = createContext()

function UserProviderWrapper(props) {

    const [user, setUser] = useState([])

    useEffect(() => {

        removeUser()

    }, [user])


    const getUser = (user_id) => {
        return userServices.getUser(user_id)
    }

    const updateUser = (user_id, userData) => {

        userServices
            .updateUser(user_id, userData)
            .then(() => loadUser())
            .catch(err => console.log(err))
    }

    const loadUser = () => {

        userServices
            .getUser()
            .then(({ data }) => setUser(data))
            .catch(err => console.error(err))
    }


    const removeUser = user_id => {

        userServices
            .deleteUser(user_id)
            .then(({ data }) => setUser(data))
            .catch(err => console.error(err))
    }




    return (
        <UserContext.Provider value={{ user, getUser, updateUser, loadUser, removeUser }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProviderWrapper }