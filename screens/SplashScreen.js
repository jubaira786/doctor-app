import React, { useEffect } from 'react';
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';
const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('OnboardingScreen01');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigation]);


  return (
    <View style={styles.splashScreen}>
      <Image
        style={[styles.bgIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/bg.png")}
      />
      <View style={[styles.logo, styles.logoLayout]}>
        <Image
          style={[styles.frameIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/frame.png")}
        />
        <Text style={[styles.doctorHunt, styles.logoLayout]}>Doctor Hunt</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 0,
    position: "absolute",
  },
  logoLayout: {
    width: 205,
    position: "absolute",
  },
  bgIcon: {
    width: 375,
    left: 0,
    height: 812,
  },
  frameIcon: {
    left: 68,
    width: 70,
    height: 70,
    overflow: "hidden",
  },
  doctorHunt: {
    top: 81,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0,
    fontWeight: "700",
    fontFamily: FontFamily.rubikBold,
    color: "#222",
    textAlign: "center",
    height: 30,
    left: 0,
  },
  logo: {
    top: 353,
    left: 85,
    height: 105,
  },
  splashScreen: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 812,
  },
});

export default SplashScreen;
