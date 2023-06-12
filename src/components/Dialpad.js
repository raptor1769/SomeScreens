import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Dialpad.css";

const Dialpad = () => {
  const dialer = [
    {
      number: 1,
      text: "",
    },
    {
      number: 2,
      text: "ABC",
    },
    {
      number: 3,
      text: "DEF",
    },
    {
      number: 4,
      text: "GHI",
    },
    {
      number: 5,
      text: "JKL",
    },
    {
      number: 6,
      text: "MNO",
    },
    {
      number: 7,
      text: "PQRS",
    },
    {
      number: 8,
      text: "TUV",
    },
    {
      number: 9,
      text: "WXYZ",
    },
    {
      number: "*",
      text: "",
    },
    {
      number: 0,
      text: "+",
    },
    {
      number: "#",
      text: "",
    },
  ];
  const rows = [];

  for (let i = 0; i < 12; i += 3) {
    const rowData = dialer.slice(i, i + 3);
    const cols = rowData.map((item, idx) => <Col className="dialpad-cols" key={idx}>
        <div className="dialpad-number">{item.number}</div>
        <div className="dialpad-text">{item.text}</div>
        </Col>);
    rows.push(<Row className="dialpad-rows" key={i}>{cols}</Row>);
  }
  return <div className="dialpad-container">{rows}</div>;
};

export default Dialpad;
