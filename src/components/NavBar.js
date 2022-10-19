import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <Header>
            <Link to="/habitos">TrackIt</Link>
        </Header>
    )
}

const Header = styled.header`
position : fixed;
top:0;
left: 0;
width: 100%;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display: flex;
justify-content: space-between;
align-items: center;
padding: 18px 10px;
a{
font-family: 'Playball';
font-size: 40px;
color:white;
}
`