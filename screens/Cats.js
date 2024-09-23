import React from "react";
import { SafeAreaView, ScrollView, Text, Image, StyleSheet, Button } from "react-native";

export default function CatScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Cats Page</Text>
        <Image source={require("../assets/cats.jpg")} style={styles.image} />
        <Text style={styles.text}>
          Cats are small, carnivorous mammals that are often kept as pets. Known for their independence and playful behavior, they have been
          companions to humans for thousands of years. Cats are known for their agility, sharp claws, and ability to purr when content. They
          come in various breeds, each with its unique appearance and personality traits.
        </Text>
        <Text style={styles.text}>
          Whether lounging in the sun, chasing toys, or simply enjoying a good nap, cats are beloved by millions worldwide. Their sleek fur
          and graceful movements make them a joy to watch and interact with.
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
