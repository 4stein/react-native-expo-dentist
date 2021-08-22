import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppNavigation } from "./src/navigation/AppNavigation";

const App = () => {
  return (
    <>
      <AppNavigation/>
      <StatusBar style="auto" />
    </>
  );
}

export default App;
