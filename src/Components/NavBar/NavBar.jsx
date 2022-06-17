import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import CartWidget from '../CartWidget/CartWidget'
import { Link , NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container fluid>
                    <Link to="/">
                            <Navbar.Brand href="#home">
                                <img
                                alt=""
                                src="https://www.seekpng.com/png/full/209-2091809_burger-king-logo-white.png"
                                width="60"
                                height="60"
                                className="d-inline-block align-top"
                                />
                            </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Nosotros</Nav.Link>
                            <Nav.Link href="#action2" className = "item">Contactanos</Nav.Link>
                            <NavDropdown title="Menu" id="navbarScrollingDropdown">
                                <NavLink to="/categoria/Carne"><NavDropdown.Item href="#action3">Carne</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Pollo"><NavDropdown.Item href="#action4">Pollo</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Vegetariana"><NavDropdown.Item href="#action4">Vegetariana</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Ensaladas"><NavDropdown.Item href="#action4">Ensaladas</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Acompañamiento"><NavDropdown.Item href="#action4">Acompañamiento</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Desayuno y Merienda"><NavDropdown.Item href="#action4">Desayuno y Merienda</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Postre"><NavDropdown.Item href="#action4">Postre</NavDropdown.Item></NavLink>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                                <FormControl
                                type="search"
                                placeholder="Buscar"
                                className="me-2"
                                aria-label="Search"
                                />
                            <Button variant="outline-primary">Buscar</Button>
                        </Form>
                        <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar