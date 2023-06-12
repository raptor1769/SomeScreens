import React from "react";
import { useState } from "react";
import { Col, Row, Tab, Tabs } from "react-bootstrap";
import callLogs from "../Data";
import "./LogsContainer.css";
import { Person } from "react-bootstrap-icons";
import moment from "moment/moment";

const LogsContainer = () => {
  const [key, setKey] = useState("all");
  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 custom-tabs-style"
    >
      <Tab eventKey="unread" title="Unread">
        Some Content
      </Tab>
      <Tab eventKey="all" title="All">
        {callLogs.map((item, idx) => {
          const date = moment(item.timeStamp, "YYYY-MM-DD HH:mm:ss")
          const today = moment()
          const checkDate = (timestamp) => {
            if(date.isSame(today, 'day')) {
                return timestamp.substring(11, 16)
            } else if(date.isSame(today.clone().subtract(1, 'day'), 'day')) {
                return 'Yesterday'
            } else if(date.isSame(today.clone().subtract(2, 'day'), 'day')) {
                return date.format('dddd')
            } else {
                return "Earlier"
            }
          }
          return (
            <Row key={idx} className="custom-row-style">
              <Col lg={3}>
                <div className="log-container" key={idx}>
                  <div
                    className="caller-avatar rounded-circle"
                    style={{ marginRight: "10px" }}
                  >
                    {item.name.length ? (
                      `${item.name.split(" ")[0][0]}${
                        item?.name?.split(" ")[1]
                          ? item?.name?.split(" ")[1][0]
                          : ""
                      }`
                    ) : (
                      <Person />
                    )}
                  </div>
                  <div className="caller-id">
                    {item.name.length ? item.name : item.number}
                  </div>
                </div>
              </Col>
              <Col lg={7}>
                <div
                  className="status-container"
                  style={
                    item?.status === "Missed call and voicemail" ||
                    item?.status === "Caller hung up"
                      ? { color: "red" }
                      : { color: "lightslategray" }
                  }
                >
                  {item?.status === "Message"
                    ? item?.message
                    : `${item.status}${
                        item.duration !== "0" ? " / " + item.duration : ""
                      }`}
                </div>
              </Col>
              <Col lg={2}>
                {checkDate(item?.timeStamp)}
              </Col>
            </Row>
          );
        })}
      </Tab>
      <Tab eventKey="calls" title="Calls">
        Some Content
      </Tab>
      <Tab eventKey="missed" title="Missed">
        Some Content
      </Tab>
      <Tab eventKey="meetings" title="Meetings">
        Some Content
      </Tab>
      <Tab eventKey="voicemails" title="Voicemails">
        Some Content
      </Tab>
      <Tab eventKey="recordings" title="Recordings">
        Some Content
      </Tab>
      <Tab eventKey="messages" title="Messages">
        Some Content
      </Tab>
      <Tab eventKey="starred" title="Starred">
        Some Content
      </Tab>
      <Tab eventKey="spam" title="Spam">
        Some Content
      </Tab>
    </Tabs>
  );
};

export default LogsContainer;
