import { View, Text, StyleSheet } from "react-native";
import Calculator from "./src/screens/Calculator";

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black"
  }
});