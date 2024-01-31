import { Col, Row } from 'react-bootstrap';
import './style.scss';
import Container from 'react-bootstrap/Container';

const TopNav = () => {
  return (
    <Container fluid className='topnav'>
      <Container className='Container-cont'>
          <Row className='main-row'>
            <Col aria-colspan={6} sm={3} href="#deets">About Airtel</Col>
            <Col aria-colspan={6} sm={6} href="#memes">Careers</Col>
          </Row>
      </Container>
    </Container>
  )
}

export default TopNav