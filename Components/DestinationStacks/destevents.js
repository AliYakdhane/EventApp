import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Alert,
  Modal} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, {
    G,
    Path,
    Rect,
    Defs,
    Mask
  } from 'react-native-svg';


  const originalWidth = 375;
  const originalHeight = 127;
  const aspectRatio = originalWidth / originalHeight;
  const windowWidth = Dimensions.get("window").width;


const DestEvents = ({navigation}) => {

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
            <TouchableOpacity onPress={() => navigation.navigate('destination')}>
            <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 18, marginTop: 3 }}>
            <Path d="M0.622899 15.0998L8.92688 26.6149C9.78551 27.7742 11.1036 26.7499 11.1242 24.8584L11.1659 21.0383C11.1792 19.8144 11.6701 18.7441 12.3888 18.7519L25.7831 18.898C26.5018 18.9059 27.0995 18.0222 27.1133 16.7612L27.1788 10.7529C27.1918 9.56603 26.615 8.52115 25.8963 8.51331L12.5021 8.36722C11.7834 8.35938 11.3147 7.38949 11.3281 6.16595L11.3698 2.34586C11.39 0.491445 10.0946 -0.561279 9.23263 0.579191L0.704481 11.614C-0.00175939 12.4594 -0.0425501 14.2023 0.622899 15.0998Z" fill="#2C2C2C"/>
            </Svg>

        </TouchableOpacity>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2c2c2c' }}>Destinations</Text>

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

        


        

        

        <View style={{ flexDirection: 'column', marginTop: 60 }}>

            <Text style={{ fontWeight: 'bold', fontSize: 25, color: '#ffffff', textAlign: 'center', margin: 20 }}>Events</Text>
             <View style={styles.box1}>
          <Image
                style={styles.smallpic}
                source={require('../../assets/event1.png')}
            />
        <View style={styles.box2}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 10, marginLeft: 10, fontSize: 17, fontWeight: 'bold', alignSelf: 'center' }}>
                <Path d="M5.77862 10.457L5.54848 11.824C5.51711 12.0108 5.59378 12.1992 5.74677 12.3107C5.9 12.422 6.10347 12.4369 6.27088 12.3491L7.49983 11.7076L8.72879 12.3493C8.8015 12.387 8.88118 12.406 8.96002 12.406C9.06325 12.406 9.16625 12.3737 9.25314 12.3108C9.40624 12.1993 9.48316 12.011 9.45155 11.8241L9.22165 10.4572L10.2112 9.48646C10.3465 9.35391 10.3947 9.15609 10.3367 8.97606C10.2784 8.79615 10.1224 8.66443 9.93515 8.63679L8.56391 8.43345L7.9463 7.19211C7.86254 7.02266 7.689 6.91534 7.49971 6.91534C7.31079 6.91534 7.13737 7.02266 7.05288 7.19211L6.43588 8.43345L5.06463 8.63667C4.87703 8.66431 4.72176 8.79603 4.66335 8.97594C4.60494 9.15597 4.65302 9.35403 4.78858 9.48634L5.77862 10.457Z" fill="#2C2C2C"/>
                <Path d="M13.3932 2.39465H11.8231V1.52371C11.8231 1.12399 11.4991 0.799988 11.0992 0.799988H10.9844C10.5847 0.799988 10.2608 1.12399 10.2608 1.52371V2.39465H4.72092V1.52371C4.72092 1.12399 4.39691 0.799988 3.99732 0.799988H3.88242C3.48271 0.799988 3.15882 1.12399 3.15882 1.52371V2.39465H1.60694C0.785751 2.39465 0.117432 3.06273 0.117432 3.88416V14.3106C0.117432 15.1315 0.785751 15.8001 1.60694 15.8001H13.3933C14.2144 15.8001 14.8828 15.1317 14.8828 14.3106V3.88416C14.8827 3.06273 14.2143 2.39465 13.3932 2.39465ZM13.1989 14.1163H1.80127V5.99993H13.1989V14.1163Z" fill="#2C2C2C"/>
            </Svg>

                <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>Events</Text> 
            </View>
              
              <View style={{ flexDirection: 'row', }}>
                  <View style={{ flexDirection: 'column',  width: 40, height: 40, borderRadius: 10, backgroundColor: '#2c2c2c', alignSelf: 'center', marginLeft: 10, marginBottom: 10 }}>
                    <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 12, marginTop: 5 }}>12</Text>
                    <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 8 }}>DEC</Text>
                  </View>
                  <View style={{ flexDirection: 'column', marginLeft: 10}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color:'#2c2c2c'}}>NOD 4th anniversary w/Trikk,xxxx</Text> 
                  <Text style={{ fontSize: 10, color:'#2c2c2c', fontWeight:'bold'}}>The Treesome</Text> 
                  <Text style={{ fontSize: 10, color:'#604F4F', fontWeight:'bold', marginTop: 10}}>De 20:00 À 4:00</Text> 
                  </View>
                
                 
              </View>
              <TouchableOpacity
                style={{ width: 115, height: 35, backgroundColor: '#2c2c2c', alignSelf: 'flex-end', borderRadius: 20, marginRight: 20, marginTop: -20, flexDirection: 'column' }}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 10, color: '#ffffff', textAlign: 'center', paddingTop: 10 }}>Réserver</Text>
              </TouchableOpacity> 
        </View>
          </View>


          <View style={styles.box1}>
          <Image
                style={styles.smallpic}
                source={require('../../assets/event1.png')}
            />
        <View style={styles.box2}>
            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <Svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 10, marginLeft: 10, fontSize: 17, fontWeight: 'bold', alignSelf: 'center' }}>
                <Path d="M5.77862 10.457L5.54848 11.824C5.51711 12.0108 5.59378 12.1992 5.74677 12.3107C5.9 12.422 6.10347 12.4369 6.27088 12.3491L7.49983 11.7076L8.72879 12.3493C8.8015 12.387 8.88118 12.406 8.96002 12.406C9.06325 12.406 9.16625 12.3737 9.25314 12.3108C9.40624 12.1993 9.48316 12.011 9.45155 11.8241L9.22165 10.4572L10.2112 9.48646C10.3465 9.35391 10.3947 9.15609 10.3367 8.97606C10.2784 8.79615 10.1224 8.66443 9.93515 8.63679L8.56391 8.43345L7.9463 7.19211C7.86254 7.02266 7.689 6.91534 7.49971 6.91534C7.31079 6.91534 7.13737 7.02266 7.05288 7.19211L6.43588 8.43345L5.06463 8.63667C4.87703 8.66431 4.72176 8.79603 4.66335 8.97594C4.60494 9.15597 4.65302 9.35403 4.78858 9.48634L5.77862 10.457Z" fill="#2C2C2C"/>
                <Path d="M13.3932 2.39465H11.8231V1.52371C11.8231 1.12399 11.4991 0.799988 11.0992 0.799988H10.9844C10.5847 0.799988 10.2608 1.12399 10.2608 1.52371V2.39465H4.72092V1.52371C4.72092 1.12399 4.39691 0.799988 3.99732 0.799988H3.88242C3.48271 0.799988 3.15882 1.12399 3.15882 1.52371V2.39465H1.60694C0.785751 2.39465 0.117432 3.06273 0.117432 3.88416V14.3106C0.117432 15.1315 0.785751 15.8001 1.60694 15.8001H13.3933C14.2144 15.8001 14.8828 15.1317 14.8828 14.3106V3.88416C14.8827 3.06273 14.2143 2.39465 13.3932 2.39465ZM13.1989 14.1163H1.80127V5.99993H13.1989V14.1163Z" fill="#2C2C2C"/>
            </Svg>

                <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 17, fontWeight: 'bold', textAlign: 'center' }}>Events</Text> 
            </View>
              
              <View style={{ flexDirection: 'row', }}>
                  <View style={{ flexDirection: 'column',  width: 40, height: 40, borderRadius: 10, backgroundColor: '#2c2c2c', alignSelf: 'center', marginLeft: 10, marginBottom: 10 }}>
                    <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 12, marginTop: 5 }}>12</Text>
                    <Text style={{ textAlign: 'center', color: '#ffffff', fontSize: 8 }}>DEC</Text>
                  </View>
                  <View style={{ flexDirection: 'column', marginLeft: 10}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color:'#2c2c2c'}}>NOD 4th anniversary w/Trikk,xxxx</Text> 
                  <Text style={{ fontSize: 10, color:'#2c2c2c', fontWeight:'bold'}}>The Treesome</Text> 
                  <Text style={{ fontSize: 10, color:'#604F4F', fontWeight:'bold', marginTop: 10}}>De 20:00 À 4:00</Text> 
                  </View>
                
                 
              </View>
              <TouchableOpacity
                style={{ width: 115, height: 35, backgroundColor: '#2c2c2c', alignSelf: 'flex-end', borderRadius: 20, marginRight: 20, marginTop: -20, flexDirection: 'column' }}
              >
                <Text style={{ fontWeight: 'bold', fontSize: 10, color: '#ffffff', textAlign: 'center', paddingTop: 10 }}>Réserver</Text>
              </TouchableOpacity> 
        </View>
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
    box1: {
        width: '90%',
        height: 240,
        backgroundColor: '#FCE7E7',
        alignSelf: "center",
        margin: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        shadowOffset: {
          width: 0,
          height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
      },
      box2: {
        width: '100%',
        height: 120,
        backgroundColor: '#ffffff',
        alignSelf: "center",
        margin: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        bottom: -20,
        position: 'absolute',
        flexDirection: 'column',
        shadowOffset: {
          width: 0,
          height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
      },
      smallpic: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 20
      },
     story: {
      width: 61,
      height: 61,
      borderRadius: 61/2,
    },
    minicircle: {
      width: 25,
      height: 25,
      borderRadius: 25/2,
      backgroundColor: '#2c2c2c',
      borderRadius: 50,
      marginTop: -25,
      alignSelf: 'flex-end',
      shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 100,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        elevation: 4, 
    }, 
    circle: {
      borderWidth: 3, 
      borderColor: '#ffffff',
      alignSelf: 'center',
      width: 67,
      height: 67,
      borderRadius: 67/2,
      
    },
    circle1: {
      borderWidth: 3,
      borderColor: '#FA4A0C',
      alignSelf: 'center',
      width: 67,
      height: 67,
      borderRadius: 67/2,
      marginLeft: 5
    },
    story1: {
      width: 61,
      height: 61,
      borderRadius: 61/2,
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50
    },
    modalView: {
      margin: 20,
      backgroundColor: "#FA4A0C",
      borderRadius: 50,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      fontWeight: 'bold',
      textAlign: "center",
      color: '#ffffff'
    },
    buttonWrapper: {
      backgroundColor: '#ffffff',
      margin: 20,
      width: 200,
      alignSelf: 'center',
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
      color: "#2c2c2c",
      fontWeight: 'bold'
    },
})

export default DestEvents
