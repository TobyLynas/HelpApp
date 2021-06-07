import { StyleSheet, View, Text, Button } from "react-native";
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const base = () => {
    const navigation=useNavigation();
    return (
        <View style={styles.main}>
            <Text onPress={()=>navigation.navigate('homeRoute')} style={styles.home}>Home</Text>
            <Text onPress={()=>navigation.navigate('planRoute')} style={styles.plan}>Plan</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        backgroundColor: '#47375C',
        width: "100%",
        height: "10%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    home: {
        color: 'white',
        fontSize: 40,
    },
    plan: {
        color: "white",
        fontSize: 40,
    }
})
export default base