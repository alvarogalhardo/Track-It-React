import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavBar({ user }) {
  return (
    <Header>
      <p>TrackIt</p>
      <img src={user.image} alt="profile picture" />
    </Header>
  );
}

const Header = styled.header`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background-color: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  p {
    font-family: "Playball";
    font-size: 40px;
    color: white;
  }
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
