import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'

function SearchBarComponent({inputTextState, onTermFinish}) {

    const [getInputText, setInputText] = inputTextState

    return <View style={styler.viewStyler}>
        <Feather style={styler.iconStyler} name="search"/>
        <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            style={styler.textInputStyler}
            value={getInputText}
            placeholder="Search"
            onChangeText={ (value) => { setInputText(value) } }
            onEndEditing={ () => onTermFinish()}
        />
    </View> 
    
}

const styler = StyleSheet.create({
    viewStyler: {
        borderWidth: 1,
        borderRadius: 20,
        height: 30,
        marginHorizontal: 20,
        marginVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#F0EEEE',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 20
    },
    iconStyler: {
        justifyContent: 'center',
        alignContent: 'center',
        fontSize: 20,
        alignSelf: 'center'
    },
    textInputStyler: {
        height: 30,
        flex: 20
    }
})

export default SearchBarComponent