import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import Icon from './Progress1';

const LogIn = (props) => {
  const showAlert = () => {
    Alert.alert('Alert', 'You have successfully clocked into Leete Cottage');
  };
  return (
    <View style={{margin: 20, flex: 1}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{fontSize: 45, fontWeight: 'bold'}}>Site Status</Text>
          <Text style={{fontSize: 20, color: '#929292'}}>
            You've been to 22 sites ever.
          </Text>
        </View>
        <View>
          <Icon.EvilIcons name="user" size={70} color={'#565E7F'} />
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 150,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 40,
            width: 110,
            borderRadius: 40,
            shadowColor: 'black',
            shadowRadius: 10,
            elevation: 10,
          }}>
          <Text>On Site</Text>
          <Icon.Entypo name="dot-single" size={35} color={'#44DA5E'} />
        </View>
      </View>
      <View
        style={{marginTop: 20, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#29A4FF',
            height: 210,
            width: 210,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 125,
          }}>
          <View
            style={{
              backgroundColor: '#29A4FF',
              height: 180,
              width: 180,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 110,
              borderWidth: 12,
              borderColor: '#0153AF',
            }}>
            <Icon.MaterialCommunityIcons
              name="check-bold"
              size={50}
              color={'white'}
            />
          </View>
        </View>
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        <TouchableOpacity
          onPress={showAlert}
          style={{
            height: 55,
            width: 230,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 40,
            borderWidth: 1,
            borderColor: '#29A4FF',
          }}>
          <Text style={{fontSize: 26}}>Clock-Out</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
          height: 60,
          position: 'absolute',
          width: '100%',
          bottom: 0,
          shadowColor: 'black',
          shadowRadius: 5,
          elevation: 5,
        }}>
        <Icon.Ionicons name="md-checkmark-circle" size={22} color={'#26ABFB'} />
        <Text style={{fontSize: 22, paddingLeft: 10}}>Lette Cottage</Text>
      </View>
    </View>
  );
};

export default LogIn;

const styles = StyleSheet.create({});
