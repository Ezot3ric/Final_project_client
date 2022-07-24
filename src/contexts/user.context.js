import { createContext, useState, useEffect } from 'react'
import userServices from '../services/user.services'

const UserContext = createContext()

function UserProviderWrapper(props) {

    const [user, setUser] = useState()

    useEffect(() => {
        getUser()
    }, [])


    const getUser = () => {

        userServices

            .getUser()
            .then(({ data }) => setUser(data.user))
            .catch(err => console.log(err))
    }

    const updateUserProfile = () => {

        userServices

            .editUser()
            .then(({ data }) => setUser(data.user))
            .catch(err => console.log(err))
    }


    return (
        <UserContext.Provider value={{ user, getUser, updateUserProfile }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProviderWrapper }