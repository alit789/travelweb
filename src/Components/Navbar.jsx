import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





const Navigation = () => {
    return(

        <Navbar id='navbarStyle' bg="dark" fixed='top' expand="lg">
        <Container>
          <Navbar.Brand style={{color:'white'}} href="#home">Travelo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
            <Nav className='text-center w-100 d-flex justify-end'>
              <Nav.Link style={{color:'white'}} className="me-2" href="#home">Review</Nav.Link>
              <Nav.Link style={{color:'white'}} className="me-2" href="#link">Tips</Nav.Link>
              <Nav.Link style={{color:'white'}} className="me-2" href="#link">Alerts</Nav.Link>
              <Nav.Link style={{color:'white'}} className="me-2" href="#link">Blog</Nav.Link>
              <Nav.Link style={{color:'white'}} className="me-2" href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}

export default Navigation;