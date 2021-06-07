import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

class EmergencyActivePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameOne: "",
      phoneOne: "",
      nameTwo: "",
      phoneTwo: "",
      message: "",
    };
  }

  async sendSMS() {
    const response = await fetch("http://192.168.86.38:3000");
    console.log(response.body)
  }

  componentDidMount() {
    this._getData();
  }

  _getData = async () => {
    try {
      this.setState({ nameOne: await AsyncStorage.getItem("nameOne") });
      this.setState({ phoneOne: await AsyncStorage.getItem("phoneOne") });
      this.setState({ nameTwo: await AsyncStorage.getItem("nameTwo") });
      this.setState({ phoneTwo: await AsyncStorage.getItem("phoneTwo") });
      this.sendSMS();
    } catch (e) {}
  };
  render() {
    return (
      <View style={styles.page}>
        <Text>Test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "white",
    display: "flex",
  },
});

export default EmergencyActivePage;
