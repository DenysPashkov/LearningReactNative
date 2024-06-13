import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native'

function ResturantsList() {
    function Cell({item}) {
        
        console.log(item)
        return <View style={styler.cellStyler}>
            <View style={styler.imageStyler}/>
            <Text style={styler.resturantNameStyler}>Ristorante risottaro</Text>
            <Text style={styler.resturantInformationStyler}>{item}.5 Stars, 234 Review</Text>
        </View>
    }

    return <FlatList 
    contentContainerStyle={styler.listStyler} 
    horizontal data={[1,2,3]} 
    showsHorizontalScrollIndicator={false} 
    renderItem={ ({item}) => <View>
        <Cell item={item}/>
        </View>}/>
}

const styler = StyleSheet.create({
    cellStyler: {
        flexDirection: 'column',
    }, imageStyler: {
        width: 240,
        height: 140,
        backgroundColor: 'red',
    }, resturantNameStyler : {
        fontWeight: 'bold',
        fontSize: 22,
        marginStart: 6,
        marginTop: 10
    }, resturantInformationStyler: {
        fontWeight: 'light',
        fontSize: 14,
        color: 'gray',
        marginStart: 8,
    }, listStyler: {
        gap: 16,
        paddingHorizontal: 20,
    }
})

export default ResturantsList