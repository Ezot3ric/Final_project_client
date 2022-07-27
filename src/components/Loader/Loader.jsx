import './Loader.css'

import { Spinner } from 'react-bootstrap'

const Loader = () => {

    return (
        <Spinner animation="border" role="status">
            <span>L</span>
            <span>O</span>
            <span>A</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
        </Spinner>
    )
}

export default Loader