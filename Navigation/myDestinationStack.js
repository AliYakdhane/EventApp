import React from 'react';
import Destination from '../Components/destination'
import DestinationsManger from '../Components/DestinationStacks/destinationmanger'
import DestinationsCafe from '../Components/DestinationStacks/destinationcafe'
import DestEvents from '../Components/DestinationStacks/destevents'
import DestMenus from '../Components/DestinationStacks/destmenus'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


const MyDestinationStack = () => {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="destination" component={Destination} />
        <Stack.Screen name="destevents" component={DestEvents} />
        <Stack.Screen name="destmenus" component={DestMenus} />
        <Stack.Screen name="destinationmanger" component={DestinationsManger} />
        <Stack.Screen name="destinationcafe" component={DestinationsCafe} />
      </Stack.Navigator>
    );
  }

  export default MyDestinationStack