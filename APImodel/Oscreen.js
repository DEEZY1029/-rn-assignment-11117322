import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Image,FlatList} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

 function Oscreen ({navigation}) {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
getProducts();
    },[]);
const getProducts=()=>{
    const URL="https://fakestoreapi.com/products";
    fetch(URL).then(res=>{
       return res.json()
    })
    .then((data) => {
        setProducts(data)
     console.log(data);
    });
};
function truncateText(text) {
    const words = text.split(' ');
    let result = '';
    for (let i = 0; i < words.length; i++) {
      result += words[i] + ' ';
      if ((i + 1) % 3 === 0 && i !== words.length - 1) {
        result += '\n';
      }
    }
    return result.trim();
  }
  const [cartItems, setCartItems] = React.useState([]);
  
  const addToCart = async (item) => {
    try {
      let existingCartItems = await AsyncStorage.getItem('cartItems');
      existingCartItems = existingCartItems ? JSON.parse(existingCartItems) : [];

      
      existingCartItems.push(item);

      
      await AsyncStorage.setItem('cartItems', JSON.stringify(existingCartItems));

     
      alert('Item added to cart successfully!. Click on the bag icon at the top of the screen');
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <ScrollView style={styles.scroll}>
    <View style={styles.container}>
     <View style={styles.positioning}>
      <Image style={{top:25, left: -5}}source={require('./assets/Logo.png')}/>
     <Pressable style={{right: 150}}><Ionicons name="menu-outline" size={40} color="black"/></Pressable>
     <Pressable style={{left: 110, top: -35}}><Ionicons name="search-outline" size={30} color="black"/></Pressable>
     <Pressable style={{left: 150, top: -67}} onPress={() => navigation.navigate('Checkout')}><Ionicons name="bag-outline" size={30} color="black"/></Pressable>
     <Text style={{fontSize: 40,right:100, top: -20}}> Our Story</Text>
     <Pressable style={styles.filter}><Ionicons name="filter-outline" size={25} color="orange"/></Pressable>
     <Pressable style={styles.list}><Ionicons name="list-outline" size={25} color="black"/></Pressable>
      <StatusBar style="auto" />
      </View>
    <FlatList
        data={products}
        renderItem={({item})=>(<View>
            <Pressable onPress={() => navigation.navigate('Locations', { image:item.image, title:item.title,price:item.price})}><Image source={{uri:item.image}} style={styles.dresses} resizeMode='contain'/></Pressable>
            <Pressable onPress={() => addToCart(item)} style={{ top: -30, left: 150 }}><Ionicons name="add-circle-outline" size={25} color="black"/></Pressable>
            <Text style={{fontSize:11 ,left: 10}}> {truncateText(item.title, 4)}</Text>
            <Text style={{left:10, color:'orange'}}>{item.price}</Text>
            
        </View>)}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        />
   </View>
   </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  scroll:{
   
    backgroundColor: '#fff',
    
  },
  dresses:{
    left: 10,
    marginHorizontal:10,
    width:170,
    height:220
  },
  positioning: {
    alignItems:'center',
    top: 40
  },
  filter: {
    left: 150,
    top: -57,
    backgroundColor: '#F2F2F3',
    borderRadius:20,
    width:40,
    height: 40,
    justifyContent:'center',
    alignItems:'center'
  },
   list: {
    left: 100,
    top: -78,
    backgroundColor: '#F2F2F3',
    borderRadius:20,
    width:40,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    marginTop: -20
  },
});
export default Oscreen;