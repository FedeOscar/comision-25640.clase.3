import * as ReactBootStrap from 'react-bootstrap'
import Container from 'react-bootstrap'
const Navbar = () => {
    return (
        <div className="App">
            <ReactBootStrap.Navbar bg="dark" variant="dark">

                <ReactBootStrap.Navbar.Brand href="#home">Menu E-Commerce</ReactBootStrap.Navbar.Brand>
                <ReactBootStrap.Nav className="me-auto">
                    <ReactBootStrap.Nav.Link href="#home">Inicio</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#features">Producto</ReactBootStrap.Nav.Link>
                    <ReactBootStrap.Nav.Link href="#pricing">Contacto</ReactBootStrap.Nav.Link>
                </ReactBootStrap.Nav>

            </ReactBootStrap.Navbar>
        </div>
    );
}

export default Navbar;