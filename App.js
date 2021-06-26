import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './component/Header';
import AddItem from './component/AddItem';
import { v4 as uuid_v4 } from "uuid";
import ListItem from './component/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid_v4(), text: 'Milk'},
    {id: uuid_v4(), text: 'Eggs'},
    {id: uuid_v4(), text: 'Bread'},
    {id: uuid_v4(), text: 'Juice'}
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item when adding to your shopping list',
        [
          {
            text: 'Understood',
            style: 'cancel',
          },
        ],
        {cancelable: true},
      );
    } else {
      setItems(prevItems => {
        return [{id: uuid_v4(), text}, ...prevItems]
      });
    }
  }
  return (
    <View style={styles.container}>
      <Header/>
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
        <ListItem item={item} deleteItem={deleteItem} />
        )}
      />

      
      {/* <Text style={styles.text}>My First React App</Text> */}
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}></Image> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff'
  },
  text: {
    color: 'darkslateblue',
    fontSize:30
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }
});
export default App;