import { Col, Container, Row } from 'react-bootstrap'
import './GamesFilter.css'
const GamesFilter = ({ filterGames }) => {

    return (
        <Container>


            <div>
                <input type="text" className="FilterGames" placeholder="Search game for name..." onChange={filterGames} />
                <hr />
            </div>

        </Container>
    )
}

export default GamesFilter