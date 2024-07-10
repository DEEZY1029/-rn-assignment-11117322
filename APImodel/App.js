import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import DrawerHeader from './DrawerHeader';
import Details from './ProductDetailScreen';
import Oscreen from './Oscreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerContent() {
  return (
    <Drawer.Navigator
      initialRouteName="Store"
      drawerContent={(props) => <DrawerHeader {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Store" component={HomeScreen} />
      <Drawer.Screen name="Locations" component={Details} />
      <Drawer.Screen name="Blog" component={Oscreen} />
      <Drawer.Screen name="Jewelry" component={Oscreen} />
      <Drawer.Screen name="Elections" component={Oscreen} />
      <Drawer.Screen name="Clothing" component={Oscreen} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Store" component={DrawerContent} />
        <Stack.Screen name="Checkout" component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
