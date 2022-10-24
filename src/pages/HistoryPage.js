import styled from "styled-components";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function HistoryPage({ token, user, progress }) {
  return (
    <Container>
      <NavBar user={user} />
      <Header>
        <h1>Histórico</h1>
      </Header>
      <Main>Em breve você poderá ver seu histórico aqui</Main>
      <Footer progress={progress}/>
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  h1 {
    color: #126ba5;
    font-size: 23px;
  }
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
