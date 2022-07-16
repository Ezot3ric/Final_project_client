import { Routes, Route } from 'react-router-dom'
import GamesPage from '../pages/GamesPage/GamesPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/games-list" element={<GamesPage />} />

        </Routes>
    )
}
export default AppRoutes