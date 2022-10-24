import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer({ progress }) {
  return (
    <Container>
      <Link to="/habitos">Hábitos</Link>
      <Circle>
        <Link to="/hoje">
          <CircularProgressbar
            value={progress}
            text={"Hoje"}
            background
            styles={buildStyles({
              backgroundColor: "#52B6FF",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </Link>
      </Circle>
      <Link to="/historico">Histórico</Link>
    </Container>
  );
}

const Container = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #52b6ff;
  background-color: white;
  z-index: 1;
`;

const Circle = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 40px;
`;
