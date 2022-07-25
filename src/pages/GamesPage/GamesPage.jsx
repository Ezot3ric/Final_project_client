import { useEffect, useState, useContext } from 'react'
import './GamesPage.css'
import GamesList from './../../components/GamesList/GamesList'
import { Col, Container, Row, Modal } from 'react-bootstrap'
import gameServices from '../../services/game.services'
import { MessageContext } from '../../contexts/userMessage.context'
import { AuthContext } from '../../contexts/auth.context'
import GameForm from './../../components/GameForm/GameForm'
import GamesFilter from '../../components/GamesFilter/GamesFilter'
import gamesServices from '../../services/game.services'


const GamesPage = () => {

    const [games, setGames] = useState([])
    const [showModal, setShowModal] = useState(false)

    const { setShowMessage } = useContext(MessageContext)
    const { user } = useContext(AuthContext)


    useEffect(() => {
        loadGames()
    }, [])

    const loadGames = () => {

        gameServices
            .getGames()
            .then(({ data }) => {
                setGames(data)
                setShowMessage({ show: true, title: `We loader ${data.length} games`, text: `You got it man!` })
            })
            .catch(err => console.error(err))
    }


    const openModal = () => setShowModal(true)
    const closeModal = () => setShowModal(false)

    const fireFinalActions = () => {
        closeModal()
        loadGames()
        setShowMessage({ show: true, title: 'Complety', text: 'Game add at list' })
    }

    const filterGames = e => {

        gamesServices
            .filterGames(e.target.value)
            .then(({ data }) => setGames(data))
            .catch(err => console.error(err))
    }

    return (
        <>
            <Container>
                <h1> {user && <span as="href" onClick={openModal}>Push for add a new game</span>} </h1>
                <hr />
                <Row>
                    <Col>
                        <GamesFilter filterGames={filterGames} />
                        <GamesList games={games} />
                    </Col>
                </Row>
            </Container>

            <Modal show={showModal} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>New game</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <GameForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>


        </>

    )
}

export default GamesPage