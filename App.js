import React from "react";
import MainNavigator from "./src/navigation/MainNavigator";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FlashMessage from 'react-native-flash-message';

export default function App() {
  return (
    <SafeAreaProvider>
      <MainNavigator />
      <StatusBar style={'auto'} />
      <FlashMessage position={'top'} />
    </SafeAreaProvider>
  )
}
