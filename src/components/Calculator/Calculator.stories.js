import { groceryIcon } from "../../icons/calculatorIcons";
import Calculator from "./Calculator";

export default {
  title: "Calculator",
  component: Calculator,
};

const Template = (args) => <Calculator {...args}></Calculator>;
export const calculator = Template.bind({});
calculator.args = {
  icon: groceryIcon,
  color: "#06B6D4",
  name: "A category name",
};
