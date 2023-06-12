import { Container, FormControl, InputGroup } from "react-bootstrap";
import "./Dialer.css";
import CallHistory from "./CallHistory";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";
import DialerAvatar from "./DialerAvatar";
import Dialpad from "./Dialpad";

const Dialer = () => {
  const [iconHide, setIconHide] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  return (
    <Container className="dialer">
      <CallHistory />
      <InputGroup className="dialer-input">
        <FormControl
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="type a name or number"
          onFocus={() => setIconHide(false)}
          onBlur={() => {
            if (!searchInput) setIconHide(true);
          }}
        />
        {iconHide && (
          <div className="search-icon">
            <Search />
          </div>
        )}
      </InputGroup>
      <DialerAvatar />
      <Dialpad />
    </Container>
  );
};

export default Dialer;
