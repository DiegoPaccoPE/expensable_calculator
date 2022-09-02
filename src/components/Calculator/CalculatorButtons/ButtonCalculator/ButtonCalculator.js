import styled from "@emotion/styled";
import { colors } from "../../../../global/colors";
import { content, typography } from "../../../../global/typography";

const ButtonStyled = styled.button`
  border: none;
  font-family: ${typography.primary};
  color: ${colors.gray[600]};
  background-color: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 200ms ease-out;
  &:hover {
    filter: brightness(90%);
  }
  &:active {
    filter: brightness(60%);
  }
  grid-area: ${(props) => props.gridArea};
  ${content("xl")}
`;

function ButtonCalculator({ bg, gridArea, children, value, keyboardClick }) {
  function keyboardClicked(value) {
    keyboardClick(value);
  }
  return (
    <ButtonStyled
      bg={bg}
      gridArea={gridArea}
      onClick={() => keyboardClicked(value)}
    >
      {children}
    </ButtonStyled>
  );
}

export default ButtonCalculator;
