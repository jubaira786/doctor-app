import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native';

const OnboardingScreen02 = () => {
  const navigation = useNavigation();

  const handleSkip = () => {
    navigation.navigate('HomeScreen');
  };

  const handleGetStarted = () => {
    navigation.navigate('OnboardingScreen03');
  };

  return (
    <View style={styles.onboardingScreen02}>
      <Image
        style={styles.onboardingScreen02Child}
        contentFit="cover"
        source={require("../assets/ellipse-143.png")}
      />
      <View style={styles.skipParent}>
      <TouchableOpacity onPress={handleSkip}>
        <Text style={[styles.skip, styles.skipFlexBox]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGetStarted}>
        <View style={[styles.button, styles.buttonPosition]}>
          <LinearGradient
            style={[styles.buttonChild, styles.buttonPosition]}
            locations={[0, 1]}
            colors={["#d5c3f8", "#b288f8"]}
          />
          <Text style={[styles.getStarted, styles.getStartedTypo]}>
            Next
          </Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style={[styles.text, styles.textLayout]}>
        <Text style={[styles.chooseBestDoctors, styles.getStartedTypo]}>
          Choose Best Doctors
        </Text>
        <Text style={[styles.contraryToPopular, styles.textLayout]}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of it over 2000 years old.
        </Text>
      </View>
      <Image
        style={styles.imageIcon}
        contentFit="cover"
        source={require("../assets/image.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  skipFlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  buttonPosition: {
    height: 54,
    left: 0,
    top: 0,
    width: 295,
    position: "absolute",
  },
  getStartedTypo: {
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
    position: "absolute",
  },
  textLayout: {
    width: 304,
    position: "absolute",
  },
  onboardingScreen02Child: {
    top: 520,
    left: 79,
    width: 296,
    height: 292,
    position: "absolute",
  },
  skip: {
    top: 68,
    left: 135,
    color: Color.color,
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 23,
    fontSize: FontSize.size_sm,
    textAlign: "center",
    letterSpacing: 0,
    position: "absolute",
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
  },
  skipParent: {
    top: 678,
    left: 40,
    height: 91,
    width: 295,
    position: "absolute",
  },
  chooseBestDoctors: {
    left: 10,
    fontSize: FontSize.size_9xl,
    color: Color.colorDarkslategray,
    top: 0,
    textAlign: "center",
    letterSpacing: 0,
    fontFamily: FontFamily.rubikMedium,
    fontWeight: "500",
  },
  contraryToPopular: {
    top: 45,
    color: Color.colorSlategray_200,
    height: 70,
    left: 0,
    width: 304,
    textAlign: "center",
    fontFamily: FontFamily.rubikRegular,
    lineHeight: 23,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  text: {
    top: 511,
    left: 36,
    height: 115,
  },
  imageIcon: {
    left: 20,
    width: 497,
    height: 447,
    top: 0,
    position: "absolute",
  },
  onboardingScreen02: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default OnboardingScreen02;
