import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native';

const LogIn = ({navigation}) => {
  return (
    <View style={styles.mainview}>
      <View>
      <Text style={styles.logintxt}>Login</Text>
      </View>
      <View style={{marginTop:'50%'}}>
        <Text>
          Email
        </Text>
        <TextInput
        placeholder="name@Example.com"
        style={styles.placeholderstyle}
        />
      </View>
      <View>
        <Text>
          Password
        </Text>
        <TextInput
        placeholder={"Enter Your Password"}
        secureTextEntry={true}
        style={styles.placeholderstyle}
        />
      </View>
      <View style={styles.btnview}>
        <TouchableOpacity style={styles.btn}
        onPress={ () => navigation.navigate('ProgressSteps')}
        >
          <Text style={styles.btnfont}>
            Login
          </Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default LogIn  ;

const styles = StyleSheet.create({
  mainview:{
    marginLeft: 30,
    marginRight:30,
  },
  logintxt:{
    fontSize: 44,
    marginTop: 20
  },
  placeholderstyle:{
    borderBottomWidth:1,
    borderBottomColor:'black'
  },
  btnview:{
    marginTop: 20
  },
  btn:{
    backgroundColor:'#4AC29F',
    height:50,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  btnfont:{
    color:'white',
    fontSize:25,
  }
});