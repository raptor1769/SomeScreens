import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import LogsContainer from "../components/LogsContainer";

const CallLog = () => {
  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col sm={2}>
            <SideBar />
          </Col>
          <Col sm={10}>
            <LogsContainer />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CallLog;
