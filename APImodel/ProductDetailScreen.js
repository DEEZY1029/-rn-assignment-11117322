import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

  function Details ({}) {
    
    
  return (
    <View style={styles.container} >
    <ScrollView style={styles.scroll}>
   </ScrollView>
   
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
    top:760 ,
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