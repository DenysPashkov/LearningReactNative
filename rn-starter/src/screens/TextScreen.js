import React from "react";
import {View, Text, StyleSheet, TextInput} from 'react-native'

function TextScreen() {

    function TextInputComponent() {
        return <View>
            <Text>Insert the text: </Text>
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false} 
            />
        </View>
    }
    
    function TextOutputComponent() {
        return <View>
            <Text>You have wrote: </Text>
        </View>
    }
    return <Text>Hello</Text>
}

const styles = StyleSheet.create({})

export default TextScreen