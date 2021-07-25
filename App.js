import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IntroScreen from "./src/screens/IntroScreen";
import HomeScreen from "./src/screens/HomeScreen";
import imgIntro1 from "./assets/img/intro/img_intro_1.png";
import imgIntro2 from "./assets/img/intro/img_intro_2.png";
import LoginScreen from "./src/screens/LoginScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="intro1" headerMode="none">
        <Stack.Screen name="intro1">
          {(props) => (
            <IntroScreen
              {...props}
              extraData={{
                img: imgIntro1,
                title: "Find your Comfort\nFood here",
                nextScreen: "intro2",
                description:
                  "Here You Can find a chef or dish for every\ntaste and color. Enjoy!",
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="intro2">
          {(props) => (
            <IntroScreen
              {...props}
              extraData={{
                img: imgIntro2,
                title: "Food Ninja is Where Your\nComfort Food Lives",
                nextScreen: "login",
                description:
                  "Enjoy a fast and smooth food delivery at\nyour doorstep",
              }}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
