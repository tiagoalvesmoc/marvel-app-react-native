import React from "react";

import { useFonts } from "expo-font";

import { Questrial_400Regular } from "@expo-google-fonts/questrial";

import Home from "./src/pages/Home";

export default function App() {
  let [fontsLoaded] = useFonts({
    Questrial_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Home />;
}
