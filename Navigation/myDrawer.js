import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from '../Components/drawerContent'


import MyTab from './myTab'
import Profile from '../Components/Profile/profile'
import EditProfile from '../Components/Profile/editprofile'
import Shop from '../Components/HomeStacks/shop'

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} >
      <Drawer.Screen name="Home" component={MyTab} />
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="editprofile" component={EditProfile} />
      <Drawer.Screen name="shop" component={Shop} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;