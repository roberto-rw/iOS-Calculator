import { useState } from "react";

export const useCalculator = () => {
    const [result, setResult] = useState("0");
    const [prevResult, setPrevResult] = useState("0");
    const [operation, setOperation] = useState("");

    const clean = () => {
        setResult("0");
        setPrevResult("");
    }
    const buildNumber = (number: string) => {
        if(result === "0" && number !== "."){
            setResult(number);
            return;
        }
        if(result.includes(".") && number === "."){
            return;
        }
        setResult(result + number);
    }

    const deleteButton = () => {
        if(result.length === 1){
            setResult("0");
            return;
        }
        if(result.length === 2 && result.includes("-")){
            setResult("0");
            return;
        }
        setResult(result.slice(0, -1));
    }
    const setOperationButton = (operation: string) => {
        if(result.endsWith(".")){
            setPrevResult(result.slice(0, -1));
        }else{
            setPrevResult(result);
        }
        setResult("0");
        setOperation(operation);
    }

    const positiveNegative = () => {
        if(result.includes("-")){
            setResult(result.replace("-", ""));
        }else{
            setResult("-" + result);
        }
    } 

    const calculate = () => {
        const num1 = Number(result);
        const num2 = Number(prevResult);
        switch(operation){
            case "+":
                setResult((num1 + num2).toString());
                break;
            case "-":
                setResult((num2 - num1).toString());
                break;
            case "X":
                setResult((num1 * num2).toString());
                break;
            case "/":
                setResult((num2 / num1).toString());
                break;
        }
        setPrevResult("");
    }

    return{
        clean,
        buildNumber,
        deleteButton,
        setOperationButton,
        positiveNegative,
        calculate,
        result,
        prevResult
    }
}