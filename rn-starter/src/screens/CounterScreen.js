import React, { useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

function CounterScreen() {

    const [getCounter, setCounter] = useState(0)

    function IncreseCounter() {
        return <TouchableOpacity 
                style={styles.buttonStyler}
                onPress={ () => {
                    setCounter(getCounter + 1)
        }}>
            <Text> + </Text>
        </TouchableOpacity>
    }

    function DecreseCounter() {
        return <TouchableOpacity 
                style={styles.buttonStyler}
                onPress={ () => {
                    setCounter(getCounter - 1)
        }}>
            <Text> - </Text>
        </TouchableOpacity>
    }

    function Counter() {
        return <Text style={styles.textStyler}> {getCounter} </Text>
    }

    return <View style={styles.viewStyler}>
        <DecreseCounter/>
        <Counter/>
        <IncreseCounter/>
    </View>
}

const styles = StyleSheet.create({
    viewStyler: {
        flex: 1,
        display:"flex",
        justifyContent:"center",
        alignItems: "center",
        flexDirection: "row",
        gap: 20
    },
    buttonStyler: {
        width: 30,
        height: 30,
        backgroundColor: "lightgrey",
        alignContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gruy",
        borderRadius: 5
    },
    textStyler: {
        fontWeight: "bold",
        fontSize: 20
    }
})

export default CounterScreen