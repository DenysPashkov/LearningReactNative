import React from "react";
import { FlatList, StyleSheet, Text, View } from 'react-native';

const ListScreenComponent = () => {

    const contacts = [
        { name: "Mario", age: 22, key: "1" },
        { name: "Marco", age: 24, key: "2" },
        { name: "Maria", age: 43, key: "3" },
        { name: "Miriam", age: 53, key: "4" },
        { name: "Marcello", age: 23, key: "5" },
        { name: "Marta", age: 32, key: "6" },
        { name: "Mamma", age: 55, key: "7" },
        { name: "Mariace festa", age: 31, key: "8" },
        { name: "Mimmo", age: 13, key: "9" },
        { name: "Merluzzo", age: 22, key: "10" },
        { name: "Mario", age: 88, key: "11" }
    ]

    function listRow(contact) {
        return <Text style={styles.cellStyle}> Name: {contact.name} - Age: {contact.age}</Text>
    }

    function list() {
        return < FlatList 
            showsVerticalScrollIndicator={false}
            data={contacts} 
            renderItem={ ({item}) => {
                return listRow(item)
            }}
            />
    }

    return list()
}

const styles = StyleSheet.create({
    cellStyle: {
        backgroundColor: "red",
        paddingVertical: 10,
        marginVertical: 40,
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: "blue"
    }
})

export default ListScreenComponent