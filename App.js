// import { StyleSheet } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import HomeScreen from "./screens/Home";
// import CatScreen from "./screens/Cats";
// import DogScreen from "./screens/Dogs";
// import TigerScreen from "./screens/Tigers"; // Import TigerScreen
// import "react-native-gesture-handler"; // Make sure you have this for gesture handler

// // Set up the Stack Navigator
// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           {/* Home Screen */}
//           <Stack.Screen
//             name="Home"
//             component={HomeScreen}
//             options={{ title: "Home Screen" }} // Optional header title
//           />

//           {/* Cats Screen */}
//           <Stack.Screen
//             name="Cats"
//             component={CatScreen}
//             options={{ title: "Cats Information" }} // Optional header title
//           />

//           {/* Dogs Screen */}
//           <Stack.Screen
//             name="Dogs"
//             component={DogScreen}
//             options={{ title: "Dogs Information" }} // Optional header title
//           />

//           {/* Tigers Screen */}
//           <Stack.Screen
//             name="Tigers"
//             component={TigerScreen}
//             options={{ title: "Tigers Information" }} // Optional header title
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

// // Styles (if needed in App.js)
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/Home";
import CatScreen from "./screens/Cats";
import DogScreen from "./screens/Dogs";
import TigerScreen from "./screens/Tigers";
import "react-native-gesture-handler"; // For gesture handling
import { StyleSheet } from "react-native"; // IMPORT StyleSheet here

// Set up the Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home Screen" }} />
          <Stack.Screen name="Cats" component={CatScreen} options={{ title: "Cats Information" }} />
          <Stack.Screen name="Dogs" component={DogScreen} options={{ title: "Dogs Information" }} />
          <Stack.Screen name="Tigers" component={TigerScreen} options={{ title: "Tigers Information" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
