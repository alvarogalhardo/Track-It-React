import { useState } from "react";
import styled from "styled-components";
import Weekday from "./Weekday";

export default function NewHabit({ setNewHabit }) {
  const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"];
  const [input, setInput] = useState("");
  const [selectedDays, setSelectedDays] = useState([]);
  function handleSave() {}
  return (
    <Container>
      <Input
        type="text"
        placeholder="nome do hábito"
        onChange={(e) => setInput(e.target.value)}
      />
      <div>
        {weekdays.map((d, i) => (
          <Weekday
            key={i}
            d={d}
            index={i + 1}
            setSelectedDays={setSelectedDays}
            selectedDays={selectedDays}
          />
        ))}
      </div>
      <Buttons>
        <Cancel onClick={() => setNewHabit(false)}>Cancelar</Cancel>
        <Save onClick={handleSave}>Salvar</Save>
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
