import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import logo from "../assets/images/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../assets/constants/BASE_URL";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const postOBJ = {
    email: email,
    name: profileName,
    image: profilePicture,
    password: password,
  };

  function handleSubmit(e) {
    e.preventDefault();
    const promisse = axios.post(`${BASE_URL}/auth/sign-up`, postOBJ);
    console.log(postOBJ);
    promisse.then((e) => {
      if(e.status===200){
        alert('Usuário cadastrado com sucesso!');
        navigate('/');
      }
    });
    promisse.catch((e) => alert(e.response.data.message));
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
        <Input
          placeholder="nome"
          type="text"
          onChange={(e) => setProfileName(e.target.value)}
        />
        <Input
          placeholder="foto"
          type="url"
          onChange={(e) => setProfilePicture(e.target.value)}
        />
        <button>Cadastrar</button>
      </form>
      <Link to="/">Já tem uma conta? Faça login!</Link>
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
    color: #52b6ff;
    font-size: 14px;
    text-decoration: underline;
  }
  form{
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
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
