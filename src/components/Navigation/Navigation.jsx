import { useContext } from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'

import { AuthContext } from '../../contexts/auth.context'
import { MessageContext } from '../../contexts/userMessage.context'
import { Link } from 'react-router-dom'


const Navigator = () => {

    const { user, logoutUser } = useContext(AuthContext)
    const { setShowMessage } = useContext(MessageContext)

    const logout = () => {
        setShowMessage({ show: true, title: 'Good bye!', text: 'Your sesion is closed' })
        logoutUser()
    }

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="/">You got it man</Navbar.Brand>
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
                                            <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                                        </Link>
                                        <NavDropdown.Divider />
                                        <Link to="/login">
                                            <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                                        </Link>
                                    </NavDropdown>
                                    <Nav.Link as="span">
                                        <Link to="/">About us</Link>
                                    </Nav.Link>
                                </>
                                :
                                <>
                                    <Nav.Link as="span">
                                        <Link to="/addgame">Add new game</Link>
                                    </Nav.Link>

                                    <Nav.Link as="span">
                                        <Link to="/my-profile">Profile {user.username}</Link>
                                    </Nav.Link>

                                    <Nav.Link as="span">
                                        <Link to="/cart">Cart</Link>
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
    )
}

export default Navigator