import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreenComponent = () => {

    const contacts = [
        { name: "Mario", key: "1" },
        { name: "Marco", key: "2" },
        { name: "Maria", key: "3" },
        { name: "Miriam", key: "4" },
        { name: "Marcello", key: "5" },
        { name: "Marta", key: "6" },
        { name: "Mamma", key: "7" },
        { name: "Mariace festa", key: "8" },
        { name: "Mimmo", key: "9" },
        { name: "Merluzzo", key: "10" },
        { name: "Mario", key: "11" }
    ]

    function listRow(name) {
        return <Text style={styles.cellStyle}> - {name}</Text>
    }

    function list() {
        return < FlatList 
            data={contacts} 
            renderItem={ ({item}) => {
                return listRow(item.name)
            }}
            />
    }

    return list()
}

const styles = StyleSheet.create({
    cellStyle: {
        backgroundColor: "red",
        marginVertical: 50,
        marginStart: 10
    }
})

export default ListScreenComponent