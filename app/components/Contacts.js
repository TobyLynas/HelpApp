import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from '@react-navigation/native';

const Contacts = () => {
  let navigation = useNavigation();
  return (
    <View style={styles.component}>
      <View style={styles.contactsHeader}>
        <LinearGradient
          style={styles.grad}
          colors={["#47375C", "#7E6999"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
        >
          <Text style={styles.headerText}>Text Emergency Contacts</Text>
        </LinearGradient>
      </View>
      <TouchableOpacity
        style={styles.contactsButton}
        onPress={() => navigation.navigate("contactsRoute")}
      >
        <View style={{ justifyContent: "center", flex: 1 }}>
          <Text style={styles.buttonText}>Edit Contacts</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  component: {
    width: "100%",
    flex: 1,
  },
  contactsHeader: {
    height: "25%",
    width: "90%",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    overflow: "hidden",
  },
  grad: {
    height: "100%",
    justifyContent: "center",
  },
  contactsButton: {
    height: "20%",
    width: "60%",
    backgroundColor: "#47375C",
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
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

export default Contacts;
