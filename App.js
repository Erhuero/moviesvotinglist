//import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Search from './Components/Search'
//fichier execute au lancement
//App correspond au point d'entrée de notre application et c'est lui-même un component
export default class App extends React.Component {
  render() {
    return(
      <Search/>
    );
  }
}
