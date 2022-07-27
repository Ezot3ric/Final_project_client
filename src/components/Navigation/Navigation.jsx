import { useContext, useState } from 'react'
import { Nav, Navbar, Container, NavDropdown, Modal, Col, Offcanvas } from 'react-bootstrap'

import { AuthContext } from '../../contexts/auth.context'
import { MessageContext } from '../../contexts/userMessage.context'
import { Link } from 'react-router-dom'
import SignUpForm from './../SignUpForm/SignUpForm'
import LogInForm from './../LogInForm/LogInForm'
import Cart from './../Cart/Cart'
import './Navigation.css'

const Navigator = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const { setShowMessage } = useContext(MessageContext)

    const [showSignUpModal, setShowSignUpModal] = useState(false)
    const [showLogInModal, setShowLogInModal] = useState(false)
    const [showCartModal, setShowCartModal] = useState(false)

    const logout = () => {
        setShowMessage({ show: true, title: 'Good bye!', text: 'Your sesion is closed' })
        logoutUser()
    }

    const openSignUpModal = () => setShowSignUpModal(true)
    const closeSignUpModal = () => setShowSignUpModal(false)

    const openLogInModal = () => setShowLogInModal(true)
    const closeLogInModal = () => setShowLogInModal(false)

    const openCartModal = () => setShowCartModal(true)
    const closeCartModal = () => setShowCartModal(false)



    const fireFinalActions = () => {
        closeSignUpModal()
        closeLogInModal()
        closeCartModal()
    }



    return (
        <>
            <Navbar className="color-nav" expand="lg" variant="light" >
                <Container>
                    <Navbar.Brand href="/">You Got It Man</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as="span">
                                <Link to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link as="span">
                                <Link to="/games-list">Games</Link>
                            </Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                !user
                                    ?
                                    <>
                                        <NavDropdown title="User" id="collasible-nav-dropdown">
                                            <Link to="/signup">
                                                <NavDropdown.Item onClick={openSignUpModal}>Sign Up</NavDropdown.Item>
                                            </Link>

                                            <Link to="/login">
                                                <NavDropdown.Item onClick={openLogInModal}>Log In</NavDropdown.Item>
                                            </Link>
                                        </NavDropdown>
                                        <Nav.Link as="span">
                                            <Link to="/">About us</Link>
                                        </Nav.Link>
                                    </>
                                    :
                                    <>

                                        <Nav.Link as="span">
                                            <Link to="/my-profile">Hi {user.username}</Link>
                                        </Nav.Link>

                                        <Nav.Link as="span">
                                            <Link to="/cart">
                                                <NavDropdown.Item onClick={openCartModal}>Cart</NavDropdown.Item>
                                            </Link>
                                        </Nav.Link>

                                        <Nav.Link as="span">
                                            <Link to="/games-list" onClick={logout}>Log Out</Link>
                                        </Nav.Link>

                                    </>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={showSignUpModal} onHide={closeSignUpModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignUpForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

            <Modal show={showLogInModal} onHide={closeLogInModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LogInForm fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>


            <Offcanvas show={showCartModal} onHide={closeCartModal}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Cart fireFinalActions={fireFinalActions} />
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default Navigator