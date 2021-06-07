import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const EmergencyServices = () => {
  return (
    <View style={styles.component}>
      <View style={styles.contactsHeader}>
        <LinearGradient
          style={styles.grad}
          colors={["#7E6999", "#47375C"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={styles.headerText}>Call Emergency Services</Text>
        </LinearGradient>
      </View>
      <TouchableOpacity style={styles.contactsButton}>
        <View style={{ justifyContent: "center", flex: 1 }}>
          <Text style={styles.buttonText}>Toggle On / Off</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    height: "100%",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    flex: 1,
    transform: [{ translateY: "30%" }]

  },
  contactsHeader: {
    height: "25%",
    width: "80%",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    overflow: "hidden",
  },
  grad: {
    height: "100%",
    justifyContent: "center",
    flex: 1
  },
  contactsButton: {
    height: "20%",
    width: "60%",
    backgroundColor: "#47375C",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
  },
  headerText: {
    textAlign: "center",
    color: "white",
    fontSize: 28,
    fontWeight: "500",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
    fontSize: 28,
  },
});

export default EmergencyServices;
