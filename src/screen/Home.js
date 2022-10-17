import {useSelector, useDispatch} from 'react-redux';
import {get_cities} from '../redux/action';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../utils/CustomButton';
import PushNotification from "react-native-push-notification";

export default function HomeScreen({navigation}) {
  const {cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_cities());
    createChannels();
  }, []);

  const createChannels=()=>{
    PushNotification.createChannel({
      channelId:'test-Channel',
      channelName:"test Channel"
    });

  }

  const HandleNotification=(item,index)=>{
// cancle privois notification
    PushNotification.cancelAllLocalNotifications();

    // create local notifications

    PushNotification.localNotification({
      channelId:"test-Channel",
      title:"You Clicked Upon " + item.country,
      message:item.city,
      bigText: item.city + " is one of the largest and most beatiful cities in " + item.country,
      color: "red",
      id: index
    });

    // scheduled notification
  //   PushNotification.localNotificationSchedule({
  //     channelId: "test-channel",
  //     title: "Alarm",
  //     message: "You clicked on " + item.country + " 20 seconds ago",
  //     date: new Date(Date.now() + 20 * 1000),
  //     allowWhileIdle: true,
  // });

  }

  return (
    <View style={styles.body}>
      <Text style={GlobalStyle.CustomFonts}> Data From API </Text>

      <CustomButton
      title='Open Camera'
      color='#00dd'
      onPressFunction={()=> {navigation.navigate('Camera')}}
      

      />


      <FlatList
        data={cities}
        renderItem={({item,index}) => (
          <TouchableOpacity
          onPress={()=> HandleNotification(item,index)
         
          
         
          }>
            <View style={styles.itemlist}>
              <Text style={GlobalStyle.CustomFonts}>{item.country}</Text>
              <Text style={GlobalStyle.CustomFontsSubtitle}>{item.city}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
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
  button: {
    backgroundColor: '#00ff',
    borderColor: '#00ff00',
    borderRadius: 10,
  },
});
