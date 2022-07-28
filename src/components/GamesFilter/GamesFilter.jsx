import { Col, Container, Row } from 'react-bootstrap'

const GamesFilter = ({ filterGames }) => {

    return (
        <Container>

            <div className='filterStyle'>
                <div className="FilterGames">
                    <input type="text" placeholder="Search game for name..." onChange={filterGames} />
                    <hr />
                </div>
            </div>
        </Container>
    )
}

export default GamesFilter