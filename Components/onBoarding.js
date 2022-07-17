import React, {useRef, useState, useEffect} from 'react';
import {Text, View, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity, Animated } from 'react-native'
import Constants from 'expo-constants';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();



function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }



const OnBoarding =({navigation}) => {


    let animation = useRef(new Animated.Value(0));
  const [progress, setProgress] = useState(0);
  useInterval(() => {
    // update progress until 100
    if(progress < 100) {
      setProgress(progress + 25);
    }
  }, 1000);

  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('auth')
      }, 5500);
    Animated.timing(animation.current, {
      toValue: progress,
      duration: 100,
    }).start();
  },[progress])



  const width = animation.current.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
    extrapolate: "clamp"
  })

    return(
        <View style={styles.container}>
        <ImageBackground source={require('../assets/onboarding.jpg')} style={styles.image}>
        

            <Text style={styles.title}>Events {"\n"}Chaser</Text>

            <View style={styles.footer}>
            <View style={styles.loading}>
                <Text style={{ fontWeight: 'bold', fontSize: 25, color :'#ffffff', textAlign: 'center', marginBottom: 10 }}>
                    Loading…
                </Text>
                <View style={styles.progressBar}>
                    <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: "#2c2c2c", width, borderRadius: 30, }]}/>
                    
                </View>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color :'#ffffff' }}>
                    {`${progress}%`}
                </Text>

                </View>
            </View>
            
        </ImageBackground>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        flexDirection: 'column',
        justifyContent: 'space-around',
      },
     tinyLogo: {
        width: 73,
        height: 73,
        marginTop: 20,
        marginLeft: 18
      },
      title: {
          fontSize: 60,
          color: '#ffffff',
          fontWeight: 'bold', 
          marginBottom: 130,
          marginLeft: 10,
          justifyContent: 'flex-start',
          textAlign: 'left'
      },
      footer: {
        flexDirection: 'column'
      },
      button: {
        width: '70%',
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 40,
        alignSelf: 'center', 
        flexDirection: 'column',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 100,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 4, 
      },
      textbutton: {
          color: '#FF460A', 
          textAlign: 'center',
          padding: 14,
          fontSize: 17,
          alignSelf: 'center'
          
      },
      loading: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight,
        padding: 8,
        marginBottom: 50
      },
      progressBar: {
        flexDirection: 'row',
        height: 30,
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 30,
        marginBottom: 5
      }
  });


export default OnBoarding