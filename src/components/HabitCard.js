import styled from "styled-components";
import { WEEKDAYS } from "../assets/constants/WEEKDAYS";
import axios from "axios";
import { BASE_URL } from "../assets/constants/BASE_URL";

export default function HabitCard({ habit, token, setRender, render }) {
  const { id, name, days } = habit;
  const verifyColor = (d, index) => {
    if (days.includes(index)) {
      return (
        <Weekday selected={true} key={index}>
          {d}
        </Weekday>
      );
    } else {
      return (
        <Weekday selected={false} key={index}>
          {" "}
          {d}
        </Weekday>
      );
    }
  };

  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  function deleteHabit() {
    const promisse = axios.delete(`${BASE_URL}/habits/${id}`, CONFIG, {
      status: "Sucesso",
    });
    promisse.then((e) => setRender(!render));
    promisse.catch((e) => console.log(e));
  }
  return (
    <Container>
      <div>
        <Wrap>
        <p>{name}</p>
        </Wrap>
        <button onClick={deleteHabit}>
          <ion-icon name="trash-outline"></ion-icon>
        </button>
      </div>
      <div>{WEEKDAYS.map((d, i) => verifyColor(d, i))}</div>
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
  div {
    display: flex;
    
    justify-content: space-between;
    margin-bottom: 10px;
    p {
      display: flex;
      font-size: 20px;
      flex-wrap: wrap;
    }
  }
`;

const Weekday = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #d4d4d4;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.selected ? "white" : "#DBDBDB")};
  background-color: ${(props) => (props.selected ? "#CFCFCF" : "white")};
`;

const Wrap = styled.div`
display:flex;
flex-wrap: wrap;
`
