import { Container } from "react-bootstrap";
import "./DialerAvatar.css";

const DialerAvatar = () => {
  const getRandomColor = () => {
    return Math.floor(Math.random() * 256);
  };
  return (
    <Container className="dialer-avatars" style={{ width: "60%" }}>
      <div
        className="dialer-avatar-container"
        style={{
          background: `linear-gradient(90deg, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()},1) 56%, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()}, 1) 100%)`,
        }}
      >
        P
      </div>
      <div
        className="dialer-avatar-container"
        style={{
          background: `linear-gradient(90deg, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()},1) 56%, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()}, 1) 100%)`,
        }}
      >
        #
      </div>
      <div
        className="dialer-avatar-container"
        style={{
          background: `linear-gradient(90deg, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()},1) 56%, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()}, 1) 100%)`,
        }}
      >
        P
      </div>
      <div
        className="dialer-avatar-container"
        style={{
          background: `linear-gradient(90deg, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()},1) 56%, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()}, 1) 100%)`,
        }}
      >
        #
      </div>
      <div
        className="dialer-avatar-container"
        style={{
          background: `linear-gradient(90deg, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()},1) 56%, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()}, 1) 100%)`,
        }}
      >
        U
      </div>
      <div
        className="dialer-avatar-container"
        style={{
          background: `linear-gradient(90deg, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()},1) 56%, rgba(${getRandomColor()},${getRandomColor()},${getRandomColor()}, 1) 100%)`,
        }}
      >
        RR
      </div>
    </Container>
  );
};

export default DialerAvatar;
