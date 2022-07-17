import React, { useState,useEffect } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Alert,
  Modal, TextInput} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, {
    G,
    Path,
    Line,
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

  


const CommanderPasta = ({navigation}) => {

    const [text, setText] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [modalVisible1, setModalVisible1] = useState(false);
    const [selectedValue1, setSelectedValue1] = useState("");

    

    return (
    <SafeAreaView style={styles.container}>

<ScrollView showsVerticalScrollIndicator ={false}>

<View style={{ width: windowWidth, aspectRatio }}> 

<Svg width="100%" height="100%" viewBox={`0 0 ${originalWidth} ${originalHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
<Path d="M375.037 122.64C375.037 122.64 359.61 63.7556 211.055 102.878C62.5 142 1.47118 120.73 0.037418 122.304L0.646447 -558L375.646 -557.664L375.037 122.64Z" fill="white"/>

</Svg>

</View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: -90}}>
            <TouchableOpacity onPress={() => navigation.navigate('commander')}>
            <Svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 18, marginTop: 3 }}>
            <Path d="M0.622899 15.0998L8.92688 26.6149C9.78551 27.7742 11.1036 26.7499 11.1242 24.8584L11.1659 21.0383C11.1792 19.8144 11.6701 18.7441 12.3888 18.7519L25.7831 18.898C26.5018 18.9059 27.0995 18.0222 27.1133 16.7612L27.1788 10.7529C27.1918 9.56603 26.615 8.52115 25.8963 8.51331L12.5021 8.36722C11.7834 8.35938 11.3147 7.38949 11.3281 6.16595L11.3698 2.34586C11.39 0.491445 10.0946 -0.561279 9.23263 0.579191L0.704481 11.614C-0.00175939 12.4594 -0.0425501 14.2023 0.622899 15.0998Z" fill="#2C2C2C"/>
            </Svg>
        </TouchableOpacity>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2c2c2c'}}>Home</Text>


        <TouchableOpacity onPress={() => navigation.navigate('shop')} >
        <Svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 20 }}>
        <Path d="M20.4618 20.3852C18.734 20.3852 17.3092 21.8481 17.3092 23.6926C17.3092 25.5053 18.7036 27 20.4618 27C22.1897 27 23.6145 25.5371 23.6145 23.6926C23.5842 21.8799 22.1897 20.3852 20.4618 20.3852Z" fill="#2C2C2C"/>
        <Path d="M26.0093 4.61131C25.9487 4.61131 25.8577 4.57951 25.7668 4.57951H6.66905L6.36592 2.44876C6.18403 1.04947 5.0321 0 3.66798 0H1.21256C0.54565 0 0 0.572438 0 1.27208C0 1.97173 0.54565 2.54417 1.21256 2.54417H3.66798C3.81955 2.54417 3.9408 2.67138 3.97112 2.83039L5.85058 16.2509C6.09309 17.9364 7.48753 19.2085 9.12448 19.2085H21.7351C23.3114 19.2085 24.6755 18.0318 25.009 16.4099L26.9794 6.07421C27.1006 5.40636 26.6762 4.73852 26.0093 4.61131Z" fill="#2C2C2C"/>
        <Path d="M12.7319 23.5336C12.6712 21.7845 11.2768 20.3852 9.60955 20.3852C7.85134 20.4806 6.51753 22.0071 6.57816 23.8198C6.63879 25.5689 8.00291 26.9682 9.67018 26.9682H9.7308C11.4587 26.8728 12.8228 25.3463 12.7319 23.5336Z" fill="#2C2C2C"/>
        </Svg>


        </TouchableOpacity>

        </View>


        <View style={{ flexDirection: 'row', marginTop: 60, alignSelf: 'flex-end' }}>
          <TouchableOpacity>
            <Svg width="18" height="26" viewBox="0 0 18 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M8.74899 0C4.06253 0 0.249634 3.8129 0.249634 8.49935C0.249634 9.90623 0.601377 11.3011 1.27005 12.5384L8.2842 25.2241C8.37757 25.3932 8.55551 25.498 8.74899 25.498C8.94246 25.498 9.1204 25.3932 9.21378 25.2241L16.2305 12.5342C16.8966 11.3011 17.2483 9.90618 17.2483 8.4993C17.2483 3.8129 13.4354 0 8.74899 0ZM8.74899 12.749C6.40576 12.749 4.49934 10.8426 4.49934 8.49935C4.49934 6.15613 6.40576 4.2497 8.74899 4.2497C11.0922 4.2497 12.9986 6.15613 12.9986 8.49935C12.9986 10.8426 11.0922 12.749 8.74899 12.749Z" fill="#FA4A0C"/>
            </Svg>
          </TouchableOpacity>


          <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Sélectionner Une Région :</Text>

            <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 155, alignSelf: "center", color: '#ffffff' }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Ariana" value="ariana" />
        <Picker.Item label="Ben Arous" value="benarous" />
        <Picker.Item label="Bizerte" value="bizerte" />
        <Picker.Item label="Beja" value="beja" />
        <Picker.Item label="Gabes" value="gabes" />
        <Picker.Item label="Gafsa" value="gafsa" />
        <Picker.Item label="Jendouba" value="jendouba" />
        <Picker.Item label="Kairouan" value="kairouan" />
        <Picker.Item label="Kasserine" value="kasserine" />
        <Picker.Item label="Kebili" value="kebili" />
        <Picker.Item label="La Manouba" value="lamanouba" />
        <Picker.Item label="Le Kef" value="lekef" />
        <Picker.Item label="Mahdia" value="mahdia" />
        <Picker.Item label="Monastir" value="monastir" />
        <Picker.Item label="Medenine" value="medenine" />
        <Picker.Item label="Nabeul" value="nabeul" />
        <Picker.Item label="Sfax" value="sfax" />
        <Picker.Item label="Sidi Bouzid" value="sidibouzid" />
        <Picker.Item label="Siliana" value="siliana" />
        <Picker.Item label="Sousse" value="sousse" />
        <Picker.Item label="Tataouine" value="tataouine" />
        <Picker.Item label="Tozeur" value="tozeur" />
        <Picker.Item label="Tunis" value="tunis" />
        <Picker.Item label="Zaghouan" value="zaghouan" />
      </Picker>

            <TouchableOpacity
              style={ styles.buttonWrapper }
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >


              <Text style={styles.buttonText}>GO</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 10, marginRight: 10 }}>
            <Path d="M12.251 18.0133C15.9989 18.0133 19.0372 14.975 19.0372 11.2271C19.0372 7.47922 15.9989 4.44095 12.251 4.44095C8.50311 4.44095 5.46484 7.47922 5.46484 11.2271C5.46484 14.975 8.50311 18.0133 12.251 18.0133Z" fill="white"/>
            <Path d="M20.225 3.30292C18.0951 1.17301 15.2632 0 12.251 0C9.2388 0 6.40687 1.17301 4.27696 3.30292C2.14701 5.43292 0.973999 8.2648 0.973999 11.277C0.973999 16.5911 4.68912 21.179 9.85025 22.297L12.251 25.498L14.6518 22.2969C19.8129 21.1789 23.528 16.5911 23.528 11.277C23.528 8.2648 22.355 5.43292 20.225 3.30292ZM12.251 2.944C16.8183 2.944 20.5341 6.65982 20.5341 11.2271C20.5341 15.7944 16.8183 19.5102 12.251 19.5102C7.68367 19.5102 3.96789 15.7944 3.96789 11.2271C3.96789 6.65982 7.68367 2.944 12.251 2.944Z" fill="white"/>
        </Svg>
      </TouchableOpacity>
    </View>

        </View>

        <View style={{ flexDirection: 'column', marginTop: 10 }}>
                    <View 
                    style={{ width: 60, height: 60, borderRadius: 60/2, backgroundColor: '#ffffff', alignSelf: 'center' }}>
                    <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ alignSelf: 'center', marginTop: 8 }}>
                    <Path d="M19.4473 11.6667C20.8323 11.6714 22.1613 10.9832 23.138 9.75585C23.8653 8.8421 24.8548 8.32991 25.886 8.33335H40V3.33335H25.886C24.8548 3.33679 23.8653 2.8246 23.138 1.91086C22.1613 0.68346 20.8323 -0.00456058 19.4473 2.27533e-05H6.66667V1.66669H16V3.33335H6.66667V5.00002H8V6.66669H6.66667V8.33335H8V10H6.66667V11.6667H8V30H0V30.8333C0.00441667 35.8936 3.28508 39.9945 7.33333 40H32.6667C36.7149 39.9945 39.9956 35.8936 40 30.8333V30H38.544C38.623 29.7331 38.6645 29.4513 38.6667 29.1667C38.6628 28.0403 38.0568 27.0562 37.1867 26.7633C37.6016 25.4893 37.1118 24.0358 36.0924 23.5172C35.8514 23.3946 35.5935 23.3321 35.3333 23.3333H33.8773C33.9563 23.0665 33.9978 22.7846 34 22.5C34 21.1193 33.1046 20 32 20H30.3233C29.0848 19.9956 27.8964 20.6111 27.0233 21.7092L25.724 23.3333H22C20.8995 23.328 20.0039 24.4389 19.9996 25.8145C19.9986 26.1397 20.0485 26.4621 20.1467 26.7633C19.2765 27.0563 18.6705 28.0403 18.6667 29.1667C18.6688 29.4513 18.7103 29.7331 18.7893 30H17.3333V11.6667H19.4473ZM17.3333 1.66669H19.4473C20.4785 1.66325 21.468 2.17544 22.1953 3.08919C23.1721 4.31658 24.501 5.00471 25.886 5.00002H38.6667V6.66669H25.886C24.501 6.662 23.1721 7.35012 22.1953 8.57752C21.468 9.49127 20.4785 10.0035 19.4473 10H17.3333V1.66669ZM14.6667 5.00002H16V30H14.6667V5.00002ZM12 5.00002H13.3333V30H12V5.00002ZM9.33333 5.00002H10.6667V30H9.33333V5.00002ZM36.6667 28.3333C37.0348 28.3333 37.3333 28.7065 37.3333 29.1667C37.3333 29.6269 37.0348 30 36.6667 30H27.3333V29.0233C27.334 28.8025 27.4042 28.5908 27.5287 28.4342L27.6093 28.3333H36.6667ZM35.3333 25C35.7015 25 36 25.3731 36 25.8333C36 26.2936 35.7015 26.6667 35.3333 26.6667H28.9427L30.0807 25.2442C30.2058 25.0877 30.3757 24.9998 30.5527 25H35.3333ZM24.6667 28.7375C24.6683 28.3896 24.7048 28.0432 24.7753 27.7067C24.9222 26.984 25.2215 26.3239 25.642 25.795L27.61 23.3333L27.9667 22.8875C28.5902 22.1033 29.4388 21.6637 30.3233 21.6667H32C32.3682 21.6667 32.6667 22.0398 32.6667 22.5C32.6667 22.9602 32.3682 23.3333 32 23.3333H30.5527C30.0217 23.3316 29.5124 23.5953 29.138 24.0658L26.862 26.9108L26.586 27.2558C26.2097 27.7235 25.9987 28.36 26 29.0233V34.1667C26 34.6269 25.7015 35 25.3333 35C24.9652 35 24.6667 34.6269 24.6667 34.1667V28.7375ZM22 24.9967V25H24.4173C24.3987 25.0275 24.386 25.0608 24.3673 25.0892C24.2485 25.275 24.1389 25.4698 24.0393 25.6725C24.016 25.7208 23.988 25.7642 23.9653 25.8133C23.8481 26.0695 23.7464 26.3364 23.6613 26.6117C23.656 26.6292 23.6473 26.645 23.642 26.6633H22C21.6318 26.6633 21.3333 26.2902 21.3333 25.83C21.3333 25.3698 21.6318 24.9967 22 24.9967ZM20.6667 28.3333H23.3453C23.3373 28.4692 23.3333 28.6042 23.3333 28.7375V30H20.6667C20.2985 30 20 29.6269 20 29.1667C20 28.7065 20.2985 28.3333 20.6667 28.3333ZM20.6667 31.6667H23.3333V34.1667C23.3333 35.5474 24.2288 36.6667 25.3333 36.6667C26.4379 36.6667 27.3333 35.5474 27.3333 34.1667V31.6667H38.63C38.2867 35.4605 35.7211 38.3288 32.6667 38.3333H7.33333C4.27892 38.3288 1.71333 35.4605 1.37 31.6667H20.6667Z" fill="#2c2c2c"/>
                    </Svg>

                    </View>
                    
                </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#ffffff', marginTop: 8 }}>Sélectionner Un Restaurant :</Text>


      <View
        style={{height: 30, width: 180, borderRadius: 30, backgroundColor: '#ffffff' }}
        
      >
        <Picker
        selectedValue={selectedValue1}
        style={{ height: 30, width: 180, alignSelf: "center", color: '#2c2c2c' }}
        onValueChange={(itemValue1, itemIndex1) => setSelectedValue1(itemValue1)}
      >
          <Picker.Item label="Tout" value="tout" />
        <Picker.Item label="Ben Arous" value="benarous" />
        <Picker.Item label="Bizerte" value="bizerte" />
        <Picker.Item label="Beja" value="beja" />
        <Picker.Item label="Gabes" value="gabes" />
        <Picker.Item label="Gafsa" value="gafsa" />
        <Picker.Item label="Jendouba" value="jendouba" />
        <Picker.Item label="Kairouan" value="kairouan" />
        <Picker.Item label="Kasserine" value="kasserine" />
        <Picker.Item label="Kebili" value="kebili" />
        <Picker.Item label="La Manouba" value="lamanouba" />
        <Picker.Item label="Le Kef" value="lekef" />
        <Picker.Item label="Mahdia" value="mahdia" />
        <Picker.Item label="Monastir" value="monastir" />
        <Picker.Item label="Medenine" value="medenine" />
        <Picker.Item label="Nabeul" value="nabeul" />
        <Picker.Item label="Sfax" value="sfax" />
        <Picker.Item label="Sidi Bouzid" value="sidibouzid" />
        <Picker.Item label="Siliana" value="siliana" />
        <Picker.Item label="Sousse" value="sousse" />
        <Picker.Item label="Tataouine" value="tataouine" />
        <Picker.Item label="Tozeur" value="tozeur" />
        <Picker.Item label="Tunis" value="tunis" />
        <Picker.Item label="Zaghouan" value="zaghouan" />
      </Picker>
      </View>
            
        </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ flexDirection:'row', justifyContent: 'space-around', alignSelf:'center', marginTop: 10  }}>

                <View style={styles.box1}>
          <Image
                style={styles.smallpic}
                source={require('../../assets/pizza.png')}
            />
        <View style={styles.box2}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <Text style={{ fontSize: 12, color: '#2c2c2c', fontWeight: 'bold', marginTop: 5 }}>Pizza 4 saisons</Text>
                    <Avatar.Image 
                                source={require('../../assets/hardrock.png')}
                                size={30}
                            />
              </View>

                <Text note style={{ fontSize: 10, color: '#2c2c2c', marginLeft: 10 }}>Tomates, Champignons,{"\n"}Jambons, Olives</Text>
                
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <Text style={{marginTop: -3, fontSize: 15, color:'#FA4A0C'}}>10,500 DT</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={{ height: 15, width: 18,  borderRadius: 4 }}>
                        <Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <Rect width="18" height="15" rx="4" fill="#808080" fill-opacity="0.2"/>
                        <Line x1="6.25" y1="7.25" x2="11" y2="7.25" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        </TouchableOpacity>

                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FA4A0C', marginTop: -3, marginLeft: 5  }}>2</Text>

                        <TouchableOpacity style={{ height: 15, width: 18,  borderRadius: 4 }}>
                        <Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 5, marginRight: 5 }}>
                        <Rect width="18" height="15" rx="4" fill="#FA4A0C"/>
                        <Line x1="6" y1="8" x2="12" y2="8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <Line x1="9" y1="11" x2="9" y2="5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        </TouchableOpacity>

                    </View>
              </View>
        </View>
          </View>

          <View style={styles.box1}>
          <Image
                style={styles.smallpic}
                source={require('../../assets/pizza.png')}
            />
        <View style={styles.box2}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <Text style={{ fontSize: 12, color: '#2c2c2c', fontWeight: 'bold', marginTop: 5 }}>Pizza 4 saisons</Text>
                    <Avatar.Image 
                                source={require('../../assets/hardrock.png')}
                                size={30}
                            />
              </View>

                <Text note style={{ fontSize: 10, color: '#2c2c2c', marginLeft: 10 }}>Tomates, Champignons,{"\n"}Jambons, Olives</Text>
                
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <Text style={{marginTop: -3, fontSize: 15, color:'#FA4A0C'}}>10,500 DT</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={{ height: 15, width: 18,  borderRadius: 4 }}>
                        <Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <Rect width="18" height="15" rx="4" fill="#808080" fill-opacity="0.2"/>
                        <Line x1="6.25" y1="7.25" x2="11" y2="7.25" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        </TouchableOpacity>

                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FA4A0C', marginTop: -3, marginLeft: 5  }}>2</Text>

                        <TouchableOpacity style={{ height: 15, width: 18,  borderRadius: 4 }}>
                        <Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 5, marginRight: 5 }}>
                        <Rect width="18" height="15" rx="4" fill="#FA4A0C"/>
                        <Line x1="6" y1="8" x2="12" y2="8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <Line x1="9" y1="11" x2="9" y2="5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        </TouchableOpacity>

                    </View>
              </View>
        </View>
          </View>

         

                </View>

                <View style={{ flexDirection:'row', justifyContent: 'space-around', alignSelf:'center'  }}>

                <View style={styles.box1}>
          <Image
                style={styles.smallpic}
                source={require('../../assets/pizza.png')}
            />
        <View style={styles.box2}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <Text style={{ fontSize: 12, color: '#2c2c2c', fontWeight: 'bold', marginTop: 5 }}>Pizza 4 saisons</Text>
                    <Avatar.Image 
                                source={require('../../assets/hardrock.png')}
                                size={30}
                            />
              </View>

                <Text note style={{ fontSize: 10, color: '#2c2c2c', marginLeft: 10 }}>Tomates, Champignons,{"\n"}Jambons, Olives</Text>
                
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <Text style={{marginTop: -3, fontSize: 15, color:'#FA4A0C'}}>10,500 DT</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={{ height: 15, width: 18,  borderRadius: 4 }}>
                        <Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <Rect width="18" height="15" rx="4" fill="#808080" fill-opacity="0.2"/>
                        <Line x1="6.25" y1="7.25" x2="11" y2="7.25" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        </TouchableOpacity>

                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FA4A0C', marginTop: -3, marginLeft: 5  }}>2</Text>

                        <TouchableOpacity style={{ height: 15, width: 18,  borderRadius: 4 }}>
                        <Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 5, marginRight: 5 }}>
                        <Rect width="18" height="15" rx="4" fill="#FA4A0C"/>
                        <Line x1="6" y1="8" x2="12" y2="8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <Line x1="9" y1="11" x2="9" y2="5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        </TouchableOpacity>

                    </View>
              </View>
        </View>
          </View>

          <View style={styles.box1}>
          <Image
                style={styles.smallpic}
                source={require('../../assets/pizza.png')}
            />
        <View style={styles.box2}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                    <Text style={{ fontSize: 12, color: '#2c2c2c', fontWeight: 'bold', marginTop: 5 }}>Pizza 4 saisons</Text>
                    <Avatar.Image 
                                source={require('../../assets/hardrock.png')}
                                size={30}
                            />
              </View>

                <Text note style={{ fontSize: 10, color: '#2c2c2c', marginLeft: 10 }}>Tomates, Champignons,{"\n"}Jambons, Olives</Text>
                
              <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 }}>
                <Text style={{marginTop: -3, fontSize: 15, color:'#FA4A0C'}}>10,500 DT</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <TouchableOpacity style={{ height: 15, width: 18,  borderRadius: 4 }}>
                        <Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" >
                        <Rect width="18" height="15" rx="4" fill="#808080" fill-opacity="0.2"/>
                        <Line x1="6.25" y1="7.25" x2="11" y2="7.25" stroke="#2C2C2C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        </TouchableOpacity>

                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#FA4A0C', marginTop: -3, marginLeft: 5  }}>2</Text>

                        <TouchableOpacity style={{ height: 15, width: 18,  borderRadius: 4 }}>
                        <Svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: 5, marginRight: 5 }}>
                        <Rect width="18" height="15" rx="4" fill="#FA4A0C"/>
                        <Line x1="6" y1="8" x2="12" y2="8" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <Line x1="9" y1="11" x2="9" y2="5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </Svg>
                        </TouchableOpacity>

                    </View>
              </View>
        </View>
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
    width: 154,
    height: 208,
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
    width: 154,
    height: 106,
    backgroundColor: '#FCE7E7',
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
    width: 154,
    height: 143,
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
    textInput: {
        height: 40, 
        backgroundColor: '#ffffff', 
        borderRadius: 30,
        width: '80%',
        alignSelf: 'center',
        marginLeft: 20,
        marginTop: 20,
        paddingLeft: 20,
        
    },
})

export default CommanderPasta
