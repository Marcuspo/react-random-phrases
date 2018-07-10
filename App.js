import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, AppRegistry, Alert } from 'react-native';

const gerarNovaFrase = () =>{
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor( numeroAleatorio * 5)

var frases = Array();
frases[0] = 'O dinheiro faz homens ricos, o conhecimento faz homens sábios e a humildade faz grandes homens.';
frases[1] = 'Viva simples, sonhe grande, seja grato, dê amor, ria muito!';
frases[2] = 'Bons amigos são como estrelas: nem sempre podemos ver,mas temos certeza que estão sempre lá.';
frases[3] = 'Se for pra desistir, desista de ser fraco.';
frases[4] = 'Que todo mal vire amor, que toda dor vire flor.';

var fraseEscolhida = frases[ numeroAleatorio ];

  Alert.alert( fraseEscolhida );

}

export default class App extends Component{
   render(){

    const { principal, botao, textoBotao  } = Estilo;
    
    return (
      <View style = { principal}>
        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity 
        onPress={ gerarNovaFrase }
          style = { botao }>
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
