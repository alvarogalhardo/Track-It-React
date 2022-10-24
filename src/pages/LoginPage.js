import styled from "styled-components";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../assets/constants/BASE_URL.js";
import logo from "../assets/images/logo.jpg";
import { TokenContext } from "../contexts/TokenContext.js";
import { UserContext } from "../contexts/UserContext.js";
import { LoadingContext } from "../contexts/LoadingContext.js";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setToken } = useContext(TokenContext);
  const { setUser } = useContext(UserContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const postOBJ = {
    email: email,
    password: password,
  };

  function handleSubmit(e) {
    e.preventDefault();
    const promisse = axios.post(`${BASE_URL}/auth/login`, postOBJ);
    setIsLoading(true);
    promisse.then((e) => {
      setUser({ name: `${e.data.name}`, image: `${e.data.image}` });
      if (e.status === 200) {
        setToken(e.data.token);
        setIsLoading(false);
        navigate("/hoje");
      }
    });
    promisse.catch(() => {
      alert("Algo deu errado, verifique seus dados e tente novamente");
      setIsLoading(false);
    });
  }

  function passwordEncript() {
    let newpassword = "";
    for (let i = 0; i < password.length; i++) {
      newpassword += "•";
    }
    return newpassword;
  }
  return (
    <Container>
      <img src={logo} alt="logo" />
      <form onSubmit={handleSubmit}>
        {isLoading ? (
          <>
            <Disabled>{email}</Disabled>
            <Disabled>{passwordEncript()}</Disabled>
          </>
        ) : (
          <>
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
          </>
        )}
        {isLoading ? (
          <button>
            {" "}
            <ThreeDots
              height="40"
              width="60"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </button>
        ) : (
          <button>Entrar</button>
        )}
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
  font-family: "Lexend Deca";
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
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 20px;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  color: #dbdbdb;
  margin-bottom: 5px;
  font-family: "Lexend Deca";
  font-size: 20px;
`;

const Disabled = styled.div`
  width: 300px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  color: #afafaf;
  margin-bottom: 5px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
`;
