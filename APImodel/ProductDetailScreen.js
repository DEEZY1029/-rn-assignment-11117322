import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

  function Details ({route,navigation}) {
    const {item,image,title,price} = route.params;
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
    <View style={styles.container} >
    <ScrollView style={styles.scroll}>
    <View style={styles.positioning}>
    <Image style={{top:25, left:-5}}source={require('./assets/Logo.png')}/>
    <Pressable style={{right: 150}}><Ionicons name="menu-outline" size={40} color="black"/></Pressable>
     <Pressable style={{left: 110, top: -35}}><Ionicons name="search-outline" size={30} color="black"/></Pressable>
     <Pressable style={{left: 150, top: -67}} onPress={() => navigation.navigate('Checkout')}><Ionicons name="bag-outline" size={30} color="black"/></Pressable>
     <Image source={{uri:image}} style={styles.image} />
    </View>
    <View style={{marginTop:-50}}>
  <Text style={styles.name}>{title}</Text>
  <Text style={styles.dressprice}>{price}</Text>
  </View>
  <Text style={{fontSize:25,top:40, left: 20}}>Materials</Text>
  <Text style={{fontSize:16,top:45, left:20}}>We work with monitoring programmes to {'\n'}ensure compliance with safety, health and{'\n'}quality standards for our products</Text>
  <Text style={{fontSize:16,top:70, left: 50}}>Do not use Bleach</Text>
  <Text style={{fontSize:16,top:80, left: 50}}>Do not Tumble Dry </Text>
  <Text style={{fontSize:16,top:90, left: 50}}>Dry clean with tetrachloroethylene</Text>
  <Text style={{fontSize:16,top:100, left: 50,marginBottom: 20}}>Iron at a maximum of 110ºC/230ºF</Text>
  <Image style={{top:-25, left:20}}source={require('./assets/Do Not Bleach.png')}/>
  <Image style={{top:-25, left:20, marginVertical:5}}source={require('./assets/Do Not Tumble Dry.png')}/>
  <Image style={{top:-25, left:20}}source={require('./assets/Do Not Wash.png')}/>
  <Image style={{top:-25, left:20}}source={require('./assets/Iron Low Temperature.png')}/>
  <View style={styles.underline}></View>
  <Text style={{fontSize: 16, left:60,marginVertical:5}}>Free Flat Rate Shipping</Text>
  <Text style={{fontSize: 16, left:60, marginVertical:5}}>Estimated to be delivered on {'\n'}09/11/2021 - 12/11/2021.</Text>
  <Image style={{top:-70, left:22}}source={require('./assets/Shipping.png')}/>
   </ScrollView>
   <Pressable onPress={() => addToCart(item)} style={styles.button}>
    <Ionicons name="add-outline" size={45} color="white" style={{top:25, right:170}}/>
   <Text style={{color:'white', fontSize:20, top:-10, right:70}}>ADD TO BASKET</Text>
   <Ionicons name="heart-outline" size={45} color="white" style={{top:-45, left:130}}/>
    </Pressable>
   </View>
    
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
  positioning: {
    alignItems:'center',
    top: 30
  },
  image: {
    width: '70%',
    height: '70%',
    top:-30,
    marginTop: -20
  },
  name:{
    fontSize: 30,
    left: 20,
    top:20,
    fontWeight:'bold'
  },
  type:{
    fontSize: 20,
    left: 20,
    top:20
  },
  dressprice:{
    fontSize: 20,
    left: 20,
    top:20,
    color:'orange'
  },
  underline: {
    position: 'absolute',
    left: 20,
    right: 0,
    bottom: -2, 
    height: 1, 
    backgroundColor: 'grey',    
    width: 300,
    top:780 ,
    marginVertical:15
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding:0,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: 'black',
    top:20,
    width:450,
    height:100,
    left: -10,
    marginTop:-50
  },
});
export default Details;