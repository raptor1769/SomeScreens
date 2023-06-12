import { useState } from "react";
import "./SideBar.css";
import {
  ChevronDown,
  ChevronUp,
  Hash,
  Inbox,
  Person,
  PersonVideo,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import callLogs from "../Data";

const SideBar = () => {
  const [deptArrow, setDeptArrow] = useState(true);
  const [callsArrow, setCallsArrow] = useState(true);
  return (
    <div className="sidebar">
      <div className="sidebar-actions">
        <div className="inbox-button">
          <span style={{ marginRight: "5px" }}>
            <Inbox />
          </span>
          <span>Inbox</span>
        </div>
        <div className="inbox-button selected">
          <span style={{ marginRight: "5px" }}>
            <PersonVideo />
          </span>
          <span>Contacts</span>
        </div>
        <div className="inbox-button">
          <span style={{ marginRight: "5px" }}>
            <Hash />
          </span>
          <span>All channels</span>
        </div>
      </div>
      <div className="sidebar-dept">
        <div
          className="departments-heading"
          onClick={() => setDeptArrow(!deptArrow)}
        >
          <span style={{ marginRight: "5px" }}>
            {deptArrow ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
          </span>
          <span>Departments</span>
        </div>
        {deptArrow ? (
          <div className="departments">
            <div className="department">
              <div
                style={{
                  backgroundColor: `rgb(${Math.floor(
                    Math.random() * 256
                  )} ${Math.floor(Math.random() * 256)} ${Math.floor(
                    Math.random() * 256
                  )})`,
                  width: "12px",
                  height: "12px",
                  borderRadius: "4px",
                  marginRight: "5px",
                }}
              ></div>
              <span>ShadowProperties</span>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="sidebar-recents">
        <div
          className="recents-heading"
          onClick={() => setCallsArrow(!callsArrow)}
        >
          <div>
            <span style={{ marginRight: "5px" }}>
              {callsArrow ? <ChevronDown size={15} /> : <ChevronUp size={15} />}
            </span>
            <span>Recents</span>
          </div>
          <div>
            <ThreeDotsVertical />
          </div>
        </div>
        {callsArrow
          ? callLogs.map((item, idx) => (
              <div className="recent-container" key={idx}>
                <div className="caller-avatar rounded-circle" style={{}}>
                  {item.name.length ? item.name[0] : <Person />}
                </div>
                <div className="caller-id">
                  {item.name.length ? item.name : item.number}
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

export default SideBar;
