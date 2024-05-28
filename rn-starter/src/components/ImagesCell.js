import React from "react";
import {View, Text, StyleSheet, Image } from 'react-native'

function ImagesCell({title, img, score}) {
    return <View style={styles.cellStyle}>
        <Image style={styles.imageStyle} source={img}/>
        <View style={styles.textSectionStyle}>
            <Text style={styles.imageName}>{title}</Text>
            <Text style={styles.scoreText}>Score: {score}</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    cellStyle: {
        flexDirection: 'row',
        alignItems: 'top',
        gap: 10
    },
    imageStyle: {
        borderRadius: 10,
        width: 100,
        height: 50
    },
    textSectionStyle: {
        flexDirection: 'column'
    },
    imageName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    scoreText: {
        fontSize: 10,
        fontWeight: 'thin',
        color: 'gray'
    }
})

export default ImagesCell