import React from "react";
import { SafeAreaView, Button, Text, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to the Animal Info App!</Text>
      <Button title="Go to Cats" onPress={() => navigation.navigate("Cats")} />
      <Button title="Go to Dogs" onPress={() => navigation.navigate("Dogs")} />
      <Button title="Go to Tigers" onPress={() => navigation.navigate("Tigers")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
