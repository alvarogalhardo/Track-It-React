import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../assets/constants/BASE_URL";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import NewHabit from "../components/NewHabit";

export default function TodayPage({ token, user }) {
  const [habits, setHabits] = useState([]);
  const [newHabit, setNewHabit] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    const promisse = axios.get(`${BASE_URL}/habits`, config);
    promisse.then((e) => setHabits(e.data));
    promisse.catch((e) => console.log(e));
  }, []);
  
  return (
    <Container>
      <NavBar user={user} />
      <Header>
        <h1>Meus Hábitos</h1>
        <button onClick={() => setNewHabit(!newHabit)}>+</button>
      </Header>
      <Main>
        {newHabit ? <NewHabit setNewHabit={setNewHabit}/> : null}
        {habits.length > 0
          ? "vc tem habitos"
          : "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
      </Main>
      <Footer />
    </Container>
  );
}

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    color: #126ba5;
    font-size: 23px;
  }
  button {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
`;

const Container = styled.div`
  background-color: #e5e5e5;
  padding-top: 100px;
  height: 100vh;
  padding-right: 20px;
  padding-left: 20px;
  color: #666666;
  font-size: 18px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
