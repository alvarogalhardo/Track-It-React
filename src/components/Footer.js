import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <Container>
      <Link to="/habitos">Hábitos</Link>
      <Link to="/hoje">hoje</Link>
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
