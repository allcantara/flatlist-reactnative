import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

export default () => {

  const [lista, setLista] = useState([
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-1.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-2.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-3.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-4.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-5.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-6.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-1.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-2.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-3.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-4.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-5.jpg',
      time: '07:00 - 20:00'
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-6.jpg',
    },
  ]);



  const componentList = item => {
    return (
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.itemContainer}>
          <Text style={styles.nameTitle} >{item.name}</Text>
          <Text style={styles.nameSubTitle} >{item.address}</Text>
          <Text style={styles.time} >{item.time}</Text>
        </View>
      </View>
    )
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lista}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => componentList(item)}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 30,
  },
  
  row: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'rgba(0,0,0,0.08)',
    borderBottomWidth: 0.7,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  
  image: {
    width: 80,
    height: 80,
  },

  
  itemContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },

  nameTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#333',
  },

  nameSubTitle: {
    fontSize: 14,
    color: '#333',
  },

  time: {
    paddingVertical: 5,
    fontSize: 10,
    color: '#555',
  }

});
