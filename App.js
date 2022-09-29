import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function userNumberHandler(userEnteredNumber) {
    setUserNumber(userEnteredNumber);
  }

  let screen = <StartGameScreen userNumberInput={userNumberHandler} />;

  if (userNumber != null) {
    screen = <GameScreen />;
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.container}>
      <ImageBackground
        imageStyle={{ opacity: 0.15 }}
        style={styles.container}
        source={require("./assets/images/background.png")}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
