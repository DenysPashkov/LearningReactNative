import React from "react";
import {Text, View, StyleSheet} from "react-native";
import ImagesCell from "../components/ImagesCell";

const ImagesListScreen = () =>{
    return <View style={styles.listStyle}>
        <ImagesCell title="beach" img={require("../../assets/beach.jpg")}/>
        <ImagesCell title="forest" img={require("../../assets/forest.jpg")}/>
        <ImagesCell title="mountain" img={require("../../assets/mountain.jpg")}/>
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