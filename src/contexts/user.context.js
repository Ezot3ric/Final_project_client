import { createContext, useState } from 'react'
import userServices from '../services/user.services'

const UserContext = createContext()

function UserProviderWrapper(props) {

    const [showUser, setShowUser] = useState()


    const showInfo = () => {
        userServices
            .getUser()
            .then(({ data }) => setShowUser(data.user))
            .catch(err => console.log(err))
    }


    return (
        <UserContext.Provider value={{ setShowUser, showUser, showInfo }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProviderWrapper }