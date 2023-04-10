import React from 'react'
import { View, StyleSheet } from 'react-native'
import Botao from './components/botao'

export default () => (

  /*componente titulo */
  <View style={style.App}>
    <Botao />
  </View>
)

const style = StyleSheet.create({
  App: {
    backgroundColor: '#AC9',
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
  }
})