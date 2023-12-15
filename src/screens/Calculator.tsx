import React, {useState} from "react";
import { Text, View, StyleSheet } from "react-native";
import RoundedButton from "../components/RoundedButton";

export default function Calculator() {
    const [result, setResult] = useState(1);
    const clean = () => {
        setResult(0);
    }
    return (
        <View style={styles.view} >
            <View style={styles.display}>
                    <Text style={styles.prevResult}>1500</Text>
                    <Text style={styles.currentResult}>{result}</Text>
            </View>
            <View style={styles.row}>
                <RoundedButton text="C" color="#9B9B9B"/>
                <RoundedButton text="+/-" color="#9B9B9B" />
                <RoundedButton text="del" color="#9B9B9B" />
                <RoundedButton text="/" />
            </View>
            <View style={styles.row}>
                <RoundedButton text="7" color="#2D2D2D" />
                <RoundedButton text="8" color="#2D2D2D" />
                <RoundedButton text="9" color="#2D2D2D" />
                <RoundedButton text="X" color="#FF9427" />
            </View>
            <View style={styles.row}>
                <RoundedButton text="4" color="#2D2D2D" />
                <RoundedButton text="5" color="#2D2D2D" />
                <RoundedButton text="6" color="#2D2D2D" />
                <RoundedButton text="-" color="#FF9427" />
            </View>
            <View style={styles.row}>
                <RoundedButton text="1" color="#2D2D2D" />
                <RoundedButton text="2" color="#2D2D2D" />
                <RoundedButton text="3" color="#2D2D2D" />
                <RoundedButton text="+" color="#FF9427" />
            </View>
            <View style={styles.row}>
                <RoundedButton text="0" color="#2D2D2D"  wide/>
                <RoundedButton text="." color="#2D2D2D" />
                <RoundedButton text="=" color="#FF9427" />
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