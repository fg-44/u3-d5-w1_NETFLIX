import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { NavbarNetflix } from "../component/NavbarNetflix";
import { Hero } from "../component/Hero"

export default function HomePage() {
  return (
    <>
    <NavbarNetflix />
    <Container fluid>
      <Row>
        <Col><Hero/></Col>
        
        
      </Row>
    </Container>
    </>
  );
}
