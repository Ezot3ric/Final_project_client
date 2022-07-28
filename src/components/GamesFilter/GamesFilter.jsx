import { Col, Container, Row } from 'react-bootstrap'
import './GamesFilter.css'

const GamesFilter = ({ filterGames }) => {

    return (
        <Container>
            <div>
                <div className="search-box">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                    <input type="text" className='input-search' placeholder="Type to Search..." onChange={filterGames} />
                    <hr />
                </div>
            </div>
        </Container>
    )
}

export default GamesFilter

/*< div class="search-box" >
<button class="btn-search"><i class="fas fa-search"></i></button>
<input type="text" class="input-search" placeholder="Type to Search...">
</div>*/
