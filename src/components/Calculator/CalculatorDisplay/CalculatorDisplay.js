import styled from "@emotion/styled";
import { colors } from "../../../global/colors";
import { content } from "../../../global/typography";
import { dolarIcon } from "../../../icons/calculatorIcons";

const StyledDisplay = styled.div`
  background-color: white;
  border-top: 1px solid ${colors.gray[200]};
  border-left: 1px solid ${colors.gray[200]};
  border-right: 1px solid ${colors.gray[200]};
  padding: 11px 20px;
  display: flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  color: ${colors.gray[600]};
  & svg {
    width: 13px;
    height: 28px;
  }
  ${(props) => content(props.type)}
`;

function CalculatorDisplay({ children }) {
  return (
    <StyledDisplay type="xl">
      {dolarIcon}
      {children}
    </StyledDisplay>
  );
}

export default CalculatorDisplay;
