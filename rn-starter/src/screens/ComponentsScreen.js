import React from "react";
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {

    const nameToShow = "Denys"

    const title = () => {
        return <Text style={styles.titleStyle}>Getting started with react native!</Text>
    }

    const subtitle = (personName) => {
        return <Text style= {styles.subtitleStyle}>My name is {personName}</Text>
    }

    return <View>
        {title()}
        {subtitle(nameToShow)}
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 45
    },
    subtitleStyle: {
        fontSize: 20
    }
})

export default ComponentsScreen