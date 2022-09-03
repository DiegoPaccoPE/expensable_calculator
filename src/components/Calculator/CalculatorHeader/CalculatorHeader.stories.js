import { groceryIcon } from "../../../icons/calculatorIcons";
import CalculatorHeader from "./CalculatorHeader";

export default {
  title: "CalculatorHeader",
  component: CalculatorHeader,
};

const Template = (args) => <CalculatorHeader {...args}></CalculatorHeader>;

export const Color = Template.bind({});
Color.args = { icon: groceryIcon, color: "#06B6D4", name: "Category Name" };
