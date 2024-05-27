import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {

  function presentationText() {
    return <Text style={styles.text}>Hello 3</Text>;
  }

  const gotoComponent = () => {
    return <Button 
    title="go to Components screen"  
    onPress={ () => {
      console.log("button pressed")
    }}
    />;
  };

  function returningView() {
    return (
      <View>
        <Text>Hello</Text>
        {presentationText()}
        {gotoComponent()}
      </View>
    );
  }

  return returningView();
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
