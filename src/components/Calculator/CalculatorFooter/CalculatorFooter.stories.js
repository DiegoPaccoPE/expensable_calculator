import CalculatorFooter from "./CalculatorFooter";

export default {
  title: "Calculator Footer",
  component: CalculatorFooter,
};

const Template = (args) => <CalculatorFooter {...args}></CalculatorFooter>;
export const content = Template.bind({});

content.args = { children: "A date on string" };
