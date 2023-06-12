import { Container, FormControl, InputGroup, Navbar } from "react-bootstrap";
import {
  ArrowClockwise,
  ArrowLeft,
  ArrowRight,
  Calendar,
  CameraVideo,
  ChatFill,
  ChatLeft,
  Gear,
  Search,
  Telephone,
  ThreeDotsVertical,
} from "react-bootstrap-icons";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [iconHide, setIconHide] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  return (
    <Navbar bg="light" variant="light" className="border-bottom header">
      <Container fluid>
        <Navbar.Brand href="#home">
          <ChatFill color="purple" style={{ transform: "rotate(180deg)" }} />
          <ChatFill color="purple" />
        </Navbar.Brand>
        <Navbar.Collapse
          className="justify-content-start"
          style={{ height: "100%" }}
        >
          <div className="navbar-icon-container" style={{ marginLeft: "20px" }}>
            <div className="icon-wrapper-circle">
              <Telephone size={15} />
            </div>
            <div>
              <ChatLeft size={15} />
            </div>
            <div>
              <CameraVideo size={15} />
            </div>
          </div>
        </Navbar.Collapse>
        <Navbar.Collapse
          className="justify-content-center nav-middle"
          style={{ height: "100%", width: "40%" }}
        >
          <div
            className="navbar-icon-container"
            style={{ marginRight: "20px" }}
          >
            <div>
              <ArrowLeft size={20} />
            </div>
            <div>
              <ArrowRight size={20} />
            </div>
            <div>
              <ArrowClockwise size={20} />
            </div>
          </div>
          <div style={{ width: "90%" }}>
            <InputGroup>
              <FormControl
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search Dialpad"
                onFocus={() => setIconHide(false)}
                onBlur={() => {
                  if (!searchInput) setIconHide(true);
                }}
              />
              {iconHide && (
                <div className="search-icon">
                  <Search color="gray" />
                </div>
              )}
            </InputGroup>
          </div>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <div
            className="navbar-icon-container"
            style={{ width: "50%" }}
          >
            <div>
              <Gear size={18} />
            </div>
            <div>
              <Calendar size={18} />
            </div>
            <div className="logged-user-container">
              <div className="bg-info rounded-circle name-container">SP</div>
              <div className="online-indicator"></div>
            </div>
            <div>
              <ThreeDotsVertical size={18} />
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
