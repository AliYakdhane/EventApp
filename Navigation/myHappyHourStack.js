import React from 'react';
import HappyHour from '../Components/happyhour'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


const MyHappyHourStack = () => {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="happyhour" component={HappyHour} />
      </Stack.Navigator>
    );
  }

  export default MyHappyHourStack