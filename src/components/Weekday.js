import styled from "styled-components";
import { useState } from "react";

export default function Weekday({ d, setSelectedDays ,selectedDays, index}) {
  const [selected, setSelected] = useState(false);

    function handleClick(){
        setSelected(!selected)
        if(!selected){
            setSelectedDays([...selectedDays, (index)])
        } else {
            setSelectedDays(selectedDays.filter((element)=> element !== index))
        }
    }

  return (
    <Container onClick={handleClick} selected={selected}>
      {d}
    </Container>
  );
}

const Container = styled.button`
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
