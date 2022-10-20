import { useState,useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function HabitsPage({token,user}) {
    return(
        <>
        <NavBar user={user}/>  
        <Main>
            <h1>oi</h1>
        </Main>
        <Footer/>
        </>
    )
}

const Main = styled.main`
display: flex;
flex-direction: column;
margin-top: 100px;
`

