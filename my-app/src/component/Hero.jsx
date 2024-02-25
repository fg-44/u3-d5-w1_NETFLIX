import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Carousel from "react-bootstrap/Carousel";

import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

export class Hero extends Component {
  render() {
    const imagesList = [
      {
        id: 1,
        src: image1,
        alt: "Image 1",
      },
      {
        id: 2,
        src: image2,
        alt: "Image 2",
      },
      {
        id: 3,
        src: image3,
        alt: "Image 3",
      },
      {
        id: 4,
        src: image4,
        alt: "Image 4",
      },
      {
        id: 5,
        src: image5,
        alt: "Image 5",
      },
      {
        id: 6,
        src: image6,
        alt: "Image 6",
      },
    ];

    return (
      <Col className="mt-5">
        <div className="  d-flex justify-content-start align-items-end">
          <div>
            <p className="h2 text-white m-0 ">TV Shows</p>
          </div>

          <div className="container m-0 ">
            <DropdownButton
              id="customGeneres-btn"
              size="sm"
              variant="custom-btn"
              title="Genere"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        {/*-----------------------------------------------------------------------*/}

        <div className="  ">
          <div className="mt-4">
            <p className="h4 text-white m-0 ">Trending Now</p>
          </div>

          <Container Fluid className="m-0">
            <Carousel>
              {imagesList.map((image) => (
                <Carousel.Item key={image.id}>
                  <img
                    className="m-1"
                    src={image.src}
                    alt={image.alt}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Container>
        </div>
      </Col>
    );
  }
}

export default Hero;
