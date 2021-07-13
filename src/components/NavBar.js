import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => (
  <Navbar bg="light" expand="lg" className="navbar justify-content-between">
    <Navbar.Brand href="/">Notes App</Navbar.Brand>
    <Nav style={{ maxHeight: '100px' }} navbarScroll>
      <Nav.Link as={Link} to="/">
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/add">
        New Note
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default NavBar;
