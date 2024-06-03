import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import SearchBarComponent from "../Components/SearchBar";


function SearchScreen(props) {

    const searchState = useState('')
    const [getSearchText, setSearchText] = searchState

    function NavigationTest() {
        return <TouchableOpacity onPress={ () => { props.navigation.navigate('Detail') } }>
            <Text> Navigation Test </Text>
        </TouchableOpacity>
    }

    return <View>
        <SearchBarComponent inputTextState={searchState} onTermFinish={ () => { console.log("Term submitted") } } />
        <NavigationTest/>
        <Text>{getSearchText}</Text>
    </View> 
    
}

const styler = StyleSheet.create({
    
})

export default SearchScreen