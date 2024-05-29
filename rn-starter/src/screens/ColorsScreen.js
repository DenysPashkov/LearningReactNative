import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native'

function ColorsScreen() {

    const [getColors, setColors] = useState([])

    function addRandomColor() {
        let r = Math.floor(Math.random() * 254)
        let g = Math.floor(Math.random() * 254)
        let b = Math.floor(Math.random() * 254)

        const color = `rgb(${r}, ${g}, ${b})`
        setColors([...getColors, color])
    }

    function ButtonAddColor() {
        return <TouchableOpacity style={styles.buttonStyle} onPress={ () => { addRandomColor() }}>
            <Text style={styles.buttonTextStyler}> Add Color </Text>
        </TouchableOpacity>
    }

    function ListOfColors() {
        return <FlatList 
        data={getColors}  
        renderItem={ ({item}) => {
            return colorView(item)
        }}
        />
    }

    function colorView(color){
        return <View style={styles.cellStyle}>
                <View style={[styles.colorViewStyle, {backgroundColor: color}]} ></View>
                <Text> {color} </Text>
            </View>
    }

    return <View style={styles.viewStyler}>
        <ButtonAddColor/>
        <ListOfColors/>
    </View>
}

const styles = StyleSheet.create({
    colorViewStyle: {
        width: 100,
        height: 50,
        marginBottom: 5,
    },
    cellStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    viewStyler: {
        margin: 20
    },
    buttonStyle: {
        backgroundColor: 'rgb(206, 236, 194)',
        borderWidth: 1,
        borderRadius: 25,
        padding: 5,
        marginBottom: 10,
        alignItems: 'center'
    },
    buttonTextStyler: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    }
})

export default ColorsScreen