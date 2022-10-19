import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import PushNotification from 'react-native-push-notification';

export default function Splash({navigation}) {
  useEffect(() => {
    createChannels;
    setTimeout(()=>{
      navigation.replace('Home')
    },2000)
  }, []);

  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'task-Channel',
      channelName: 'task Channel',
    });
  };

  return (
    <View style={styles.body}>
      <Image style={styles.logo} 
      source={require('../../assets/list.png')} 

      />

      <Text style={GlobalStyle.CustomFonts}> To Do List </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemlist: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#cccccc',
    borderRadius: 5,
    margin: 7,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    margin: 10,
    fontSize: 30,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#00ff00',
  },
  logo: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: '#00ff',
    borderColor: '#00ff00',
    borderRadius: 10,
  },
});
