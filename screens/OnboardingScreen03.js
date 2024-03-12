import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen03 = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.onboardingScreen03}>
      <Image
        style={styles.bgIcon}
        contentFit="cover"
        source={require("../assets/ellipse-143.png")}
      />
      <View style={styles.text}>
        <Text style={styles.easyAppointments}>Easy Appointments</Text>
        <Text style={[styles.contraryToPopular, styles.skipTypo]}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of it over 2000 years old.
        </Text>
      </View>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image2.png")}
      />
      <TouchableOpacity onPress={handleGetStarted}>
      <View style={styles.skipParent}>
        <View style={[styles.button, styles.buttonPosition]}>
          <LinearGradient
            style={[styles.buttonChild, styles.buttonPosition]}
            locations={[0, 1]}
            colors={["#d5c3f8", "#b288f8"]}
          />
          <Text style={[styles.getStarted, styles.getStartedTypo]}>
            Finish
          </Text>
        </View>
      </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  skipTypo: {
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
  },
  buttonPosition: {
    height: 54,
    width: 295,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bgIcon: {
    top: 508,
    left: 91,
    width: 284,
    height: 304,
    position: "absolute",
  },
  easyAppointments: {
    left: 20,
    fontSize: FontSize.size_9xl,
    color: Color.colorDarkslategray,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    top: 0,
    position: "absolute",
  },
  contraryToPopular: {
    top: 42,
    color: Color.colorSlategray_200,
    height: 70,
    left: 0,
    width: 300,
  },
  text: {
    top: 514,
    left: 39,
    height: 112,
    width: 300,
    position: "absolute",
  },
  imageIcon: {
    width: 460,
    height: 447,
    left: 0,
    top: 0,
    position: "absolute",
  },
  skip: {
    top: 68,
    left: 135,
    color: Color.color,
  },
  buttonChild: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.linear,
  },
  getStarted: {
    top: 19,
    left: 97,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    textAlign: "center",
    width: 101,
    height: 17,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    position: "absolute",
  },
  skipParent: {
    top: 677,
    left: 40,
    height: 91,
    width: 295,
    position: "absolute",
  },
  onboardingScreen03: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OnboardingScreen03;
