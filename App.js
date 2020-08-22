
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Main from './screens/Main';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';
import ProgressSteps from './screens/ProgressSteps';
import SiteStatus from './screens/SiteStatus';

const Stack = createStackNavigator();
  
export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>

      <Stack.Screen options={{headerShown: false}} name="Main" component={Main} />
      <Stack.Screen options={{headerShown: false}} name="SignUp" component={SignUp} />
      <Stack.Screen options={{headerShown: false}} name="LogIn" component={LogIn} />
      <Stack.Screen options={{headerShown: false}} name="ProgressSteps" component={ProgressSteps} />
      <Stack.Screen options={{headerShown: false}} name="SiteStatus" component={SiteStatus} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}