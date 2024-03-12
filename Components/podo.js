import * as React from "react";
import {useState, useEffect} from 'react';
import { Image } from "expo-image";
import { StyleSheet, View, Text, Dimensions} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Podo = (props)=>{
    return(
        <View style={styles.jubair}>
          <View style={styles.childShadowBox} />
          <View style={[styles.text16, styles.text16Layout]}>
            <View style={[styles.groupParent, styles.text16Layout]}>
              <View style={styles.drBlessingParent}>
                <Text style={[styles.featureDoctor1, styles.drCrick1Typo]}>
                  Dr. {props.name}
                </Text>
                <Text style={[styles.dentistSpecialist, styles.specialistTypo]}>
                  {props.spec}
                </Text>
              </View>
              <Image
                style={[styles.starIcon, styles.starIconPosition]}
                contentFit="cover"
                source={props.src1}
              />
            </View>
          </View>
          <View style={styles.imagePosition}>
            <Image
              style={[styles.imageChild, styles.imagePosition]}
              contentFit="cover"
              source={require("../assets/rectangle-508.png")}
            />
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
  jubair:{
    bottom: 30,
  },
    crickLayout: {
      height: 130,
      width: 96,
      top: 43,
      position: "absolute",
    },
    parentPosition: {
      height: 28,
      top: 90,
      position: "absolute",
    },
    drCrick1Typo: {
      color: Color.colorDarkslategray,
      textAlign: "left",
      fontFamily: FontFamily.rubikMedium,
      fontWeight: "500",
      letterSpacing: 0,
      top: 0,
      position: "absolute",
    },
    hoursTypo: {
      fontSize: FontSize.size_4xs,
      top: 17,
      textAlign: "left",
      letterSpacing: 0,
      position: "absolute",
    },
    hours1Typo: {
      fontFamily: FontFamily.rubikLight,
      fontWeight: "300",
    },
    groupPosition: {
      height: 9,
      left: 10,
      top: 9,
      position: "absolute",
    },
    groupIconLayout: {
      maxHeight: "100%",
      overflow: "hidden",
      maxWidth: "100%",
      position: "absolute",
    },
    textTypo: {
      left: 63,
      fontSize: FontSize.size_3xs,
      height: 9,
      textAlign: "left",
      fontFamily: FontFamily.rubikMedium,
      fontWeight: "500",
      letterSpacing: 0,
      top: 0,
      position: "absolute",
    },
    vectorIconPosition1: {
      top: "4.47%",
      height: "95.53%",
      maxHeight: "100%",
      overflow: "hidden",
      maxWidth: "100%",
      bottom: "0%",
      position: "absolute",
    },
    vectorIconPosition: {
      bottom: "5.03%",
      height: "94.97%",
      left: "0%",
      maxHeight: "100%",
      overflow: "hidden",
      maxWidth: "100%",
      top: "0%",
      position: "absolute",
    },
    group4Layout: {
      width: 336,
      position: "absolute",
    },
    drBlessingLayout: {
      height: 264,
      width: 190,
      top: 43,
      position: "absolute",
    },
    text16Layout: {
      height: 55,
      width: 99,
      position: "absolute",
    },
    specialistTypo: {
      color: Color.colorSlategray_100,
      fontFamily: FontFamily.rubikLight,
      fontWeight: "300",
      textAlign: "left",
      letterSpacing: 0,
      fontSize: FontSize.size_xs,
      position: "absolute",
    },
    starIconPosition: {
      top: "78.18%",
      height: "21.82%",
      maxHeight: "100%",
      overflow: "hidden",
      maxWidth: "100%",
      bottom: "0%",
      position: "absolute",
    },
    imagePosition: {
      height: 180,
      width: 190,
      left: 0,
      top: 0,
      position: "absolute",
    },
    profilePosition: {
      height: '40%',
      width: '100%',
      left: 0,
      top: 0,
      position: "absolute",
    },
    text18Position: {
      width: 205,
      left: 0,
      position: "absolute",
    },
    timeClr: {
      color: Color.colorWhite,
      letterSpacing: 0,
    },
    searchLayout: {
      width: 335,
      height: 54,
      position: "absolute",
    },
    seeAllFlexBox: {
      letterSpacing: 0,
      textAlign: "left",
      position: "absolute",
    },
    timePosition: {
      marginTop: -9,
      height: 18,
      top: "50%",
      left: 0,
      position: "absolute",
    },
    borderPosition: {
      height: 11,
      top: "50%",
      position: "absolute",
    },
    capIconPosition: {
      top: "50%",
      position: "absolute",
    },
    bgIcon: {
      top: -269,
      left: -375,
      width: 1030,
      height: 1534,
      position: "absolute",
    },
    menuIcon: {
      top: 684,
      left: -180,
      width: 735,
      height: 434,
      position: "absolute",
    },
    crickChildShadowBox: {
      shadowOpacity: 1,
      elevation: 20,
      shadowRadius: 20,
      shadowOffset: {
        width: 0,
        height: -1,
      },
      shadowColor: "rgba(0, 0, 0, 0.06)",
      borderRadius: Border.br_7xs,
      left: 0,
      top: 0,
      height: 130,
      width: 96,
      position: "absolute",
      backgroundColor: Color.colorWhite,
    },
    drCrick1: {
      textAlign: "left",
      fontSize: FontSize.size_xs,
      left: 5,
    },
    text: {
      fontFamily: FontFamily.rubikMedium,
      fontWeight: "500",
    },
    hours1: {
      color: Color.color,
    },
    hours: {
      left: 0,
    },
    drCrickParent: {
      width: 57,
      left: 20,
    },
    imageIcon: {
      top: 26,
      left: 21,
      height: 54,
      width: 54,
      position: "absolute",
    },
    text2: {
      color: Color.colorBlack,
    },
    text3: {
      color: Color.color,
    },
    text1: {
      left: 62,
      width: 19,
      fontSize: FontSize.size_3xs,
      height: 9,
      textAlign: "left",
      fontFamily: FontFamily.rubikMedium,
      fontWeight: "500",
      letterSpacing: 0,
      top: 0,
      position: "absolute",
    },
    vectorIcon: {
      height: "100%",
      width: "11.11%",
      right: "30.86%",
      left: "58.02%",
      bottom: "0%",
      top: "0%",
      overflow: "hidden",
      maxWidth: "100%",
    },
    vectorIcon1: {
      height: "88.89%",
      width: "12.35%",
      right: "87.65%",
      bottom: "11.11%",
      left: "0%",
      maxHeight: "100%",
      overflow: "hidden",
      maxWidth: "100%",
      top: "0%",
      position: "absolute",
    },
    group: {
      width: 81,
    },
    drCrick: {
      left: 325,
    },
    drLachinet1: {
      textAlign: "left",
      fontSize: FontSize.size_xs,
      left: 0,
    },
    hours2: {
      left: 5,
    },
    drLachinetParent: {
      left: 15,
      width: 67,
    },
    text5: {
      width: 16,
    },
    vectorIcon2: {
      width: "11.39%",
      right: "27.85%",
      left: "60.76%",
    },
    vectorIcon3: {
      width: "12.66%",
      right: "87.34%",
    },
    group1: {
      width: 79,
    },
    drLachinet: {
      left: 217,
    },
    drStrain1: {
      left: 2,
      textAlign: "left",
      fontSize: FontSize.size_xs,
    },
    drStrain: {
      left: 109,
    },
    text13: {
      width: 14,
    },
    vectorIcon6: {
      width: "11.69%",
      right: "25.97%",
      left: "62.34%",
    },
    vectorIcon7: {
      width: "12.99%",
      right: "87.01%",
    },
    group3: {
      width: 77,
    },
    drCrick2: {
      left: 1,
    },
    featureDoctor1: {
      fontSize: FontSize.size_lg,
      textAlign: "left",
      left: 0,
    },
    seeAll: {
      color: Color.color,
      textAlign: "left",
      letterSpacing: 0,
      position: "absolute",
      fontSize: FontSize.size_xs,
      left: 0,
      top: 0,
    },
    groupIcon: {
      height: "44.88%",
      width: "8.7%",
      top: "28.57%",
      right: "0%",
      bottom: "26.55%",
      left: "91.3%",
    },
    seeAllParent: {
      top: 5,
      left: 297,
      width: 39,
      height: 14,
      position: "absolute",
    },
    headline: {
      height: 21,
      left: 0,
      top: 0,
    },
    featureDoctor: {
      top: 667,
      width: 421,
      height: 173,
      left: 19,
      position: "absolute",
    },
    childShadowBox: {
      elevation: 10,
      shadowRadius: 40,
      borderRadius: Border.br_xs,
      shadowColor: "rgba(0, 0, 0, 0.08)",
      height: 264,
      width: 190,
      shadowOpacity: 1,
      shadowOffset: {
        width: 0,
        height: -1,
      },
      left: 0,
      top: 0,
      position: "absolute",
      backgroundColor: Color.colorWhite,
    },
    dentistSpecialist: {
      top: 22,
      left: 5,
    },
    drBlessingParent: {
      height: 36,
      width: 99,
      left: 0,
      top: 0,
      position: "absolute",
    },
    starIcon: {
      width: "80.81%",
      right: "9.09%",
      left: "10.1%",
    },
    groupParent: {
      left: 0,
      top: 0,
    },
    text16: {
      top: 194,
      left: 46,
    },
    imageChild: {
      borderTopLeftRadius: Border.br_xs,
      borderTopRightRadius: Border.br_xs,
      borderBottomRightRadius: Border.br_11xs,
      borderBottomLeftRadius: Border.br_11xs,
    },
    drBlessing: {
      left: 206,
    },
    starIcon1: {
      width: "59.26%",
      right: "20.74%",
      left: "20%",
    },
    medicineSpecialist: {
      top: 23,
      left: 18,
    },
    drFillerupGrabParent: {
      width: 135,
      height: 37,
      left: 0,
      top: 0,
      position: "absolute",
    },
    text17: {
      height: "20.83%",
      width: "71.05%",
      top: "73.48%",
      right: "14.21%",
      bottom: "5.68%",
      left: "14.74%",
      position: "absolute",
    },
    drFillerupGrab: {
      left: 1,
    },
    popularDoctor: {
      top: 329,
      width: 396,
      height: 307,
      left: 19,
      position: "absolute",
    },
    tabIcon: {
      top: 209,
      width: 389,
      height: 119,
      left: 20,
      position: "absolute",
    },
    profileChild: {
      borderBottomRightRadius: Border.br_xl,
      borderBottomLeftRadius: Border.br_xl,
      backgroundColor: Color.linear,
    },
    imageIcon4: {
      left: 276,
      width: 60,
      height: 60,
      top: 0,
      position: "absolute",
    },
    hiHandwerker: {
      fontSize: 20,
      color: "#fafafa",
      width: 136,
      height: 22,
      textAlign: "left",
      letterSpacing: 0,
      position: "absolute",
      left: 0,
      top: 0,
    },
    findYourDoctor: {
      top: '60%',
      fontSize: FontSize.size_6xl,
      fontWeight: "700",
      fontFamily: FontFamily.rubikBold,
      // height: '100%',
      width: 205,
      left: 0,
      position: "absolute",
      textAlign: "left",
    },
    text18: {
      top: 11,
      height: 52,
    },
    group4: {
      top: 36,
      height: 63,
      left: 19,
    },
    searchChild: {
      shadowColor: "rgba(0, 0, 0, 0.08)",
      width: 335,
      shadowOpacity: 1,
      elevation: 20,
      shadowRadius: 20,
      shadowOffset: {
        width: 0,
        height: -1,
      },
      borderRadius: Border.br_7xs,
      left: 0,
      top: 0,
      backgroundColor: Color.colorWhite,
    },
    groupIcon2: {
      height: "20.37%",
      width: "3.28%",
      top: "40.74%",
      right: "5.97%",
      bottom: "38.89%",
      left: "90.75%",
    },
    search1: {
      top: 18,
      left: 45,
      fontSize: 15,
      fontFamily: FontFamily.rubikRegular,
      color: Color.color,
      textAlign: "left",
    },
    searchItem: {
      height: "24.07%",
      width: "3.88%",
      top: "38.89%",
      right: "90.15%",
      bottom: "37.04%",
      left: "5.97%",
    },
    search: {
      top: 126,
      left: 20,
    },
    time: {
      fontSize: FontSize.size_sm,
      textAlign: "center",
      color: Color.colorWhite,
      letterSpacing: 0,
      marginTop: -9,
      width: 54,
      fontFamily: FontFamily.rubikMedium,
      fontWeight: "500",
    },
    border: {
      marginTop: -5.36,
      right: 2,
      borderRadius: 3,
      borderStyle: "solid",
      borderColor: Color.colorWhite,
      borderWidth: 1,
      width: 21,
    },
    capIcon: {
      marginTop: -1.89,
      width: 1,
      height: 4,
      right: 0,
    },
    capacity: {
      marginTop: -3.47,
      right: 4,
      borderRadius: 1,
      width: 17,
      height: 7,
      backgroundColor: Color.colorWhite,
    },
    battery: {
      marginTop: -6.04,
      width: 23,
      right: 0,
    },
    wifiIcon: {
      height: 10,
      width: 14,
    },
    cellularConnectionIcon: {
      height: 10,
      width: 16,
    },
    timeParent: {
      width: 349,
      marginTop: -9,
    },
    statsBer: {
      marginTop: -576,
      left: 6,
      height: 18,
      width: 349,
      top: "50%",
      position: "absolute",
    },
    homeScreen: {
      flex: 1,
      width: "100%",
      height: 1174,
      backgroundColor: Color.colorWhite,
    },
  });
  
  export default Podo;