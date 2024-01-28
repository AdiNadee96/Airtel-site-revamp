import './style.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const TopNav = () => {
  return (
    <Navbar className='topnav' collapseOnSelect expand="lg">
      <Container className='navbar-cont'>
          <Nav>
            <Nav.Link href="#deets">About Airtel</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Careers
            </Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default TopNav