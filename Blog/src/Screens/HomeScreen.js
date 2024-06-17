import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight } from 'react-native';
import BlogContext from '../context/BlogContext';

const HomeScreen = (props) => {
  const context = useContext(BlogContext)
  const value = context.data
  const addBlogPost = context.addBlogPost
  console.log(value)
  return (
    <View style={styles.container}>
      <Text>Hi</Text>
      <View style={styles.list}>
        <FlatList 
          data={value}
          keyExtractor={value.title}
          renderItem={ ({item}) => {
            return <Text> {item.title} - {item.content} </Text>}
          }
        />
      </View>
      <TouchableHighlight onPress={() => {addBlogPost()}}>
        <Text >Add element</Text>
      </TouchableHighlight>
      <View style={{flex: 1}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 0.5,
    backgroundColor: 'red'
  }
});

export default HomeScreen;