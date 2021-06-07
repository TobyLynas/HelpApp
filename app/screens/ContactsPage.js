import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Touchable,
  SafeAreaView,
  TextInput,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useForm } from "react-hook-form";
import Base from "../components/Base.js";
import HeadingBox from "../components/HeadingBox.js";

class ContactsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "empty",
      nameOne: "",
      phoneOne: "",
      nameTwo: "",
      phoneTwo: ""
    };
  }

  _getData = async () => {
    try {
      this.setState({ nameOne: await AsyncStorage.getItem("nameOne") });
      this.setState({ phoneOne: await AsyncStorage.getItem("phoneOne")});
      this.setState({ nameTwo: await AsyncStorage.getItem("nameTwo")});
      this.setState({ phoneTwo: await AsyncStorage.getItem("phoneTwo")});
    } catch (e) {}
  };

  componentDidMount() {
    this._getData();
  }

  render() {
    return (
      <View style={styles.page}>
        <HeadingBox headline="Contacts" />
        <View style={styles.contactOne}>
          <Text>Emergency Contact 1</Text>
          <Text>Name:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="default"
            onChangeText={nameOne => this.setState({ nameOne })}
            onEndEditing={() => storeData("nameOne", this.state.nameOne)}
            value={this.state.nameOne}
          />
          <Text>Phone:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={phoneOne => this.setState({ phoneOne })}
            onEndEditing={() => storeData("phoneOne", this.state.phoneOne)}
            value={this.state.phoneOne}
          />
        </View>
        <View style={styles.contactTwo}>
          <Text>Emergency Contact 2</Text>
          <Text>Name:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="default"
            onChangeText={nameTwo => this.setState({ nameTwo })}
            onEndEditing={() => storeData("nameTwo", this.state.nameTwo)}
            value={this.state.nameTwo}
          />
          <Text>Phone:</Text>
          <TextInput
            style={styles.textInput}
            keyboardType="numeric"
            onChangeText={phoneTwo => this.setState({ phoneTwo })}
            onEndEditing={() => storeData("phoneTwo", this.state.phoneTwo)}
            value={this.state.phoneTwo}
          />
        </View>
        <Base />
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
  contactOne: {
    backgroundColor: "purple",
    height: "20%",
    width: "90%"
  },
  contactTwo: {
    backgroundColor: "purple",
    height: "20%",
    width: "90%"
  }
});

const storeData = async (id, value) => {
  console.log(`StoreData recives ${value} at ${id}`);
  try {
    await AsyncStorage.setItem(id, value);
    console.log(`StoreData stores ${value} at ${id}`);
    return value;
  } catch (error) {
    console.log(error);
  }
};

export default ContactsPage;
