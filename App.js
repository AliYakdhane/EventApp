import { StatusBar } from 'expo-status-bar';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import OnBoarding from './Components/onBoarding';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './Navigation/myStack'
import MyTab from './Navigation/myTab'
import { AuthContext } from './Components/context'
import MyDrawer from './Navigation/myDrawer'

const App = () => {


  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  const authContext = React.useMemo(() => ({
    SignIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    SignOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    SignUp: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
  }));


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  }, [])

  if (isLoading) {
    return(
<View style={{flex:1, justifyContent: 'center', alignItems: 'center'}} >
  <ActivityIndicator  size='large'/>
</View>
    )
    
  }


  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
    { userToken == null ? (
        <MyStack />
      ) : <MyDrawer /> }
      <StatusBar style="auto" hidden />
    </NavigationContainer>
    </AuthContext.Provider>
  );
}



export default App
