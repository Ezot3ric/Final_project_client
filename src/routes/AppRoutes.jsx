import { Routes, Route } from 'react-router-dom'
import GamesPage from '../pages/GamesPage/GamesPage'
import NewGamePage from '../pages/NewGamePage/NewGamePage'
import HomePage from '../pages/HomePage/HomePage'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games-list" element={<GamesPage />} />
            <Route path="/addGame" element={<NewGamePage />} />

        </Routes>

    )
}
export default AppRoutes