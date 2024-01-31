import { Col, Row } from 'react-bootstrap';
import './style.scss';
import Container from 'react-bootstrap/Container';

const TopNav = () => {
  return (
    <Container fluid className='topnav'>
      <Container className='Container-cont'>
          <Row className='main-row'>
            <Col xs={4} lg={1}  href="#deets">About Airtel</Col>
            <Col xs={3} lg={1}  href="#memes">Careers</Col>
          </Row>
      </Container>
    </Container>
  )
}

export default TopNav