import styled from "@emotion/styled";
import { colors } from "../../../global/colors";
import { content, typography } from "../../../global/typography";

const StyledFooterCalculator = styled.div`
  font-family: ${typography.primary};
  padding: 5px 20px;
  border-radius: 0px 0px 0.5rem 0.5rem;
  background-color: ${colors.gray[100]};
  color: ${colors.gray[600]};
  border-bottom: 1px solid ${colors.gray[200]};
  border-left: 1px solid ${colors.gray[200]};
  border-right: 1px solid ${colors.gray[200]};
  text-align: center;
  ${content("xs")}
`;
function CalculatorFooter({ children }) {
  return <StyledFooterCalculator>{children}</StyledFooterCalculator>;
}

export default CalculatorFooter;
