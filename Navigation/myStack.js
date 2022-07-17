import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding from '../Components/onBoarding'
import Auth from '../Components/auth'
import Home from '../Components/home'
import SignIn from '../Components/Sign/signin'
import SignUp from '../Components/Sign/signup'


const Stack = createStackNavigator();



const MyStack = () => {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="onboarding" component={OnBoarding} />
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen name="signin" component={SignIn} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    );
  }


 

  export default MyStack