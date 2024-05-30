import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

function ColorManagementScreen() {

    const redState = useState(125)
    const greenState = useState(125)
    const blueState = useState(125)

    function colorValueSetter(colorName, [getState, setState]) {
        return <View>
            <Text>{colorName}</Text>
            <View style={styler.colorValueSetterStyler}>
                <TouchableOpacity style={styler.buttonStyler} onPress={ () => { setState(getState - 10) }}>
                    <Text>-</Text>
                </TouchableOpacity>
                <Text>{getState}</Text>
                <TouchableOpacity style={styler.buttonStyler} onPress={ () => { setState(getState + 10) }}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    }

    function ColorToUpdate() {
        return <View style={[styler.colorToUpdateViewStyle, {backgroundColor: `rgb(${redState[0]},${greenState[0]}.${blueState[0]})`}]}></View>
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
        width: 30,
        height: 30
    },
    colorValueSetterStyler: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    buttonStyler: {
        width: 25,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderRadius: 20
    }
})

export default ColorManagementScreen