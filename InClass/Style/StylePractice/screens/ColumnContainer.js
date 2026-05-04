import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function ColumnContainers() {
  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whiteSmoke",
    justifyContent: "center",
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  box1: {
    flex: 1,
    backgroundColor: "#36803d",
  },
  box2: {
    flex: 1,
    backgroundColor: "#1c1a7a",
  },
  box3: {
    flex: 1,
    backgroundColor: "#814747",
  },
});
