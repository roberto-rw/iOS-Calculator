import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import RoundedButton from "../components/RoundedButton";

export default function Calculator() {
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

    return (
        <View style={styles.view} >
            <View style={styles.display}>
                    <Text style={styles.prevResult}>{prevResult}</Text>
                    <Text style={styles.currentResult}>{result}</Text>
            </View>
            <View style={styles.row}>
                <RoundedButton text="C" color="#9B9B9B" action={clean}/>
                <RoundedButton text="+/-" color="#9B9B9B" action={positiveNegative}/>
                <RoundedButton text="DEL" color="#9B9B9B" action={deleteButton}/>
                <RoundedButton text="/" action={setOperationButton}/>
            </View>
            <View style={styles.row}>
                <RoundedButton text="7" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="8" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="9" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="X" color="#FF9427" action={setOperationButton}/>
            </View>
            <View style={styles.row}>
                <RoundedButton text="4" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="5" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="6" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="-" color="#FF9427" action={setOperationButton}/>
            </View>
            <View style={styles.row}>
                <RoundedButton text="1" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="2" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="3" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="+" color="#FF9427" action={setOperationButton}/>
            </View>
            <View style={styles.row}>
                <RoundedButton text="0" color="#2D2D2D" action={buildNumber} wide/>
                <RoundedButton text="." color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="=" color="#FF9427" action={calculate}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({  
    view: {
        flex: 1,
        justifyContent: "space-between",
        marginHorizontal: 20,
    },
    prevResult: {
        fontSize: 40,
        textAlign: "right",
    },
    currentResult: {
        color: "white",
        fontSize: 60,
        textAlign: "right",
    },
    display: {
        backgroundColor: "black",
        height: '40%',
        justifyContent: "flex-end",
    },
    row:{
        flexDirection: "row",
        justifyContent: "space-between",
    }
});