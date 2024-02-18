import React, { Component } from "react";
import Col from "react-bootstrap/Col";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import SplitButton from "react-bootstrap/SplitButton";

export class Hero extends Component {
  render() {
    return (
      <Col className="mt-5">
        <h2 class="mb-4">TV Shows</h2>
        
        {[DropdownButton].map((DropdownType, idx) => (
          <DropdownType
            as={ButtonGroup}
            key={idx}
            id={`dropdown-button-drop-${idx}`}
            size="lg"
            title="Drop large"
          >
            <Dropdown.Item eventKey="1">Dramma</Dropdown.Item>
            <Dropdown.Item eventKey="2">Action</Dropdown.Item>
            <Dropdown.Item eventKey="3">Romantic</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
          </DropdownType>
        ))}
      </Col>
    );
  }
}

export default Hero;
