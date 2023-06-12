import { CaretDownFill } from "react-bootstrap-icons";
import "./CallHistory.css";

const CallHistory = () => {
  return (
    <div className="dialer-history">
      <p className="dialer-title">NEW CALL FROM</p>
      <div className="dialed-info">
        <span className="bg-info rounded-circle name-container">SP</span>
        <span>Shadow Properties</span>
        <span>
          <CaretDownFill />
        </span>
      </div>
      <div className="caller-id">Your caller ID displays as (202) 944-6641. <span>Change</span></div>
    </div>
  );
};

export default CallHistory;
