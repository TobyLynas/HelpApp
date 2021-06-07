import React from "react";
import Base from "../components/Base.js";
import HeadingBox from "../components/HeadingBox.js";
import Contacts from "../components/Contacts.js";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import EmergencyServices from "../components/EmergencyServices.js";
import SvgComponent from "../components/Background.js";

const Plan = () => {
  return (
    <View style={styles.page}>
      <HeadingBox headline="Emergency Plan" />
      <Text style={styles.infoText}>
        What do you want us to do for you when an emergency is registered?
      </Text>
      <Contacts />
      <EmergencyServices />
      <SvgComponent />

      <Base />
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
  },

  infoText: {
    // fontFamily: "Helvetica Bold",
    marginTop: "20%",
    fontWeight: "bold",
    fontSize: 24,
    width: 350,
    textAlign: "center",
    marginBottom: "5%",
  },
});
export default Plan;
