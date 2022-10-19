import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../assets/constants/BASE_URL.js";
import logo from "../assets/images/logo.jpg";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const postOBJ = {
    email: email,
    password: password,
  };

  function handleSubmit(e) {
    e.preventDefault();
    const promisse = axios.post(`${BASE_URL}/auth/login`, postOBJ);
    promisse.then((e) => console.log(e));
    promisse.catch((e) => console.log(e));
  }
  return (
    <Container>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="senha"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Entrar</button>
      </form>
      <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 70px 36px 200px 36px;
  button {
    width: 304px;
    height: 45px;
    background-color: #52b6ff;
    border-radius: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  a {
    color: #52B6FF;
    font-size: 14px;
    text-decoration: underline;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  color: #dbdbdb;
  margin-bottom: 5px;
`;
