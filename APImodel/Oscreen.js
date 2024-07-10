import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Pressable, Image} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

 function Oscreen ({navigation}) {
  

  return (
    <View style={styles.container}>
    <ScrollView style={styles.scroll}>
    <Text>Home Screen</Text>
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
 

});
export default Oscreen;