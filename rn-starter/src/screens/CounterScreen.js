import React, { useReducer, useState } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

function reducer(state, action) {
    // action === { type, payload }
    switch (action.type) {
        case 'increse_Counter':
            return {...state, counter: state.counter + action.payload}
        case 'decrese_Counter':
            return {...state, counter: state.counter - action.payload}
        default:
            return state
    }
}

function CounterScreen() {

    const [{counter}, dispatch] = useReducer(reducer, {counter: 0})

    function IncreseCounter() {
        return <TouchableOpacity 
                style={styles.buttonStyler}
                onPress={ () => { dispatch({ type: 'increse_Counter', payload: 1})}}>
            <Text> + </Text>
        </TouchableOpacity>
    }

    function DecreseCounter() {
        return <TouchableOpacity 
                style={styles.buttonStyler}
                onPress={ () => { dispatch({ type: 'decrese_Counter', payload: 1}) }}>
            <Text style={styles.test}> - </Text>
        </TouchableOpacity>
    }

    function Counter() {
        return <View style={styles.counterViewStyler}>
                <Text style={styles.counterStyler}> {counter} </Text>
            </View>
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
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 5
    },
    counterStyler: {
        fontWeight: "bold",
        fontSize: 20
    },
    counterViewStyler: {
        width: 40,
        height: 40,
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    }
})

export default CounterScreen