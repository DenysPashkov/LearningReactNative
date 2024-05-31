import React from "react";
import {View, StyleSheet} from 'react-native'

function LayoutTestScreen() {
    return <View style={styler.containerStyle}>
        <View style={styler.rowOneStyle}>
            <View style={[styler.viewStyle, {backgroundColor: 'red'}]}/>
            <View style={[styler.viewStyle, {backgroundColor: 'purple'}]}/>
        </View>
        <View style={styler.rowTwoStyle}>
            <View style={[styler.viewStyle, {backgroundColor: 'green'}]}/>
        </View>
    </View>
}

let styler = StyleSheet.create({
    viewStyle: {
        height: 100,
        width: 100
    },
    rowOneStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowTwoStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    containerStyle: {

    }
})

export default LayoutTestScreen