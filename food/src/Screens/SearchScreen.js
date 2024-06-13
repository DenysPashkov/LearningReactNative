import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import SearchBarComponent from "../Components/SearchBar";
import useYelpRequest from "../hooks/useYelpRequest";
import ResturantsList from "../Components/ResturantsList";

function SearchScreen(props) {

    const searchState = useState('')
    const [getSearchText, setSearchText] = searchState
    const [makeRequest, getResults, getErrorMessage] = useYelpRequest();

    function NavigationTest() {
        return <TouchableOpacity onPress={ () => { props.navigation.navigate('Detail') } }>
            <Text> Navigation Test </Text>
        </TouchableOpacity>
    }

    function ErrorMessage() {
        return getErrorMessage ? <Text>{getErrorMessage}</Text> : null
    }


    return <View>
        <SearchBarComponent inputTextState={searchState} onTermFinish={ () => { makeRequest(getSearchText) } } />
        <NavigationTest/>
        <ErrorMessage/>
        <ResturantsList/>
        <Text>we have found {getResults.length} resturants</Text>
    </View> 
    
}

const styler = StyleSheet.create({
    
})

export default SearchScreen