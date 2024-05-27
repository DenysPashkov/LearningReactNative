import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {

  function presentationText() {
    return <Text style={styles.text}>Hello 3</Text>;
  }

  function gotoViewByName(name) {
      navigation.navigate(name)
  }

  function gotoComponent() {
      return <TouchableOpacity   
        style={styles.navigationLinkStyle}
        onPress={ () => gotoViewByName("Components")}
      >
        <Text>go to Components screen</Text>
      </TouchableOpacity>
  };

  function gotoListScreen() {
    return <TouchableOpacity
            style={styles.navigationLinkStyle}
            onPress={ () => gotoViewByName("List")}>
      <Text>Go to List Screen</Text>
    </TouchableOpacity>
  }

  function gotoImagesListScreen() {
    return <TouchableOpacity
            style={styles.navigationLinkStyle}
            onPress={ () => gotoViewByName("Images")}>
      <Text>Go to List of Images</Text>
    </TouchableOpacity>
  }

  function returningView() {
    return (
      <View>
        {presentationText()}
        <View style={styles.navigationLinksStyle}>
          {gotoComponent()}
          {gotoListScreen()}
          {gotoImagesListScreen()}
        </View>
      </View>
    );
  }

  return returningView();
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  navigationLinksStyle: {
    flexDirection: 'col', // Arrange children horizontally
    justifyContent: 'center', // Horizontally center the children
    alignItems: 'center', // Vertically center the children (optional)
  },
  navigationLinkStyle: {
    marginBottom: 20
  }
});

export default HomeScreen;
