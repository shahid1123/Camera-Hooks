import {useSelector, useDispatch} from 'react-redux';
import {setName, setAge, get_cities} from '../redux/action';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Button} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';






export default function HomeScreen({navigation}){
    const {name, age, cities} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    retriveData();
    dispatch(get_cities());
  }, []);

  return (
    <View style={styles.body}>
      <Text style={GlobalStyle.CustomFonts}> Data From API </Text>

      <FlatList
        data={cities}
        renderItem={({item}) => (
          <TouchableOpacity>
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
  