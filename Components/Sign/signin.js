import React, { useState } from 'react';
import {Text, View, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native'
import { AuthContext } from '../context'

const SignIn =({navigation}) => {


    const { SignIn } = React.useContext(AuthContext)

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return(
        <View style={styles.container}>
        <View>
        <Image
                style={styles.pic}
                source={require('../../assets/signinpic.png')}
            />
        </View>

        <Text style={styles.title}>Welcome Back</Text>

        <View style={styles.form}>
                    <TextInput
                        labelValue={email}
                        placeholder="Email adress"
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputText}
                    />
                    <View
                        style={{
                        borderBottomColor: '#808080',
                        borderBottomWidth: 1,
                        width: 280,
                        alignSelf: "center"
                        }}
                        opacity={0.5}
                    />
                    <TextInput
                        labelValue={password}
                        placeholder="Password"
                        onChangeText={(userPassword) => setPassword(userPassword)}
                        style={styles.inputText2}
                        secureTextEntry={true}
                    />
                    <View
                        style={{
                        borderBottomColor: '#808080',
                        borderBottomWidth: 1,
                        width: 280,
                        alignSelf: "center"
                        }}
                        opacity={0.5}
                    />

                    <TouchableOpacity 
                    style={styles.buttonWrapper}
                    onPress={() => {SignIn()}}
                    >
                        <Text style={styles.buttonText}> Sign In </Text>
                    </TouchableOpacity>

                    <Text style={styles.subtext}>You don’t have an account ?</Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('signup')}
                    >
                        <Text style={styles.buttonText2}> Sign Up </Text>
                    </TouchableOpacity>


                </View>

        </View>
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
        marginTop: 40,
        alignSelf: "center"
    },
    form: {
        width: 300,
        alignSelf: 'center',
        marginBottom: 80
    },
    inputText: {
        padding: 10,
    },
    inputText2: {
        padding: 10,
        marginTop: 30
    },
    buttonWrapper: {
        backgroundColor: '#2c2c2c',
        marginTop: 40,
        width: 300,
        borderRadius: 30,
        shadowColor: "#303131",
        shadowOffset: {
	        width: 0,
	        height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 2,
    },
    buttonText: {
        fontSize: 20,
        padding: 10,
        textAlign: 'center',
        color: "#FFFFFF"
    },
      title: {
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#2c2c2c'
      },
      subtext: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10
      },
      buttonText2: {
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#FA4A0C',
        marginTop: 10,
        fontSize: 17
      }
  });


export default SignIn