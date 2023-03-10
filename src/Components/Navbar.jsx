import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

window.onscroll = function() {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbarStyle").style.backgroundColor ="rgba( 62, 134, 245, 0.15 )";
            document.getElementById("navbarStyle").style.backdropFilter ="blur( 8.5px )";
            document.getElementById("navbarStyle").style.transition="0.5s";
          } else {
            document.getElementById("navbarStyle").style.backgroundColor ="transparent";
            document.getElementById("navbarStyle").style.backdropFilter ="blur( 8.5px )";
            document.getElementById("navbarStyle").style.transition="0.5s";
        }
    }



const Navigation = () => {
    return(

        <Navbar id='navbarStyle' fixed='top' expand="lg">
        <Container>
          <Navbar.Brand style={{color:'white', fontSize:'24px'}} href="#home">Travelo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
            <Nav className='text-center w-100 d-flex justify-end' style={{fontSize:'18px'}}>
              <Nav.Link id='hoverNavLink' className="me-3"href="#home">Review</Nav.Link>
              <Nav.Link id='hoverNavLink' className="me-3" href="#link">Tips</Nav.Link>
              <Nav.Link id='hoverNavLink' className="me-3" href="#link">Alerts</Nav.Link>
              <Nav.Link id='hoverNavLink' className="me-3" href="#link">Blog</Nav.Link>
              <Nav.Link id='hoverNavLink' className="me-3" href="#link">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    )
}

export default Navigation;