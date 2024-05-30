import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const VALUTE_UPDATE = 10

function ColorManagementScreen() {

    const redState = useState(125)
    const greenState = useState(125)
    const blueState = useState(125)

    function updateState(value, [getState, setState]) {
        let newValue = getState + value
        if (newValue > 255 ) { newValue = 255 }
        if (newValue < 0 ) { newValue = 0 } 
        setState(newValue)
    }

    function colorValueSetter(colorName, state) {
        let [getState] = state
        return <View style={styler.colorValueCellStyler}>
            <Text>{colorName}</Text>
            <View style={styler.colorValueSetterStyler}>
                <TouchableOpacity style={[styler.buttonStyler, {backgroundColor: 'red'}]} onPress={ () => { updateState(-VALUTE_UPDATE, state) }}>
                    <Text>-</Text>
                </TouchableOpacity>
                <View style={styler.colorIntensityTextStyler}>
                    <Text>{getState}</Text>
                </View>
                <TouchableOpacity style={[styler.buttonStyler, {backgroundColor: 'green'}]} onPress={ () => { updateState(VALUTE_UPDATE, state) }}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    }

    function ColorToUpdate() {
        return <View style={[styler.colorToUpdateViewStyle, {backgroundColor: `rgb(${redState[0]},${greenState[0]},${blueState[0]})`}]}></View>
    }

    return <View>
        {colorValueSetter('red', redState)}
        {colorValueSetter('green', greenState)}
        {colorValueSetter('blue', blueState)}
        <ColorToUpdate/>
    </View>
}

const styler = StyleSheet.create({
    colorToUpdateViewStyle: {
        height: 100,
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginTop: 50
        // flex: 1,
    },
    colorValueCellStyler: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 10,
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1
    },
    colorValueSetterStyler: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonStyler: {
        width: 45,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },
    colorIntensityTextStyler: {
        height: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1
    }
})

export default ColorManagementScreen