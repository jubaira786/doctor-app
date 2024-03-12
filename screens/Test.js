 import { StatusBar } from "expo-status-bar";
 import React from "react";
 import { StyleSheet, Text, View, Pressable } from "react-native";
 import { Image } from "expo-image";
 var ih=26;
 var iw=26;

 export default function Test(){
    return (
        <View style={styles.NavCon}>
            <View style={styles.NavBar}>
                <Pressable android_ripple={{borderless:true, radius: 50}}>
                    <Image  source={require("../assets/nav1.png")}/>

                </Pressable>
            </View>
        </View>
    );
 }

 const styles=StyleSheet.create({
    NavCon:{
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
    },
    NavBar:{
        flexDirection: 'row',
        backgroundColor: '#eee',
        width: '90%',
        justifyContent: 'space-evenly',
        // borderRadius: '40',
    },
    ib:{
        padding: 34,
    }
 });