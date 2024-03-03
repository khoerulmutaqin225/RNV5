/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Details Screen" onPress={()=>navigation.navigate("Details")} />
    </View>
  );
};

const DetailsScreen = ({navigation}) => {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
      <Text>Details Screen</Text>
      <Button title="Go to Details Screen...again" onPress={()=>navigation.push("Details")} />
      <Button title="Go to Home" onPress={()=>navigation.navigate("Home")} />
      <Button title="Go to Details Screen" onPress={()=>navigation.goBack()} />
    
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ 
        headerStyle:{
          backgroundColor: '#009387',
        },
        headerTintColor: "#fff",
        headerTitleStyle:{
          fontWeight:'bold'
        },
        headerTitleAlign:'center'
       }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ 
          headerTitle:"MyApp",
         }} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({})

export default App;
