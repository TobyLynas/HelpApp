import { Component } from "react";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: null,
      words: null,
    };
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };
    this.success = this.success.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      this.success,
      this.error,
      this.options
    );
  }

  async success(pos) {
    let crd = pos.coords;
    console.log(crd)
    try {
      let response = await fetch(
        `https://api.what3words.com/v3/convert-to-3wa?coordinates=${crd.latitude}%2C${crd.longitude}&key=86C98G6T`,
        {
          method: "GET",
          body: JSON.stringify(),
        }
      );
      let json = await response.json();
      let wordsFinal = json.words;
      console.log(wordsFinal);
      this.setState({ words: wordsFinal });
    } catch (error) {
      console.log(error);
    }
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  render() {
    return (
      <View style={styles.component}>
        {this.state.words === null ? <Text style={styles.text}>Awaiting Location</Text> : <Text style={styles.text}>{this.state.words}</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  component: {
    height: "12%",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 34,
    fontWeight: "600",
    fontFamily: "Roboto, sans-Serif",
  },
});
export default Location;
