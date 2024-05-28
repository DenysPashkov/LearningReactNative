import React from "react";
import {Text, View, StyleSheet} from "react-native";
import ImagesCell from "../components/ImagesCell";

const ImagesListScreen = () =>{
    return <View style={styles.listStyle}>
        <ImagesCell title="beach" img={require("../../assets/beach.jpg")} score="3"/>
        <ImagesCell title="forest" img={require("../../assets/forest.jpg")} score="5"/>
        <ImagesCell title="mountain" img={require("../../assets/mountain.jpg")} score="6.5"/>
    </View>
}

const styles = StyleSheet.create({
    listStyle: {
        gap: 20,
        marginHorizontal: 20,
        marginTop: 20
    }
})

export default ImagesListScreen