import styled from "@emotion/styled";
import { content, textWeight, typography } from "../../../global/typography";

const StyledHeader = styled.div`
  height: 50px;
  padding: 5px 12px;
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: ${typography.primary};
  border-radius: 0.5rem 0.5rem 0 0;
  & svg {
    width: 40px;
    height: 40px;
  }
  & svg path {
    fill: ${(props) => props.color};
  }
`;

const StyledText = styled.p`
  ${(props) => content(props.type)}
  ${(props) => textWeight(props.textWeight)}
`;

function CalculatorHeader({ icon, color, name }) {
  return (
    <StyledHeader color={color}>
      {icon}
      <div>
        <StyledText type="xs">Add expenses to</StyledText>
        <StyledText type="md" textWeight="medium">
          {name}
        </StyledText>
      </div>
    </StyledHeader>
  );
}

export default CalculatorHeader;
