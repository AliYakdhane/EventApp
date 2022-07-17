import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Alert,
  Modal, TextInput} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context'
import Svg, {
    G,
    Line,
    Path,
    Rect,
    Defs,
    Mask
  } from 'react-native-svg';
  import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    TouchableRipple,
    Switch
} from 'react-native-paper';


  const originalWidth = 375;
  const originalHeight = 127;
  const aspectRatio = originalWidth / originalHeight;
  const windowWidth = Dimensions.get("window").width;


const EditProfile = ({navigation}) => {

    const [name, setName] = useState();  
    const [user, setUser] = useState();
    const [newpassword, setNewPassword] = useState();

    const { SignOut } = React.useContext(AuthContext)
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");

    return (
    <SafeAreaView style={styles.container}>

<ScrollView showsVerticalScrollIndicator ={false}>

<View style={{ width: windowWidth, aspectRatio }}> 

<Svg width="100%" height="100%" viewBox={`0 0 ${originalWidth} ${originalHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M375.037 122.64C375.037 122.64 359.61 63.7556 211.055 102.878C62.5 142 1.47118 120.73 0.037418 122.304L0.646447 -558L375.646 -557.664L375.037 122.64Z" fill="white"/>

</Svg>

</View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: -90}}>
            <TouchableOpacity onPress={() => navigation.navigate('profile')}>
            <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 18, marginTop: 3 }}>
            <Path d="M0.622899 15.0998L8.92688 26.6149C9.78551 27.7742 11.1036 26.7499 11.1242 24.8584L11.1659 21.0383C11.1792 19.8144 11.6701 18.7441 12.3888 18.7519L25.7831 18.898C26.5018 18.9059 27.0995 18.0222 27.1133 16.7612L27.1788 10.7529C27.1918 9.56603 26.615 8.52115 25.8963 8.51331L12.5021 8.36722C11.7834 8.35938 11.3147 7.38949 11.3281 6.16595L11.3698 2.34586C11.39 0.491445 10.0946 -0.561279 9.23263 0.579191L0.704481 11.614C-0.00175939 12.4594 -0.0425501 14.2023 0.622899 15.0998Z" fill="#2C2C2C"/>
            </Svg>
        </TouchableOpacity>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2c2c2c' }}>Profile</Text>

            <TouchableOpacity >
            <Svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 20 }}>
            <Path d="M3.2168 26.209C3.2168 26.6458 3.57096 27 4.00781 27H22.9922C23.429 27 23.7832 26.6458 23.7832 26.209V23.7832H3.2168V26.209Z" fill="#2C2C2C"/>
            <Path d="M13.5 6.32812C9.13834 6.32812 5.58984 9.87662 5.58984 14.2383V22.2012H21.4102V14.2383C21.4102 9.87662 17.8617 6.32812 13.5 6.32812Z" fill="#2C2C2C"/>
            <Path d="M13.4473 4.74609C13.8841 4.74609 14.2383 4.39193 14.2383 3.95508V0.791016C14.2383 0.354164 13.8841 0 13.4473 0C13.0104 0 12.6562 0.354164 12.6562 0.791016V3.95508C12.6562 4.39193 13.0104 4.74609 13.4473 4.74609Z" fill="#2C2C2C"/>
            <Path d="M7.21899 5.86415C7.4381 6.24368 7.92226 6.37146 8.29952 6.15366C8.67789 5.93524 8.80751 5.45145 8.58903 5.07314L7.007 2.33301C6.78852 1.95464 6.30479 1.82507 5.92647 2.04349C5.54811 2.26192 5.41848 2.74571 5.63696 3.12402L7.21899 5.86415Z" fill="#2C2C2C"/>
            <Path d="M26.5649 7.57352C26.3465 7.19515 25.8628 7.06564 25.4844 7.28401L22.7442 8.86604C22.3659 9.08447 22.2362 9.56825 22.4547 9.94657C22.6738 10.3261 23.158 10.4539 23.5352 10.2361L26.2754 8.65405C26.6538 8.43562 26.7834 7.95189 26.5649 7.57352Z" fill="#2C2C2C"/>
            <Path d="M4.54528 9.94652C4.76376 9.56821 4.63414 9.08442 4.25577 8.866L1.51559 7.28397C1.13722 7.06549 0.653432 7.19511 0.435059 7.57348C0.21658 7.95179 0.346201 8.43558 0.724571 8.65401L3.46475 10.236C3.84144 10.4536 4.32591 10.3265 4.54528 9.94652Z" fill="#2C2C2C"/>
            <Path d="M18.7005 6.15368C19.0771 6.37121 19.5616 6.24412 19.781 5.86417L21.363 3.12404C21.5815 2.74572 21.4519 2.26194 21.0735 2.04351C20.6952 1.82498 20.2114 1.95465 19.993 2.33302L18.411 5.07315C18.1925 5.45147 18.3221 5.93526 18.7005 6.15368Z" fill="#2C2C2C"/>
            </Svg>
        </TouchableOpacity> 
        </View>

        

        


        

        <View style={{ flexDirection: 'column', justifyContent:'center', marginTop: 80  }}>

        <View style={{flexDirection:'column', alignItems: 'center'}}>
                        <TouchableOpacity>
                            <Avatar.Image 
                                source={require('../../assets/man.jpg')}
                                size={150}
                            />
                        </TouchableOpacity>
                            
                            <TouchableOpacity 
                        style={{flexDirection:'column', width: '80%', height: 50, backgroundColor: '#FA4A0C', borderRadius: 30, alignSelf: 'center', marginTop: 15}}>
                                <Text style={{ fontWeight:'bold', fontSize: 15, color: '#ffffff', alignSelf: 'center', padding: 15 }}>Changer La Photo de Profil</Text>
                                
                        </TouchableOpacity>
        </View>

        <View style={styles.form}>

                    <TextInput
                        labelValue={user}
                        placeholder="Nom d'utilisteur"
                        placeholderTextColor="#ffffff"
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
                        opacity={0.8}
                    />
                    <TextInput
                        labelValue={name}
                        placeholder="Name"
                        placeholderTextColor="#ffffff"
                        onChangeText={(userName) => setName(userName)}
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
                        opacity={0.8}
                    />
                    <TextInput
                        labelValue={newpassword}
                        placeholder="New Password"
                        placeholderTextColor="#ffffff"
                        onChangeText={(newPassword) => setNewPassword(newPassword)}
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
                        opacity={0.8}
                    />
                    

                    <TouchableOpacity 
                    style={styles.buttonWrapper}
                    >
                        <Text style={styles.buttonText}> Enregistrer </Text>
                    </TouchableOpacity>



                </View>

                        

                        

                
                
                
          
        </View>

        

       </ScrollView>
        
    </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c2c2c'
    },
    form: {
        width: 300,
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    inputText: {
        padding: 10,
        color: '#ffffff'
    },
    inputText2: {
        padding: 10,
        marginTop: 30,
        color: '#ffffff'
    },
    buttonWrapper: {
        backgroundColor: '#FA4A0C',
        marginTop: 40,
        alignSelf: 'center',
        height: 50,
        width: '50%',
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
        fontSize: 14,
        fontWeight: 'bold',
        padding: 15,
        textAlign: 'center',
        color: "#FFFFFF"
    },
      title: {
          marginTop: 100,
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#2c2c2c'
      },
      buttonText2: {
        textAlign: 'center',
        fontWeight: 'bold',
        color:'#FA4A0C',
        marginTop: 10,
        fontSize: 17
      }
})

export default EditProfile
