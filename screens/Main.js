import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Dimensions,
  Text,
  View
} from 'react-native';

import CodePin from 'react-native-pin-code';

const {height, width} = Dimensions.get('window');

export default class simpleExample extends Component {
  
  onSuccess = () => {
this.props.navigation.navigate('SignUp')
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Enter Borough Pin</Text>
        <Text style={styles.instructions}>
          Start by tapping on the dot
        </Text>
        <KeyboardAvoidingView
          behavior={'position'}
          keyboardVerticalOffset={-30}
          contentContainerStyle={styles.avoidingView}
        >
          <CodePin
            text={false}
            keyboardType="numeric"
            containerStyle={styles.avoidingView}
            pinStyle={styles.pinStyle}
            ref={ref => (this.ref = ref)}
            obfuscation
            autoFocusFirst
            code="fake_code"
            number={5}
            checkPinCode={(code, callback) => callback(code === '12345')}
            success={this.onSuccess}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#B2B1BF',
    marginBottom: 5
  },
  blur: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: width,
    height: height
  },
  avoidingView: {
    borderRadius: 10,
    height: 150,
    width: width - 30
  },
  pinStyle:{
    backgroundColor :'#F0F0F0',
    textAlign:'center',
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 1,height : 1},
    shadowRadius: 5,
    shadowOpacity : 0.4
  },
  containerCodePin: {
    borderRadius: 10
  },
  success: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center'
  },
  welcome:{
      fontSize:28,
      fontWeight:'bold',
      color:'#B2B1BF'
  }
});