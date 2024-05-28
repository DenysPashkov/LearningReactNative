import React from "react";
import {View, Text, StyleSheet, Image } from 'react-native'

function ImagesCell({title, img}) {
    return <View style={styles.cellStyle}>
        <Image source={img}/>
        <Text>{title}</Text>
    </View>
}

const styles = StyleSheet.create({
    cellStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
    }
})

export default ImagesCell