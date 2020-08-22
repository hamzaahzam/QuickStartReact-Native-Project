import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';

const Home = ({navigation},props) => {
  return (
    <View style={styles.mainview}>
        <View>
      <Text style={styles.Logotext}>ON{" "}SYTE</Text>
      <Text style={styles.Logobottomtext}>LBWF</Text>
      </View>
      <View style={styles.btn1view}>
        <TouchableOpacity style={styles.btn1}
        onPress={ () => navigation.navigate('LogIn')}
        >
          <Text style={styles.btnfont}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn2view}>
        <TouchableOpacity style={styles.btn2}
        onPress={ () => navigation.navigate('LogIn')}
        >
          <Text style={styles.btnfont}>
            Leave Borough
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btn2view}>
        <TouchableOpacity style={styles.btn3}
        onPress={ () => navigation.navigate('LogIn')}
        >
          <Text style={styles.btn3font}>
            Terms and Conditions
          </Text>
        </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.bottomfont1}>Providing a connected workforce through COVID-19</Text>
          <Text style={styles.bottomfont2}>Copyright © 2020 2020. All Rights Reserved.</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
    mainview:{
        flex:1,
        justifyContent: 'center',
        
    },
    Logotext:{
        fontSize:60,
        fontWeight:'bold',
        textAlign:'center'
    },
    Logobottomtext:{
        textAlign:'center',

    },
    btn1view:{
        marginTop: '70%',
        marginLeft:30,
        marginRight:30,
      },
      btn1:{
        backgroundColor:'#4AC29F',
        height:60,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
      },
      btnfont:{
        color:'white',
        fontSize:20,
      },
      btn2view:{
        marginTop: 10,
        marginLeft:30,
        marginRight:30,
      },
      btn2:{
        backgroundColor:'#C1476C',
        height:60,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
      },
      btn3:{
        backgroundColor:'white',
        height:60,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center'
      },
      btn3font:{
        color:'#D2D3D7',
        fontSize:16,
      },
      bottomfont1:{
        color:'#D2D3D7',
        textAlign:'center',
        marginTop:20
      },
      bottomfont2:{
        color:'#D2D3D7',
        textAlign:'center'
      },

});