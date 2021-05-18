import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from "react-navigation-tabs";
import Facebook from './screens/Facebook';
import Instagram from './screens/Instagram';

export default class App extends React.Component {
  render(){
     return (                  
           <AppContainer/> 
    );
  }
}

const BottomTabNavigator = createBottomTabNavigator({
  FACEBOOK: Facebook,
  INSTAGRAM :Instagram
});
const AppContainer = createAppContainer(BottomTabNavigator);
