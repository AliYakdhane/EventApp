import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MyStack from "./myStack"
import MyHomeStack from './myHomeStack'
import MyEventsStack from './myEventsStack'
import MyDestinationStack from './myDestinationStack'
import MyHappyHourStack from './myHappyHourStack'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const MyTab = () => {
  
    return ( 
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Events') {
              iconName = focused ? 'calendar' : 'calendar';
            } else if (route.name === 'Destination') {
              iconName = focused ? 'fast-food' : 'fast-food';
            } else if (route.name === 'Happy Hour') {
                iconName = focused ? 'wine' : 'wine';
            } 
            

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          style:{
            backgroundColor: '#ffffffff',
            borderRadius: 30,
            marginBottom: 20,
            marginLeft: 20,
            width: '90%',
            position: 'absolute',
          }
        }}>
          <Tab.Screen name="Home" component={MyHomeStack} />
        <Tab.Screen name="Events" component={MyEventsStack} />
        <Tab.Screen name="Destination" component={MyDestinationStack} />
        <Tab.Screen name="Happy Hour" component={MyHappyHourStack} />
        </Tab.Navigator>
    );
  }

  export default MyTab