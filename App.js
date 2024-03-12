const Stack = createNativeStackNavigator();
import * as React from "react";
import {useState, useEffect} from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen02 from "./screens/OnboardingScreen02";
import OnboardingScreen01 from "./screens/OnboardingScreen01";
import OnboardingScreen03 from "./screens/OnboardingScreen03";
import HomeScreen from "./screens/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity , StyleSheet,Dimensions} from "react-native";

const App = () => {
  const [height, setHeight] =useState('');
  const [width, setWidth] =useState('');

  useEffect(()=>{
    setHeight(Dimensions.get('window').height);
    setWidth(Dimensions.get('window').width);
  },
  []);

  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    
    <View style={{
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height
      }}>
      <NavigationContainer>
        {/* {hideSplashScreen ? ( */}
          <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingScreen02"
              component={OnboardingScreen02}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingScreen01"
              component={OnboardingScreen01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="OnboardingScreen03"
              component={OnboardingScreen03}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        {/* ) : null} */}
      </NavigationContainer>
      </View>
  );
};

export default App;
