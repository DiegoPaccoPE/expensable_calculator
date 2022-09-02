import styled from "@emotion/styled";
import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import { groceryIcon } from "./icons/calculatorIcons";

const ModalContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(23, 23, 23, 0.75);
`;
function App() {
  return (
    <ModalContainer>
      <Calculator icon={groceryIcon} color="#06B6D4" name="Groceries" />
    </ModalContainer>
  );
}

export default App;
