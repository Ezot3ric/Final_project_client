import { Routes, Route } from 'react-router-dom'
import GameDetails from '../pages/GameDetails/GameDetails'
import GamesPage from '../pages/GamesPage/GamesPage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/games-list" element={<GamesPage />} />
            <Route path="details/:game_id" element={<GameDetails />} />
        </Routes>
    )
}
export default AppRoutes