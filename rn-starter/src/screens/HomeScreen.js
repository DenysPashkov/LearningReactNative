import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = () => {

  function presentationText() {
    return <Text style={styles.text}>Hello 3</Text>;
  }

  function gotoComponentFunction() {
    console.log("go to Component")
  }
  function gotoComponent() {
    return <Button 
    title="go to Components screen"  
    onPress={ () => {gotoComponentFunction()}}
    />;
  };

  function gotoListScreenFunction() {
    console.log("go to List")
  }

  function gotoListScreen() {
    return <TouchableOpacity
            onPress={ () => {gotoListScreenFunction()}}>
      <Text>Go to List Screen</Text>
    </TouchableOpacity>
  }

  function returningView() {
    return (
      <View>
        <Text>Hello</Text>
        {presentationText()}
        {gotoComponent()}
        {gotoListScreen()}
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
