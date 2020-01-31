import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, ImageBackground, FlatList, StyleSheet, Dimensions } from 'react-native';

export default () => {

  const [lista, setLista] = useState([
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-1.jpg',
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-2.jpg',
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-3.jpg',
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-4.jpg',
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-5.jpg',
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-6.jpg',
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-1.jpg',
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-2.jpg',
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-3.jpg',
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-4.jpg',
    },
    {
      id: Math.random(),
      name: 'Gaspar Brasserie',
      address: '185 Sutter St, San Francisco, CA 94109',
      image: 'https://shoutem.github.io/static/getting-started/restaurant-5.jpg',
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
        <ImageBackground source={{ uri: item.image }} style={styles.background}>
          <View style={styles.itemContainer}>
            <Text style={styles.nameTitle} >{item.name}</Text>
            <Text style={styles.nameSubTitle} >{item.address}</Text>
          </View>
        </ImageBackground>
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
    paddingTop: 30,
  },
  
  compList: {
    height: Dimensions.get('window').height,
    backgroundColor: '#FFF',
  },
  
  row: {
    borderColor: '#FFF',
    borderWidth: 1,
  },
  
  background: {
    height: 200,
  },
  
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  nameTitle: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: 'bold',
  },

  nameSubTitle: {
    color: '#FFF',
    fontSize: 18,
  }

});
