import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import SearchBarComponent from "../Components/SearchBar";
import useYelpRequest from "../hooks/useYelpRequest";
import ResturantsList from "../Components/ResturantsList";

function SearchScreen(props) {

    const searchState = useState('')
    const [getSearchText, setSearchText] = searchState
    const [makeRequest, getResults, getErrorMessage] = useYelpRequest();

    function ErrorMessage() {
        return getErrorMessage ? <Text>{getErrorMessage}</Text> : null
    }

    function filterResturantsForPrice(item, priceRange) {

        const returnValue = item.price == priceRange
        return returnValue
    }

    return <View style={{flex: 1}}>
        <SearchBarComponent inputTextState={searchState} onTermFinish={ () => { makeRequest(getSearchText) } } />
        <ErrorMessage/>
        <ScrollView>
            <ResturantsList resturantsList={getResults.filter((resturants => filterResturantsForPrice(resturants, "€")))} title="Cheapest"/>
            <ResturantsList resturantsList={getResults.filter((resturants => filterResturantsForPrice(resturants, "€€")))} title="Butck for value"/>
            <ResturantsList resturantsList={getResults.filter((resturants => filterResturantsForPrice(resturants, "€€€")))} title="Expensive"/>
        </ScrollView>
        <Text>we have found {getResults.length} resturants</Text>
    </View> 
    
}

const styler = StyleSheet.create({
    
})

export default SearchScreen