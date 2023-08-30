import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import { PATH_PAGE } from '../../../shared/lib/react-router';

export function MainLayout() {
  return (
    <>
      <Navbar expand="lg" className="navbar navbar-dark bg-dark navbar-padding-inline">
        <Navbar.Brand href={PATH_PAGE.friends}>Friend App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={PATH_PAGE.friends}>About</Nav.Link>
            <Nav.Link href={PATH_PAGE.addFriend}>Add Friend</Nav.Link>
            <Nav.Link href={PATH_PAGE.friends}>Log out</Nav.Link>
            <Nav.Link href={PATH_PAGE.friends}>Edit profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <footer />
    </>
  );
}
