import styled from "@emotion/styled";
import React, { useState } from "react";
import CalculatorButtons from "./CalculatorButtons/CalculatorButtons";
import CalculatorDisplay from "./CalculatorDisplay/CalculatorDisplay";
import CalculatorFooter from "./CalculatorFooter/CalculatorFooter";
import CalculatorHeader from "./CalculatorHeader/CalculatorHeader";

const CalculatorContainer = styled.div`
  width: 256px;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
`;

function doCalculation(prevNumber, operant, currentNumber) {
  const numberOne = Number(prevNumber);
  const numberTwo = Number(currentNumber);
  let result;
  switch (operant) {
    case "+":
      return String(numberOne + numberTwo);
    case "-":
      return String(numberOne - numberTwo);
    case "×":
      result = numberOne * numberTwo;
      if (Number.isInteger(result)) {
        return String(result);
      } else {
        return String(result.toFixed(2));
      }

    case "÷":
      result = numberOne / numberTwo;
      if (Number.isInteger(result)) {
        return String(result);
      } else {
        return String(result.toFixed(2));
      }
    default:
      break;
  }
}

function Calculator({ icon, color, name }) {
  const [prevNumber, setPrevNumber] = useState(null);
  const [operant, setOperant] = useState(null);
  const [currentNumber, setCurrentNumber] = useState("0");
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  function handleKeyboardPressed(value) {
    const operants = ["+", "-", "×", "÷"];
    const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    if (value === "c") {
      setCurrentNumber("0");
      setPrevNumber(null);
      setOperant(null);
      return;
    }
    if (value === "0" && currentNumber === "0") {
      return;
    }
    if (numbers.includes(value) && currentNumber !== null) {
      if (currentNumber === "0") {
        setCurrentNumber(value);
      } else {
        setCurrentNumber(currentNumber + value);
      }
      return;
    }
    if (currentNumber === null && numbers.includes(value)) {
      if (value === "0") {
        setCurrentNumber("0");
      } else {
        setCurrentNumber(value);
      }
      return;
    }

    if (value === "." && !currentNumber.includes(".")) {
      setCurrentNumber(currentNumber + value);
      return;
    }
    if (operants.includes(value) && operant === null) {
      setPrevNumber(currentNumber);
      setOperant(value);
      setCurrentNumber(null);
      return;
    }
    if (operants.includes(value) && operant !== null) {
      setOperant(value);
      return;
    }

    if (prevNumber && operant && value === "eq") {
      if (currentNumber === null) {
        setCurrentNumber(doCalculation(prevNumber, operant, prevNumber));
        setPrevNumber(null);
        setOperant(null);
        return;
      }
      setCurrentNumber(doCalculation(prevNumber, operant, currentNumber));
      setPrevNumber(null);
      setOperant(null);
      return;
    }

    if (
      value === "del" &&
      currentNumber === null &&
      prevNumber !== null &&
      operant !== null
    ) {
      setCurrentNumber(prevNumber);
      setOperant(null);
      setPrevNumber(null);
      return;
    }

    if (
      value === "del" &&
      currentNumber.length === 1 &&
      prevNumber !== null &&
      operant !== null
    ) {
      setCurrentNumber(null);
      return;
    }

    if (
      value === "del" &&
      currentNumber.length === 1 &&
      prevNumber === null &&
      operant === null
    ) {
      setCurrentNumber("0");
      return;
    }

    if (value === "del" && currentNumber !== null) {
      setCurrentNumber(currentNumber.slice(0, -1));
      return;
    }
  }
  return (
    <CalculatorContainer>
      <CalculatorHeader icon={icon} color={color} name={name} />
      <CalculatorDisplay>
        {(prevNumber ? prevNumber : "") +
          (operant ? operant : "") +
          (currentNumber ? currentNumber : "")}
      </CalculatorDisplay>
      <CalculatorButtons
        equalIcon={!!prevNumber && !!operant}
        color={color}
        onKeyBoardPressed={handleKeyboardPressed}
      ></CalculatorButtons>
      <CalculatorFooter>
        {new Date().toLocaleString("en-us", options)}
      </CalculatorFooter>
    </CalculatorContainer>
  );
}

export default Calculator;
