import { StyleSheet, View, Text } from "react-native";
import React from "react";

const HeadingBox = (props) => {
    return(
        <View style={styles.main}>
            <View style={styles.line}>
                <Text style={styles.textish} >{props.headline}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        transform: [{ translateY: "50%" }],
        backgroundColor: "#7E6999",
        width: 250,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    }, 
    line: {
        backgroundColor: "#7E6999",
        width: 400,
        justifyContent: "center",
        alignItems: "center",
        height: 4,
        color: 'white',
    },
    textish: {
        height: 40,
        color: "white",
        fontSize: 30,
        justifyContent: "center",
    }
  });

export default HeadingBox