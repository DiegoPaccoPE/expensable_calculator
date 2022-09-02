import styled from "@emotion/styled";
import { colors } from "../../../global/colors";
import { del, calendar, equal, check } from "../../../icons/calculatorIcons";
import ButtonCalculator from "./ButtonCalculator/ButtonCalculator";
const ButtonsContainer = styled.div`
  display: grid;
  gap: 1px;
  border: 1px solid ${colors.gray[200]};
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 50px;
  background-color: ${colors.gray[200]};
  grid-template-areas:
    "a b c d e"
    "f g h i j"
    "k l m n eq"
    "p q r s eq";
`;

function CalculatorButtons({ color, onKeyBoardPressed, equalIcon }) {
  const buttons = [
    { id: 1, content: "÷", color: colors.gray[100], gridArea: "a", value: "÷" },
    { id: 2, content: "×", color: colors.gray[100], gridArea: "f", value: "×" },
    { id: 3, content: "-", color: colors.gray[100], gridArea: "k", value: "-" },
    { id: 4, content: "+", color: colors.gray[100], gridArea: "p", value: "+" },
    { id: 5, content: "1", color: "#FFFFFF", gridArea: "b", value: "1" },
    { id: 6, content: "2", color: "#FFFFFF", gridArea: "c", value: "2" },
    { id: 7, content: "3", color: "#FFFFFF", gridArea: "d", value: "3" },
    { id: 8, content: "4", color: "#FFFFFF", gridArea: "g", value: "4" },
    { id: 9, content: "5", color: "#FFFFFF", gridArea: "h", value: "5" },
    { id: 10, content: "6", color: "#FFFFFF", gridArea: "i", value: "6" },
    { id: 11, content: "7", color: "#FFFFFF", gridArea: "l", value: "7" },
    { id: 12, content: "8", color: "#FFFFFF", gridArea: "m", value: "8" },
    { id: 13, content: "9", color: "#FFFFFF", gridArea: "n", value: "9" },
    { id: 14, content: "0", color: "#FFFFFF", gridArea: "r", value: "0" },
    { id: 15, content: del, color: "#FFFFFF", gridArea: "e", value: "del" },
    {
      id: 16,
      content: calendar,
      color: "#FFFFFF",
      gridArea: "q",
      value: "cal",
    },
    { id: 17, content: "c", color: "#FFFFFF", gridArea: "j", value: "c" },
    {
      id: 18,
      content: equalIcon ? equal : check,
      color: color,
      gridArea: "eq",
      value: "eq",
    },
    { id: 19, content: ".", color: "#FFFFFF", gridArea: "s", value: "." },
  ];
  function handleKeyboardClicked(value) {
    onKeyBoardPressed(value);
  }
  return (
    <ButtonsContainer>
      {buttons.map((button) => (
        <ButtonCalculator
          key={button.id}
          bg={button.color}
          gridArea={button.gridArea}
          value={button.value}
          keyboardClick={handleKeyboardClicked}
        >
          {button.content}
        </ButtonCalculator>
      ))}
    </ButtonsContainer>
  );
}

export default CalculatorButtons;
