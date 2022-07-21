import { useContext } from "react"
import { AuthContext } from "../contexts/auth.context"
import { Navigate } from 'react-router-dom'

function PrivateRoute() {

    const { isLoggedIn, isLoading } = useContext(AuthContext)

    if (isLoading) {
        return <Loader />
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default PrivateRoute