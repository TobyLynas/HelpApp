import HeadingBox from "../components/HeadingBox.js";
import MainButton from "../components/MainButton";
import Base from "../components/Base.js"
import Location from '../components/Location.js'
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SvgComponent from "../components/Background.js";

const Home = () => {
  return (
    <View style={styles.page}>
      <HeadingBox headline="Location" />
      <Location />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <MainButton />
        <Text style={styles.infoText}>
          Press and hold to register an emergency
        </Text>
      </View>
      <SvgComponent />
      <Base styles={styles.base} />
    </View>

  );
};
const styles = StyleSheet.create({
    page: {
      height: "100%",
      width: "100%",
      alignItems: "center",
      flex: 1,
      backgroundColor: "white",
      display: "flex",
    },
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    infoText: {
      marginTop: 30,
      fontWeight: "bold",
      fontSize: 24,
      width: 270,
      textAlign: "center"
    },
  });
  
export default Home