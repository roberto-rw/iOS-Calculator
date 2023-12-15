import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import RoundedButton from "../components/RoundedButton";

export default function Calculator() {
    const [result, setResult] = useState("0");
    const [prevResult, setPrevResult] = useState("0");
    const clean = () => {
        setResult("0");
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

    return (
        <View style={styles.view} >
            <View style={styles.display}>
                    <Text style={styles.prevResult}>{prevResult}</Text>
                    <Text style={styles.currentResult}>{result}</Text>
            </View>
            <View style={styles.row}>
                <RoundedButton text="C" color="#9B9B9B" action={clean}/>
                <RoundedButton text="+/-" color="#9B9B9B" action={buildNumber}/>
                <RoundedButton text="DEL" color="#9B9B9B" action={deleteButton}/>
                <RoundedButton text="/" action={buildNumber}/>
            </View>
            <View style={styles.row}>
                <RoundedButton text="7" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="8" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="9" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="X" color="#FF9427" action={buildNumber}/>
            </View>
            <View style={styles.row}>
                <RoundedButton text="4" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="5" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="6" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="-" color="#FF9427" action={buildNumber}/>
            </View>
            <View style={styles.row}>
                <RoundedButton text="1" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="2" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="3" color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="+" color="#FF9427" action={buildNumber}/>
            </View>
            <View style={styles.row}>
                <RoundedButton text="0" color="#2D2D2D" action={buildNumber} wide/>
                <RoundedButton text="." color="#2D2D2D" action={buildNumber}/>
                <RoundedButton text="=" color="#FF9427" action={buildNumber}/>
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