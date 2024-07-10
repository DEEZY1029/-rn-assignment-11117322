import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

function DrawerHeader(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.headerText}>ERIC   ATSU</Text>
      </View>
      <View style={styles.underline}></View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    alignItems: 'center',
    borderColor: 'red'
  },
  headerText: {
    fontSize: 18,
    right:49, 
  },
  underline: {
    position: 'absolute',
    left: 50,
    right: 0,
    bottom: -2, 
    height: 1, 
    backgroundColor: 'red',
    width: 80,
    top:100 
  },
});

export default DrawerHeader;

