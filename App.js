import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Conversor from './src/Conversor';



class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL"></Conversor>
        <Conversor moedaA="BRL" moedaB="USD"></Conversor>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
})

export default App;