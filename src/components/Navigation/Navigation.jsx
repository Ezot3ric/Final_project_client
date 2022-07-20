import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import '../../components/Navigation/Navigation.css'


const Navigator = () => {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Container>
                <Navbar.Brand href="/">You got it man</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/games-list">Games</Nav.Link>
                        <Nav.Link href="/addGame">New Game</Nav.Link>

                    </Nav>
                    <Nav>
                        <NavDropdown title="User" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
                            <NavDropdown.Item href="/login">
                                Log In
                            </NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/">
                                Log Out
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={4} href="#memes">
                            About us
                        </Nav.Link>
                        <Nav.Link href="#deets">Cart</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigator