import styled from "styled-components";
import Welcome from "./assets/components/Welcome/Welcome";
import Game from "./assets/components/Game/Game";

function App() {
  return (
    <>
      <Button>Styled components</Button>
      {/* <Welcome /> */}
      <Game />
    </>
  );
}

export default App;

const Button = styled.button`
  border: none;
  background-color: blue;
  color: white;
  padding: 10px 30px;
`;
