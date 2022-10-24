import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { BASE_URL } from "../assets/constants/BASE_URL";
import { ThreeDots } from "react-loader-spinner";
import Weekday from "./Weekday";
import { WEEKDAYS } from "../assets/constants/WEEKDAYS";

export default function NewHabit({
  setNewHabit,
  token,
  setRender,
  render,
  isLoading,
  setIsLoading,
  input,
  setInput,
}) {
  const [selectedDays, setSelectedDays] = useState([]);

  const postOBJ = {
    name: input,
    days: selectedDays,
  };

  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function handleSave() {
    if(input===""){
      alert('Insira um hábito');
      return;
    }
    setSelectedDays(selectedDays.sort((a, b) => a - b));
    setIsLoading(true);
    const promisse = axios.post(`${BASE_URL}/habits`, postOBJ, CONFIG);
    promisse.then((e) => {
      setNewHabit(false);
      setRender(!render);
      setIsLoading(false);
    });
    promisse.catch(() => setIsLoading(false));
  }
  return (
    <Container>
      {isLoading ? (
        <Disabled>{input}</Disabled>
      ) : (
        <Input
          type="text"
          placeholder="nome do hábito"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      )}
      <div>
        {WEEKDAYS.map((d, i) => (
          <Weekday
            key={i}
            d={d}
            index={i}
            setSelectedDays={setSelectedDays}
            selectedDays={selectedDays}
          />
        ))}
      </div>
      <Buttons>
        <Cancel onClick={() => setNewHabit(false)}>Cancelar</Cancel>
        {isLoading ? (
          <Save>
             {" "}
            <ThreeDots
              height="20"
              width="40"
              radius="9"
              color="white"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </Save>
        ) : (
          <Save onClick={handleSave}>Salvar</Save>
        )}
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 180px;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  div {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-bottom: auto;
  }
`;

const Input = styled.input`
  width: 90%;
  height: 45px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  ::placeholder {
    color: #dbdbdb;
  }
  margin-bottom: 5px;
  font-size: 20px;
  font-family: "Lexend Deca";
`;

const Buttons = styled.div`
  display: flex;
`;

const Cancel = styled.button`
  color: #52b6ff;
  font-size: 16px;
`;

const Save = styled.button`
  background-color: #52b6ff;
  color: white;
  width: 85px;
  height: 35px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Disabled = styled.div`
  width: 90%;
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
