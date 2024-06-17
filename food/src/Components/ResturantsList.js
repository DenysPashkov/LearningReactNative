import React from "react";
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { useNavigation  } from "@react-navigation/native";
function ResturantsList({resturantsList, title}) {
    const navigation = useNavigation()
    function Cell({resturant}) {
        return <TouchableOpacity onPress={ () => { navigation.navigate('Detail', {id: resturant.id}) } }>
            <View style={styler.cellStyler}>
                <Image style={styler.imageStyler} source={{uri: resturant.image_url}}/>
                <Text style={styler.resturantNameStyler}>{resturant.name}</Text>
                <Text style={styler.resturantInformationStyler}>{resturant.rating} Stars, {resturant.review_count} Review</Text>
            </View>
        </TouchableOpacity>
    }

    if (resturantsList.length == 0) {
        return null
    }

    return <View>
        <Text style={styler.titleStyler}>{title}</Text>
        <FlatList 
        contentContainerStyle={styler.listStyler} 
        horizontal data={resturantsList} 
        showsHorizontalScrollIndicator={false} 
        renderItem={ ({item}) => <View>
                <Cell resturant={item}/>
            </View>}
        />
    </View>
}

const styler = StyleSheet.create({
    cellStyler: {
        flexDirection: 'column',
    }, imageStyler: {
        width: 240,
        height: 140,
        backgroundColor: 'lightGray',
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
    },
    titleStyler: {
        fontSize: 40,
        fontWeight: 'bold',
        marginStart: 20,
        marginBottom: 10
    }
})

export default ResturantsList