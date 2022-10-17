import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GlobalStyle from '../utils/GlobalStyle'

export default function Map  ()  {
  return (
    <View style= {styles.body}>
      <Text 
      style={[GlobalStyle.CustomFonts,
      styles.text]}>
      Map</Text>
    </View>
  )
}



const styles = StyleSheet.create({
    body:{
        flex:1,
        alignItems:'center'
    },
    text:{
      fontSize:100,
    }

})