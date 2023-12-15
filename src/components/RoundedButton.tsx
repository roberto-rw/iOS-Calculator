import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface ButtonProps {
    text: string;
    color?: string;
    action: (characeter: string) => void;
    wide?: boolean;
}

export default function RoundedButton({text, color='#2D2D2D',wide, action}: ButtonProps) {
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={{
                ...styles.button, 
                backgroundColor: color,
                width: (wide)? 180: 80
                }}>
            <Text style={styles.text}>{text}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        borderRadius: 100,
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 25,
    }
});



