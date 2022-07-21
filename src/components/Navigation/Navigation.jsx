import { useContext } from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import '../../components/Navigation/Navigation.css'
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
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/games-list">Games</Nav.Link>

                    </Nav>
                    <Nav>
                        {
                            !user
                                ?
                                <>
                                    <NavDropdown title="User" id="collasible-nav-dropdown">
                                        <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                                        <Link to="/signup">

                                        </Link>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
                                        <Link to="/login">

                                        </Link>
                                    </NavDropdown>

                                    <Nav.Link eventKey={4} href="#memes">
                                        About us
                                    </Nav.Link>

                                </>
                                :
                                <>

                                    <Nav.Link href="/addgame">Add new game</Nav.Link>


                                    <Nav.Link as="span">Profile {user.username}</Nav.Link>

                                    <Nav.Link href="/cart">Cart</Nav.Link>

                                    <Nav.Link href="/games-list" onClick={logout}>Log Out</Nav.Link>

                                </>
                        }



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigator