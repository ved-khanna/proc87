import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import LoginScreen from "./screens/LoginScreen";
import LoadingScreen from "./screens/LoadingScreen";
import DashboardScreen from "./screens/DashboardScreen";

import * as firebase from "firebase";
import { firebaseConfig } from './Config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const SwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
});

const AppNavigator = createAppContainer(SwitchNavigator);

export default function App() {
  return <AppNavigator />;
}
