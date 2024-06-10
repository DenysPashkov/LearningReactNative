import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import SearchBarComponent from "../Components/SearchBar";
import yelp from '../api/yelp'

function SearchScreen(props) {

    const searchState = useState('')
    const [getSearchText, setSearchText] = searchState
    const [getResult, setResults] = useState([])
    const [getErrorMessage, setErrorMessage] = useState('')

    async function makeRequest() {
        try {
            const response =  await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: getSearchText,
                    location: 'Rome'
                }
            })
            setResults(response.data.businesses)
        } catch (err) {
            setErrorMessage("An error has appeared, prepare for battle!")
        }

    }

    function NavigationTest() {
        return <TouchableOpacity onPress={ () => { props.navigation.navigate('Detail') } }>
            <Text> Navigation Test </Text>
        </TouchableOpacity>
    }

    function ErrorMessage() {
        return getErrorMessage ? <Text>{getErrorMessage}</Text> : null
    }

    return <View>
        <SearchBarComponent inputTextState={searchState} onTermFinish={ () => { makeRequest() } } />
        <NavigationTest/>
        <ErrorMessage/>
        <Text>we have found {getResult.length} resturants</Text>
    </View> 
    
}

const styler = StyleSheet.create({
    
})

export default SearchScreen