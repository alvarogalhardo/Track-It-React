import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import "dayjs/locale/pt-br";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { BASE_URL } from "../assets/constants/BASE_URL";
import TodayHabit from "../components/TodayHabit";
import { ProgressContext } from "../contexts/ProgressContext";

export default function TodayPage({ token, user, progress }) {
  const [habits, setHabits] = useState([0]);
  const [render, setRender] = useState(false);
  const { setProgress } = useContext(ProgressContext);
  const dayjs = require("dayjs");
  const day = dayjs().locale("pt-br").format("dddd, DD/MM");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function handleProgress() {
    let cont = 0;
    for (let i = 0; i < habits.length; i++) {
      if (habits[i].done) {
        cont++;
      }
    }
    let result=0;
    result = cont / habits.length;
    return result * 100;
  }

  useEffect(() => {
    setProgress(handleProgress);
  }, [habits]);

  useEffect(() => {
    const promisse = axios.get(`${BASE_URL}/habits/today`, CONFIG);
    promisse.then((e) => {
      setHabits(e.data);
    });
    promisse.catch(() => alert("Algo deu errado, tente novamente mais tarde."));
  }, [render]);

  return (
    <Container>
      <NavBar user={user} />
      <Main>
        <Title>
          <h1>{capitalizeFirstLetter(day)}</h1>
          {progress === 0 ? (
            <p>Nenhum hábito concluído ainda</p>
          ) : (
            <p><span>{progress}% dos hábitos concluídos</span></p>
          )}
        </Title>
        {habits.map((h) => (
          <TodayHabit
            habit={h}
            key={h.id}
            token={token}
            setRender={setRender}
            render={render}
          />
        ))}
      </Main>
      <Footer progress={progress} />
    </Container>
  );
}

const Container = styled.div`
  background-color: #e5e5e5;
  padding-top: 100px;
  height: 100vh;
  padding-right: 20px;
  padding-left: 20px;
  color: #666666;
  font-size: 18px;
  padding-bottom: 100px;
  overflow-y: scroll;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  h1 {
    color: #126ba5;
    font-size: 23px;
    margin-bottom: 5px
  }
  p {
    margin-bottom: 15px;
    span{
      color: #8FC549
    }
  }
`;
