import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import {Context as BlogContext} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons'

const HomeScreen = (props) => {
  const context = useContext(BlogContext)
  const value = context.state
  const addBlogPost = context.addBlogPost

  function pressCell(item) {
    console.log('pressing ', item.id)
  }

  function deleteCell(item) {
    console.log('deleting ', item.id)
  }

  function Cell({item}) {
    return <View style={{justifyContent: 'center'}}>
      <TouchableOpacity onPress={() => {pressCell(item)}}>
        <View style={styles.cell}>
          <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
          <Text numberOfLines={1} style={styles.content}>{item.id} - {item.content}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.delete} onPress={() => {deleteCell(item)}}>
        <Feather style={styles.deleteIcon} name='trash' size={20}/>
      </TouchableOpacity>
    </View>
  }
  function List() {
    return <View>
      <FlatList 
        data={value}
        contentContainerStyle={styles.list}
        keyExtractor={value.title}
        renderItem={ ({item}) => {
            return <Cell item={item}/>
          }
        }
      />
    </View>
  }
  
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={addBlogPost}>
        <Text style={styles.addButton}>Add element</Text>
      </TouchableHighlight>
      <List/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    gap: 20
  },
  list: {
    gap: 10
  },
  cell: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden'
  },
  addButton: {
    borderRadius: 20,
    borderColor: 'blue',
    borderWidth: 1,
    backgroundColor: 'cyan',
    padding: 20,
    overflow: 'hidden'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  content: {
    color: 'gray',
    fontWeight: 'thin',
    fontSize: 10,
  },
  delete: {
    position: 'absolute', 
    alignSelf: 'flex-end'
  },
  deleteIcon: {
    margin: 10,
    height: 20,
    width: 20
  }
});

export default HomeScreen;