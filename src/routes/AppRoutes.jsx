import { Routes, Route } from 'react-router-dom'
import GameDetails from '../pages/GameDetails/GameDetails'
import GamesPage from '../pages/GamesPage/GamesPage'
import NewGamePage from '../pages/NewGamePage/NewGamePage'
import HomePage from '../pages/HomePage/HomePage'
import Cart from '../components/Cart/Cart'
import SignUpPage from '../pages/SignupPage/SignupPage'
import LogInPage from '../pages/LogInPage/LogInPage'
import PrivateRoute from './PrivateRoutes'
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage'
import GameUpdateFormPage from '../pages/GameUpdateFormPage/GameUpdateFormPage'
import UserUpdateFormPage from '../pages/UserUpdatePage/UserUpdatePage'
import PaymentPage from '../pages/PaymentPage/PaymentPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/games-list" element={<GamesPage />} />

            <Route path="/addGame" element={<PrivateRoute />}>
                <Route path="" element={<NewGamePage />} />
            </Route>

            <Route path="/my-profile" element={<PrivateRoute />}>
                <Route path="" element={<MyProfilePage />} />
            </Route>

            <Route path="/my-profile/:user_id" element={<PrivateRoute />}>
                <Route path="" element={<UserUpdateFormPage />} />
            </Route>

            <Route path="/details/:game_id" element={<PrivateRoute />}>
                <Route path="" element={<GameDetails />} />
            </Route>

            <Route path="/game-update/:game_id" element={<PrivateRoute />}>
                <Route path="" element={<GameUpdateFormPage />} />
            </Route>


            <Route path="/cart" element={<PrivateRoute />}>
                <Route path="" element={<Cart />} />
            </Route>

            <Route path="/cart/payment" element={<PrivateRoute />}>
                <Route path="" element={<PaymentPage />} />
            </Route>
        </Routes>

    )
}
export default AppRoutes