import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView } from 'react-native'
import Svg, {
    G,
    Path,
    Rect,
    Defs,
  } from 'react-native-svg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from './context'


    const originalWidth = 374;
    const originalHeight = 388;
    const aspectRatio = originalWidth / originalHeight;
    const windowWidth = Dimensions.get("window").width;

const Auth = ({navigation}) => {

    const { SignIn } = React.useContext(AuthContext)

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator ={false}>
                <View style={{flexDirection: 'column', justifyContent:'space-around', marginTop: 50}}>
            <Image
                style={styles.pic}
                source={require('../assets/friends.png')}
            />
            <Text style={styles.title}>Nous vous guidons à trouver {"\n"} les meilleurs endroits pour divertir</Text>
                </View>
            
            <Text style={{color: '#ffffff', opacity: 0.1 }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's
                  
                  </Text>
            <View style={{ width: windowWidth, aspectRatio }}> 
            <Svg width="100%" height="100%" viewBox={`0 0 ${originalWidth} ${originalHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position:'absolute', }}>
                <Path d="M0 15.5638C0 15.5638 4.89047 224.835 157.5 87.0638C310.11 -50.7069 373.568 16.5312 375 15.5638V439.564H0V15.5638Z" fill="#2C2C2C" />
                <View style={{ flexDirection: 'column', justifyContent: 'space-between', marginTop: 120 }}>

                <Text style={styles.subtitle}>
                    Créer un compte pour ne pas manquer {"\n"} aucun événnement
                    </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginLeft: 50, marginRight: 50 }}>
                    <TouchableOpacity style={styles.buttongoogle} onPress={() => {SignIn()}}>
                    <Svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: 12, color: '#2c2c2c' }}>
                        <Path d="M13.5 27C20.952 27 27 20.952 27 13.5C27 6.048 20.952 0 13.5 0C6.048 0 0 6.048 0 13.5C0 20.952 6.048 27 13.5 27ZM18.3184 12.5359H20.2511V10.6042H22.1839V12.537H24.0998V14.4698H22.1839V16.4025H20.2511V14.4698H18.3184V12.5359ZM9.65138 6.74888C11.3546 6.74888 12.9229 7.3485 14.1705 8.50725L12.3413 10.2825C11.6224 9.57938 10.638 9.243 9.65138 9.243C7.31588 9.243 5.44837 11.1757 5.44837 13.4944C5.44837 15.813 7.31025 17.7458 9.65138 17.7458C11.4255 17.7458 13.1839 16.7062 13.4674 14.8444H9.65138V12.5258H16.0155C16.0864 12.8959 16.119 13.266 16.119 13.6519C16.119 17.5061 13.5326 20.2489 9.65138 20.2489V20.25C5.90625 20.25 2.90025 17.2283 2.90025 13.4989C2.90025 9.7695 5.90625 6.74888 9.65138 6.74888Z" fill="#2C2C2C"/>
                    </Svg>
                        
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonfacebook} onPress={() => {SignIn()}}>
                    <Svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: 12, color: '#2c2c2c' }}>
                        <Path d="M27 13.5C27 6.04336 20.9566 0 13.5 0C6.04336 0 0 6.04336 0 13.5C0 20.9566 6.04336 27 13.5 27C13.5791 27 13.6582 27 13.7373 26.9947V16.49H10.8369V13.1098H13.7373V10.6207C13.7373 7.73613 15.4986 6.16465 18.0721 6.16465C19.3061 6.16465 20.366 6.2543 20.6719 6.29648V9.31289H18.9C17.5025 9.31289 17.2283 9.97734 17.2283 10.9529V13.1045H20.577L20.1393 16.4848H17.2283V26.4779C22.8709 24.859 27 19.6646 27 13.5Z" fill="#2C2C2C"/>
                    </Svg>
                    
                    </TouchableOpacity>

                </View>

                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ffffff', textAlign: 'center',  }}>Ou</Text>

                <TouchableOpacity 
                onPress={() => navigation.navigate('/signin')}
                style={{ width: 189, height: 43, backgroundColor: '#ffffff', alignSelf: 'center', borderRadius: 30, marginTop: 10 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#2c2c2c', textAlign: 'center', padding: 7  }}>Sign In</Text>
                </TouchableOpacity>
                
                </View>
            </Svg>
            
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    pic: {
        width: 353,
        height: 222,
        alignSelf: 'center',
        marginTop: 40,
      },
      title: {
          fontSize: 25,
          fontWeight: 'bold',
          color: '#2c2c2c',
          textAlign: 'center',
          alignSelf: 'center',
          marginTop: 80
      },
      subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center',
        marginTop: 50
      },
      buttongoogle: {
        width: 50,
        marginTop: 20,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 50/2, 
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 100,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 4, 
      },
      buttonfacebook: {
        width: 50,
        marginTop: 20,
        height: 50,
        backgroundColor: '#ffffff',
        borderRadius: 50/2,
        alignSelf: 'center', 
        flexDirection: 'row',
        justifyContent: 'space-around',
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 100,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 4, 
      }
})

export default Auth
