import styled from "styled-components";
import axios from "axios";
import { BASE_URL } from "../assets/constants/BASE_URL";
import { useContext, useState } from "react";
import { ProgressContext } from "../contexts/ProgressContext";

export default function TodayHabit({ habit, token, setRender, render }) {
  const { id, name, done, currentSequence, highestSequence } = habit;
  const [checked, setChecked] = useState(done);
  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function handleClick(a) {
    if (!checked) {
      const promisse = axios.post(
        `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`,
        null,
        CONFIG
      );
      promisse.then((e) => {
        if (e.status == 204) {
          setChecked(true);
          setRender(!render);
        }
      });
      promisse.catch(() =>
        alert("Algo deu erraado, tente novamente mais tarde")
      );
    } else {
      const promisse = axios.post(
        `${BASE_URL}/habits/${id}/uncheck`,
        null,
        CONFIG
      );
      promisse.then((e) => {
        setChecked(false);
        setRender(!render);
      });
    }
  }
  return (
    <Container>
      <TextDiv
        checked={checked}
        highestSequence={highestSequence}
        currentSequence={currentSequence}
      >
        <h1>{name}</h1>
        <p>
          Sequência atual:
          <span> {currentSequence} </span>
          dias
        </p>
        <p>
          Seu recorde: <span>{highestSequence} </span>
          dias
        </p>
      </TextDiv>
      <Icon onClick={() => handleClick(checked)} checked={checked}>
        <ion-icon name="checkmark-outline"></ion-icon>
      </Icon>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  width: 25%;
  height: auto;
  background-color: ${(props) => (props.checked ? "#8FC549" : "#EBEBEB")};
  border-radius: 5px;
  cursor: pointer;
  ion-icon {
    width: 100%;
    height: 100%;
    color: white;
  }
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  h1 {
    font-size: 20px;
    margin-bottom: 8px;
  }
  p {
    font-size: 13px;
    margin-bottom: 5px;
    span {
      color: ${(props) => (props.checked ? "#8FC549" : "#666666")};
      color: ${(props) =>
        props.highestSequence === props.currentSequence
          ? "#8FC549"
          : "#666666"};
    }
  }
`;
