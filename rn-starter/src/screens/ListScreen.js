import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreenComponent = () => {

    const contacts = [
        { name: "Mario" },
        { name: "Marco" },
        { name: "Maria" },
        { name: "Miriam" },
        { name: "Marcello" },
        { name: "Marta" },
        { name: "Mamma" },
        { name: "Mariace festa" },
        { name: "Mimmo" },
        { name: "Merluzzo" },
        { name: "Motorola" }
    ]

    function listRow(name) {
        return <Text> - {name}</Text>
    }

    function list() {
        return <
            FlatList 
            data={contacts} 
            renderItem={ ({item}) => {
                return listRow(item.name)
            }}
            />
    }

    return list()
}

const syles = StyleSheet.create({
    test: {
        fontSize: 20
    }
})

export default ListScreenComponent