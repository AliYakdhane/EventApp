import React, { useState } from 'react';
import {Text, View, StyleSheet, ImageBackground, ScrollView, Image, TouchableOpacity, TextInput} from 'react-native'
import { AuthContext } from '../context'

const SignUp =({navigation}) => {


    const { SignIn } = React.useContext(AuthContext)

    const [user, setUser] = useState();
    const [email, setEmail] = useState();  
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();

    return(
        <ScrollView style={styles.container}>
        <View>
        <Image
                style={styles.pic}
                source={require('../../assets/signuppic.png')}
            />
        </View>

        <Text style={styles.title}>Create account</Text>

        <View style={styles.form}>
                    <TextInput
                        labelValue={user}
                        placeholder="User Name"
                        onChangeText={(userUser) => setUser(userUser)}
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
                        labelValue={email}
                        placeholder="Email"
                        onChangeText={(userEmail) => setEmail(userEmail)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        style={styles.inputText2}
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
                    <TextInput
                        labelValue={confirmpassword}
                        placeholder="Confirm Password"
                        onChangeText={(userConfirmPassword) => setConfirmpassword(userConfirmPassword)}
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
                        <Text style={styles.buttonText}> Sign Up </Text>
                    </TouchableOpacity>



                </View>

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    pic: {
        width: 353,
        height: 222,
        marginTop: 50,
        alignSelf: "center"
    },
    form: {
        width: 300,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30
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
          marginTop: 50,
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


export default SignUp