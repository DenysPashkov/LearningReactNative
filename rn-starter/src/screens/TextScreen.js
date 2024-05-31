import React, { useState } from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native'

function TextScreen() {

    const [getText, setState] = useState("")
    
    function TextOutputComponent() {
        return <View>
            { getText.length > 5 ? null : <Text style={styles.errorStyle}>Your password should be longer then 5 character</Text> }
        </View>
    }

    return <View>
        <Text style={styles.title}>Enter Password: </Text>
        <TextInput 
            style={styles.textInputStyler}
            autoCapitalize="none"
            autoCorrect={false} 
            value={getText}
            onChangeText={ (value) => setState(value) }
        />

        <TextOutputComponent/>
    </View>
}

const styles = StyleSheet.create({
    textInputStyler: {
        borderWidth: 1,
        padding: 5,
        marginHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 10,
        paddingBottom: 20
    }, 
    errorStyle: {
        fontSize: 10,
        color: 'red',
        marginHorizontal: 10,
        paddingTop: 5
    }
})

export default TextScreen