import React from 'react'
import {SafeAreaView} from 'react-native'
import Header from './components/Header'
import Navigator from './Navigator'


export default props =>{
  return (
    <SafeAreaView style={{flex:1}}>
      <Header />
      <Navigator />
    </SafeAreaView>
  )
}