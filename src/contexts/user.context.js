import { createContext, useState } from 'react'
import userServices from '../services/user.services'

const UserContext = createContext()

function UserProviderWrapper(props) {

    const [user, setUser] = useState()


    const showInfo = () => {
        userServices
            .getUser()
            .then(({ data }) => setUser(data.user))
            .catch(err => console.log(err))
    }


    return (
        <UserContext.Provider value={{ setShowUser, showUser, showInfo }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProviderWrapper }