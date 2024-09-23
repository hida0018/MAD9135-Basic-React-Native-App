import React from "react";
import { SafeAreaView, ScrollView, Text, Image, StyleSheet, Button } from "react-native";

export default function TigerScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Tigers Page</Text>
        <Image source={require("../assets/tiger.jpg")} style={styles.image} />
        <Text style={styles.text}>
          Tigers are the largest wild cats in the world. Known for their striking orange coats with black stripes, they are a symbol of
          power and grace. Tigers are solitary animals, and they are excellent hunters, often stalking their prey before attacking with
          incredible strength and speed.
        </Text>
        <Text style={styles.text}>
          Despite their beauty and strength, tigers are an endangered species, with only a few thousand remaining in the wild. Conservation
          efforts are underway to protect these majestic creatures and ensure their survival for future generations.
        </Text>
        <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    margin: 20,
    fontFamily: "serif",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    fontFamily: "serif",
  },
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
});
