import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from './Progress1';

class ExampleOne extends Component {
  static navigationOptions = {
    header: null,
  };

  defaultScrollViewProps = {
    keyboardShouldPersistTaps: 'handled',
    contentContainerStyle: {
      flex: 1,
      justifyContent: 'center',
    },
  };
  constructor(props) {
    super(props);
    this.state = {count: ''};
  }
  onNextStep = () => {
    console.log('called next step');
  };

  onPaymentStepComplete = () => {
    console.log('called Next step');
  };

  onPrevStep = () => {
    console.log('called previous step');
  };

  onSubmitSteps = () => {
    this.props.navigation.navigate('SiteStatus');
  };

  render() {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
            <Icon.Ionicons
              name="arrow-back"
              size={24}
              style={{paddingLeft: 20}}
            />
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 20, paddingRight: 20}}>Leete Cottage</Text>
          </View>
        </View>
        <ProgressSteps>
          <ProgressStep
            label="Reason For Visit"
            onNext={this.onPaymentStepComplete}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnText={<Icon.Ionicons name="arrow-forward" size={25} />}
            nextBtnTextStyle={styles.leftbtntext}
            nextBtnStyle={styles.leftbtn}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 1 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:1})}>
                <Icon.MaterialCommunityIcons name="calendar-today" size={24} />
                <Text>Day to day</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 2 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:2})}>
                <Icon.MaterialCommunityIcons name="alarm-light" size={24} />
                <Text>Emergency</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainview}>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 3 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:3})}>
                <Icon.MaterialCommunityIcons name="hammer-wrench" size={24} />
                <Text>Planned Works</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 4 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:4})}>
                <Icon.Foundation name="clipboard-pencil" size={24} />
                <Text>Survey</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.mainview}>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 5 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:5})}>
                <Icon.FontAwesome name="users" size={24} />
                <Text>Meeting</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 6 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:6})}>
                <Icon.Entypo name="dots-three-horizontal" size={24} />
                <Text>Others</Text>
              </TouchableOpacity>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Status of Health"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnText={<Icon.Ionicons name="arrow-forward" size={25} />}
            previousBtnText={<Icon.Ionicons name="arrow-back" size={25} />}
            nextBtnTextStyle={styles.leftbtntext}
            nextBtnStyle={styles.leftbtn}
            previousBtnStyle={styles.leftbtn}
            previousBtnTextStyle={styles.leftbtntext}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginBottom: 60,
              }}>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 7 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:7})}>
                <Icon.MaterialCommunityIcons name="medical-bag" size={24} />
                <Text>Very Poor</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 8 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:8})}>
                <Icon.MaterialCommunityIcons name="medical-bag" size={24} />
                <Text>Poor</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 60,
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 9 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:9})}>
                <Icon.MaterialCommunityIcons name="medical-bag" size={24} />
                <Text>Good</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 10 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:10})}>
                <Icon.MaterialCommunityIcons name="medical-bag" size={24} />

                <Text>Very Good</Text>
              </TouchableOpacity>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Time on Site"
            onNext={this.onNextStep}
            onPrevious={this.onPrevStep}
            scrollViewProps={this.defaultScrollViewProps}
            nextBtnText={<Icon.Ionicons name="arrow-forward" size={25} />}
            previousBtnText={<Icon.Ionicons name="arrow-back" size={25} />}
            nextBtnTextStyle={styles.leftbtntext}
            nextBtnStyle={styles.leftbtn}
            previousBtnStyle={styles.leftbtn}
            previousBtnTextStyle={styles.leftbtntext}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                marginBottom: 60,
              }}>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 11 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:11})}>
                <Icon.MaterialCommunityIcons
                  name="clock-time-seven"
                  size={24}
                />
                <Text>0-1 Hours</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 12 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:12})}>
                <Icon.MaterialCommunityIcons
                  name="clock-time-seven"
                  size={24}
                />
                <Text>1-2 Hours</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 60,
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 13 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:13})}>
                <Icon.MaterialCommunityIcons
                  name="clock-time-seven"
                  size={24}
                />
                <Text>2-3 Hours</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 14 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:14})}>
                <Icon.MaterialCommunityIcons
                  name="clock-time-seven"
                  size={24}
                />
                <Text>3 or More Hours</Text>
              </TouchableOpacity>
            </View>
          </ProgressStep>
          <ProgressStep
            label="PPE Equipment Available"
            onPrevious={this.onPrevStep}
            onSubmit={this.onSubmitSteps}
            scrollViewProps={this.defaultScrollViewProps}
            finishBtnText={
              <Icon.Ionicons name="checkmark-done-sharp" size={25} />
            }
            previousBtnText={<Icon.Ionicons name="arrow-back" size={25} />}
            nextBtnTextStyle={styles.leftbtntext}
            nextBtnStyle={styles.leftbtn}
            previousBtnStyle={styles.leftbtn}
            previousBtnTextStyle={styles.leftbtntext}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
              }}>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 15 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:15})}>
                <Icon.Ionicons name="checkmark-sharp" size={24} />
                <Text>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{
                  backgroundColor: 'white',
                  alignItems: 'center',
                  width: 150,
                  height: 150,
                  justifyContent: 'center',
                  borderRadius: 100,
                  shadowColor: 'black',
                  shadowRadius: 10,
                  elevation: 10,
                  borderWidth: 2,
                  borderColor: this.state.count === 16 ? '#68CCA6' : 'white'
                }}
                onPress={()=> this.setState({count:16})}>
                <Icon.Entypo name="cross" size={24} />
                <Text>No</Text>
              </TouchableOpacity>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    );
  }
}

export default ExampleOne;
const styles = StyleSheet.create({
  mainview: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-evenly',
  },
  Circlebtn: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 150,
    height: 150,
    justifyContent: 'center',
    borderRadius: 100,
    shadowColor: 'black',
    shadowRadius: 10,
    elevation: 10,
    borderWidth: 2,
    borderColor: 'red',
  },
  leftbtntext: {
    color: 'white',
  },
  leftbtn: {
    backgroundColor: 'black',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
  },
});
