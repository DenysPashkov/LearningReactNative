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

  function GoToComponent() {
      return <TouchableOpacity   
        style={styles.navigationLinkStyle}
        onPress={ () => gotoViewByName("Components")}
      >
        <Text style={styles.navigationTextStyle}>Go to Components screen</Text>
      </TouchableOpacity>
  };

  function gotoListScreen() {
    return <TouchableOpacity
            style={styles.navigationLinkStyle}
            onPress={ () => gotoViewByName("List")}>
      <Text style={styles.navigationTextStyle}>Go to List Screen</Text>
    </TouchableOpacity>
  }

  function gotoImagesListScreen() {
    return <TouchableOpacity
            style={styles.navigationLinkStyle}
            onPress={ () => gotoViewByName("Images")}>
      <Text style={styles.navigationTextStyle}>Go to List Images</Text>
    </TouchableOpacity>
  }

  function GoToCounterScreen() {
    return <TouchableOpacity
            style={styles.navigationLinkStyle}
            onPress={ () => gotoViewByName("Counter")}>
              <Text style={styles.navigationTextStyle}>Go to Counter screen</Text>
    </TouchableOpacity>
  }

  function GoToColorsScreen() {
    return <TouchableOpacity
        style={styles.navigationLinkStyle}
        onPress={ () => gotoViewByName("Colors")} >
        <Text style={styles.navigationTextStyle}>Go to List Colors screen</Text>
    </TouchableOpacity>
  }

  function GoToColorManagement() {
    return <TouchableOpacity
        style={styles.navigationLinkStyle}
        onPress={ () => gotoViewByName("ColorManagement")} >
        <Text style={styles.navigationTextStyle}>Go to List Color Management screen</Text>
    </TouchableOpacity>
  }

  function GoToText() {
    return <TouchableOpacity
        style={styles.navigationLinkStyle}
        onPress={ () => gotoViewByName("Text")} >
        <Text style={styles.navigationTextStyle}>Go to Text screen</Text>
    </TouchableOpacity>
  }

  function GoToLayout() {
    return <TouchableOpacity
        style={styles.navigationLinkStyle}
        onPress={ () => gotoViewByName("Layout")} >
        <Text style={styles.navigationTextStyle}>Go to Layout screen</Text>
    </TouchableOpacity>
  }

  function returningView() {
    return (
      <View>
        {presentationText()}
        <View style={styles.navigationLinksStyle}>
          <GoToComponent/>
          {gotoListScreen()}
          {gotoImagesListScreen()}
          <GoToCounterScreen/>
          <GoToColorsScreen/>
          <GoToColorManagement/>
          <GoToText/>
          <GoToLayout/>
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
    marginBottom: 20,
    width: 200,
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'rgba(22, 22, 22, 0.05)'
  },
  navigationTextStyle: {
    color: 'blue',
  }
});

export default HomeScreen;
