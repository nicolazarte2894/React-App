import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import CartWidget from '../CartWidget/CartWidget'
import { Link , NavLink } from 'react-router-dom'
import './NavBar.css'
import { useCartContext } from '../../Context/CartContext'

function NavBar() {
    const {cart, iconCart} = useCartContext()
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
                                <NavLink to="/categoria/Carne" className={({isActive})=> isActive? "activeLink" : "noActiveLink"}><NavDropdown.Item href="#action4">Carne</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Pollo" className={({isActive})=> isActive? "activeLink" : "noActiveLink"}><NavDropdown.Item href="#action5">Pollo</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Vegetariana" className={({isActive})=> isActive? "activeLink" : "noActiveLink"}><NavDropdown.Item href="#action6">Vegetariana</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Ensaladas" className={({isActive})=> isActive? "activeLink" : "noActiveLink"}><NavDropdown.Item href="#action7">Ensaladas</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Acompa??amiento" className={({isActive})=> isActive? "activeLink" : "noActiveLink"}><NavDropdown.Item href="#action8">Acompa??amiento</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Desayuno y Merienda" className={({isActive})=> isActive? "activeLink" : "noActiveLink"}><NavDropdown.Item href="#action9">Desayuno y Merienda</NavDropdown.Item></NavLink>
                                <NavLink to="/categoria/Postre" className={({isActive})=> isActive? "activeLink" : "noActiveLink"}><NavDropdown.Item href="#action10">Postre</NavDropdown.Item></NavLink>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex mr-2">
                                <FormControl
                                type="search"
                                placeholder="Buscar"
                                className="me-2"
                                aria-label="Search"
                                />
                            <Button variant="outline-primary">Buscar</Button>
                        </Form>
                        {
                                cart.length<1?
                                <div></div>
                                :
                                <Button variant='danger' size='md' className='rounded-circle ml-2'>{iconCart()}</Button>
                        }
                        <Link to='/cart'>
                            <CartWidget/>
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar