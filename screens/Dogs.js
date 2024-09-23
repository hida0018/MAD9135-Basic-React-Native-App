import React from "react";
import { SafeAreaView, ScrollView, Text, Image, StyleSheet, Button } from "react-native";

export default function DogScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Dogs Page</Text>
        <Image source={require("../assets/dogs.jpg")} style={styles.image} />
        <Text style={styles.text}>
          Dogs are loyal, friendly companions that have been with humans for thousands of years. Known for their incredible loyalty and
          companionship, they come in various breeds with unique characteristics.
        </Text>
        <Text style={styles.text}>
          Whether serving as guard dogs, guide dogs, or playful pets, dogs hold a special place in our lives with their unmatched loyalty
          and affection.
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
