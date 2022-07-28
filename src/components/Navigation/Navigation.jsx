import { useContext, useState } from 'react'
import { Nav, Navbar, Container, NavDropdown, Modal, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth.context'
import { MessageContext } from '../../contexts/userMessage.context'
import { CartContext } from '../../contexts/cart.context'

import SignUpForm from './../SignUpForm/SignUpForm'
import LogInForm from './../LogInForm/LogInForm'
import Cart from './../Cart/Cart'

import './Navigation.css'


const Navigator = () => {
    const { items } = useContext(CartContext)
    const { user, logoutUser } = useContext(AuthContext)
    const { setShowMessage } = useContext(MessageContext)
    const [showSignUpModal, setShowSignUpModal] = useState(false)
    const [showLogInModal, setShowLogInModal] = useState(false)
    const [showCartModal, setShowCartModal] = useState(false)

    const logout = () => {
        setShowMessage({ show: true, title: 'Good bye!', text: 'Your sesion is closed' })
        logoutUser()
    }
    const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0)
    console.log(totalItems)
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

                                                <NavDropdown.Item onClick={openCartModal}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                                    </svg> {' '}
                                                    {items.length ? (<button className="badge">{totalItems}</button>) : ('')}
                                                </NavDropdown.Item>
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