import { React, useState, useEffect} from "react";
import {View, Text, StyleSheet, Image, FlatList} from 'react-native'
import yelp from "../api/yelp";

function DetailScreen(props){
    const id = props.route.params.id
    const [getDetails, setDetails] = useState(null)

    async function detailsRequest(id) {
        try {
            const response = await yelp.get(`/${id}`)
            const toSave = response.data
            console.log(toSave)
            setDetails(toSave)
        } catch (err) {
            setErrorMessage("An error has appeared, prepare for battle!")
        }
    }

    useEffect( () => {
        detailsRequest(id)
    }, [])

    if (!getDetails) {
        return <Text>Loading</Text>
    }

    return <View style={styler.container}>
        <Text>hi {getDetails.name}, {getDetails.photos.length}</Text>
        <Image style={styler.image} source={{uri: getDetails.image_url}}/>
        <FlatList
            data={getDetails.photos}
            renderItem={({item}) => {
                return <Image style={styler.image} source={{uri:item}}/>
            }}
        />
    </View> 
}

const styler = StyleSheet.create({
    image: {
        height: 300,
        marginHorizontal: 20
    },
    container: {
        flexDirection: 'column',
        flex: 1,
        gap: 10
    }
})

export default DetailScreen