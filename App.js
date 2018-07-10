import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, AppRegistry } from 'react-native';

const botaoPrescionado = () =>{
  alert('Botão prescionado')
}

export default class App extends Component{
   render(){

    const { principal, botao, textoBotao  } = Estilo;
    
    return (
      <View style = { principal}>
        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity style = { botao }>
            <Text style = { textoBotao }>Nova frase </Text>
          </TouchableOpacity>
     </View>
    );
  }
}

const Estilo = StyleSheet.create({
  principal:{
    backgroundColor: '#e6eeff',
     flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao:{
    backgroundColor: '#606060',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao:{
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    elevation: 2
  }

})

AppRegistry.registerComponent('FrasesApp', () => App);
