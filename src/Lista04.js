import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';

export default function HomeScreen() {

  const [list, setList] = useState([
    {
      id: Math.random(),
      name: "Gaspar Brasserie",
      address: "185 Sutter St, San Francisco, CA 94109",
      image: "https://shoutem.github.io/static/getting-started/restaurant-6.jpg",
    },
    {
      id: Math.random(),
      name: "Chalk Point Kitchen",
      address: "527 Broome St, New York, NY 10013",
      image: "https://shoutem.github.io/static/getting-started/restaurant-2.jpg",
    },
    {
      id: Math.random(),
      name: "Kyoto Amber Upper",
      address: "225 Mulberry St, New York, NY 10012",
      image: "https://shoutem.github.io/static/getting-started/restaurant-3.jpg",
    },
    {
      id: Math.random(),
      name: "Sushi Academy",
      address: "1900 Warner Ave. Unit A Santa Ana, CA",
      image: "https://shoutem.github.io/static/getting-started/restaurant-4.jpg",
    },
    {
      id: Math.random(),
      name: "Sushibo",
      address: "35 Sipes Key, New York, NY 10012",
      image: "https://shoutem.github.io/static/getting-started/restaurant-5.jpg",
    },
    {
      id: Math.random(),
      name: "Mastergrill",
      address: "550 Upton Rue, San Francisco, CA 94109",
      image: "https://shoutem.github.io/static/getting-started/restaurant-6.jpg",
    },
    {
      id: Math.random(),
      name: "Kyoto Amber Upper",
      address: "225 Mulberry St, New York, NY 10012",
      image: "https://shoutem.github.io/static/getting-started/restaurant-3.jpg",
    },
    {
      id: Math.random(),
      name: "Sushi Academy",
      address: "1900 Warner Ave. Unit A Santa Ana, CA",
      image: "https://shoutem.github.io/static/getting-started/restaurant-4.jpg",
    },
    {
      id: Math.random(),
      name: "Sushibo",
      address: "35 Sipes Key, New York, NY 10012",
      image: "https://shoutem.github.io/static/getting-started/restaurant-5.jpg",
    },
    {
      id: Math.random(),
      name: "Mastergrill",
      address: "550 Upton Rue, San Francisco, CA 94109",
      image: "https://shoutem.github.io/static/getting-started/restaurant-6.jpg",
    },
    {
      id: Math.random(),
      name: "Kyoto Amber Upper",
      address: "225 Mulberry St, New York, NY 10012",
      image: "https://shoutem.github.io/static/getting-started/restaurant-3.jpg",
    },
    {
      id: Math.random(),
      name: "Sushi Academy",
      address: "1900 Warner Ave. Unit A Santa Ana, CA",
      image: "https://shoutem.github.io/static/getting-started/restaurant-4.jpg",
    },
    {
      id: Math.random(),
      name: "Sushibo",
      address: "35 Sipes Key, New York, NY 10012",
      image: "https://shoutem.github.io/static/getting-started/restaurant-5.jpg",
    },
    {
      id: Math.random(),
      name: "Mastergrill",
      address: "550 Upton Rue, San Francisco, CA 94109",
      image: "https://shoutem.github.io/static/getting-started/restaurant-6.jpg",
    }
  ]);



  return (
    <View style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={e => String(e.id)}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={styles.componentItem}>
              <View style={styles.shadow}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <View >
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.address}>{item.address}</Text>
                </View>
              </View>
            </View>
          )}
        />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 30,
  },

  componentItem: {
    width: (Dimensions.get('window').width / 2),
    height: 300,
    paddingVertical: 10,
    paddingHorizontal: 10,
    // borderColor: 'rgba(0, 0, 0, 0.04)',
    // borderWidth: 0.9,
  },

  shadow: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 0,
    shadowColor: "#333",
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 3,
  },

  image: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    paddingTop: 5,
  },

  address: {
    fontSize: 12,
    color: '#777',
    paddingVertical: 3
  },

});
