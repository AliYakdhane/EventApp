import React from 'react';
import Events from '../Components/events'
import EventsManger from '../Components/EventStack/eventsmanger'
import EventsCafe from '../Components/EventStack/eventscafe'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


const MyEventsStack = () => {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="event" component={Events} />
        <Stack.Screen name="eventmanger" component={EventsManger} />
        <Stack.Screen name="eventcafe" component={EventsCafe} />
      </Stack.Navigator>
    );
  }

  export default MyEventsStack