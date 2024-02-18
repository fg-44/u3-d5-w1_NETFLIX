import React, { Component } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "react-bootstrap/Image";

import { IoMdSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";

export class NavbarNetflix extends Component {
  render() {
    return (
      <Col>
        <Row>
          {[false, "lg"].map((expand) => (
            <Navbar
              key={expand}
              expand={expand}
              className="bg-body-tertiary mb-3"
              fixed="top"
              bg="dark"
              data-bs-theme="dark"
            >
              <Container fluid>
                <Navbar.Brand href="#">
                  <Image src="./assets/logo.png" />
                </Navbar.Brand>
                <Navbar.Toggle
                  aria-controls={`offcanvasNavbar-expand-${expand}`}
                />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title
                      id={`offcanvasNavbarLabel-expand-${expand}`}
                    >
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {/*----------------------------------- NAVBAR RIGHT -------------------------------------*/}

                    <Nav className="justify-content-start flex-grow-1 pe-3">
                      <Nav.Link href="#home">Home</Nav.Link>

                      <Nav.Link href="#link">TV Show</Nav.Link>

                      <Nav.Link href="#link">Movies</Nav.Link>

                      <Nav.Link href="#link">Recently Added</Nav.Link>

                      <Nav.Link href="#link">My List</Nav.Link>
                    </Nav>

                    {/*----------------------------------- NAVBAR LEFT --------------------------------------*/}

                     <Form className="d-flex">

                      <Button variant="outline-secondary border-0">
                        <IoMdSearch size={28} />
                      </Button>

                      <Nav.Link href="#link" className="d-flex align-self-center px-1"> KIDS </Nav.Link>

                      <Button variant="outline-secondary border-0 ">
                        <FaRegBell size={28} />
                      </Button>

                      <Button variant="outline-secondary border-0">
                        <CgProfile size={28} />
                      </Button>

                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </Row>
      </Col>
    );
  }
}

export default NavbarNetflix;
