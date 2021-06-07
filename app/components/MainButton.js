import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import React from "react";

const MainButton = () => {
  let navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonish}
      title="Help Me!"
      onPress={()=>navigation.navigate('emergencyActiveRoute')}
    >
      <Text style={{ fontSize: 100, color: "white" }}>HELP</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    buttonish: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7E6999",
        height: 300,
        width: 300,
        borderRadius: 500,
        shadowColor: "#b39bcf",
        shadowOpacity: 1,
        shadowRadius: 100,
        elevation: 2,
      },
})
export default MainButton