import './style.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FiSearch } from "react-icons/fi";
import { MdOutlineSmartphone } from "react-icons/md";
import Logo from '../../assets/Images/airtel.png'



const NavBar = () => {
  return (
    <Container fluid className='main-cont'>
        <Container>
        <Navbar expand className="navbarB bg-body-light mb-3 py-2">
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={Logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavDropdown
                    title="prepaid"
                    id={`offcanvasNavbarDropdown-expand`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="postpaid"
                    id={`offcanvasNavbarDropdown-expand`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                 
                  <NavDropdown
                    title="international"
                    id={`offcanvasNavbarDropdown-expand`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="entertainment"
                    id={`offcanvasNavbarDropdown-expand`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title="support"
                    id={`offcanvasNavbarDropdown-expand`}>
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href="#action1">
                    <div className="app-click">
                        <MdOutlineSmartphone className='mobile-icon'/> 
                        Get App
                    </div>
                  </Nav.Link>

                  <Nav.Link href="#action1">
                    <FiSearch className='search-icon'/>
                  </Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </Container>
</Container>
  )
}

export default NavBar