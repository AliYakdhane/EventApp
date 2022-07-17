import React from 'react';
import Home from '../Components/home'
import Commander from '../Components/HomeStacks/commander'
import CommanderPizza from '../Components/HomeStacks/commanderpizza'
import CommanderPasta from '../Components/HomeStacks/commanderpasta'
import CommanderChicken from '../Components/HomeStacks/commanderchicken'
import CommanderBurger from '../Components/HomeStacks/commanderburger'
import CommanderTacos from '../Components/HomeStacks/commandertacos'
import CommanderPoissonFm from '../Components/HomeStacks/commanderpoissonfm'
import HomeManger from '../Components/HomeStacks/homemanger'
import HomeCafe from '../Components/HomeStacks/homecafe'

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


const MyHomeStack = () => {
  
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="homemanger" component={HomeManger} />
        <Stack.Screen name="homecafe" component={HomeCafe} />
        <Stack.Screen name="commander" component={Commander} />
        <Stack.Screen name="commanderpizza" component={CommanderPizza} />
        <Stack.Screen name="commanderpasta" component={CommanderPasta} />
        <Stack.Screen name="commanderchicken" component={CommanderChicken} />
        <Stack.Screen name="commanderburger" component={CommanderBurger} />
        <Stack.Screen name="commandertacos" component={CommanderTacos} />
        <Stack.Screen name="commanderpoissonfm" component={CommanderPoissonFm} />
      </Stack.Navigator>
    );
  }

  export default MyHomeStack