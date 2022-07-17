import React, { useState } from 'react'
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


const CommanderChicken = ({navigation}) => {

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


        <TouchableOpacity 
        onPress={() => navigation.navigate('shop')}>
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
                    <Svg width="45" height="31" viewBox="0 0 45 31" fill="none" xmlns="http://www.w3.org/2000/svg"  style={{ alignSelf: 'center', marginTop: 13 }}>
                    <Mask id="path-1-inside-1" fill="white">
                    <Path d="M43.0308 23.1905H36.095C36.5118 23.0515 36.9279 22.9009 37.3337 22.7382C39.9879 21.6752 41.3337 20.4258 41.3337 19.0244C41.3337 16.8703 39.5921 16.1465 38.0553 15.5084C37.3969 15.235 36.7164 14.9519 36.1588 14.5676C35.8588 14.3612 35.4481 14.4372 35.2422 14.7375C35.0358 15.0382 35.1117 15.4493 35.4118 15.656C36.0833 16.119 36.8293 16.429 37.5503 16.7286C39.1248 17.3825 40.0154 17.8115 40.0154 19.0244C40.0154 19.798 38.8598 20.7045 36.8444 21.5118C34.4298 22.4788 31.6276 23.0027 30.4806 23.1905H28.3218C29.8005 22.035 30.8483 20.4523 31.5188 18.3574C32.3352 15.8077 33.4991 13.935 35.2933 12.2856C35.7911 11.8277 36.0126 11.1813 35.935 10.568L39.6944 7.76581C39.7967 7.68979 39.9374 7.68704 40.0449 7.75928C40.8593 8.30726 41.697 8.45724 42.4671 8.19271C43.0744 7.98425 43.5502 7.54806 43.8074 6.96431C44.0742 6.35819 44.0714 5.65025 43.7991 5.02177C43.4424 4.19825 42.683 3.63788 41.8168 3.53709C41.9802 2.67882 41.6736 1.78478 40.9963 1.19724C40.4796 0.749015 39.8063 0.534018 39.1488 0.607633C38.5164 0.678496 37.9585 1.00323 37.5778 1.52128C37.0954 2.17831 36.9873 3.02385 37.2654 3.96639C37.3021 4.09058 37.2575 4.22439 37.1555 4.29869L33.3601 7.05409C32.7991 6.79644 32.1172 6.81432 31.5322 7.15316C29.4242 8.37434 27.2925 8.92611 24.6201 8.94296C22.325 8.95741 20.438 9.53154 18.8515 10.6991C17.0807 12.0014 15.8938 13.8813 15.5093 15.9918C15.1224 18.1166 15.5931 20.2201 16.8349 21.9146C17.1813 22.3873 17.5809 22.8142 18.0238 23.1905H9.67451C4.60225 22.1668 2.1365 19.6326 2.1365 15.4445C2.1365 12.258 3.55752 8.97358 6.03563 6.43318C8.71389 3.68707 12.2913 2.17487 16.108 2.17487C20.4806 2.17487 25.0262 3.77307 28.5796 6.55977C28.8663 6.78474 29.2807 6.73383 29.5049 6.44659C29.7294 6.15936 29.6789 5.7445 29.3923 5.51953C25.6116 2.55464 20.7697 0.853933 16.108 0.853933C11.9332 0.853933 8.02141 2.50751 5.09286 5.5099C2.37614 8.29488 0.81814 11.9161 0.81814 15.4445C0.81814 19.0217 2.39502 21.614 5.51206 23.1905H1.79352C0.755998 23.1905 -0.0878906 24.0361 -0.0878906 25.0756C-0.0878906 26.1152 0.755998 26.961 1.79352 26.961H4.18374C4.22082 26.961 4.25378 26.9831 4.26785 27.0175L4.68637 28.0439C5.18109 29.2576 6.34599 30.0415 7.6544 30.0415H37.1699C38.4783 30.0415 39.6432 29.2576 40.1379 28.0439L40.5565 27.0178C40.5705 26.9834 40.6035 26.961 40.6406 26.961H43.0308C44.068 26.961 44.9122 26.1152 44.9122 25.0756C44.9122 24.0364 44.0683 23.1905 43.0308 23.1905ZM37.93 5.36748C38.4828 4.96432 38.7238 4.25088 38.5295 3.59178C38.4203 3.22165 38.3506 2.6974 38.6397 2.30387C38.8446 2.02455 39.1093 1.9413 39.2954 1.92032C39.589 1.88764 39.8938 1.98808 40.1335 2.19586C40.5616 2.56737 40.5983 3.0696 40.4899 3.41566C40.3862 3.74658 40.448 4.11087 40.6553 4.39157C40.8603 4.6733 41.1885 4.84117 41.5342 4.84117H41.5346C41.8968 4.84117 42.3641 5.02693 42.5896 5.54774C42.7156 5.83876 42.7201 6.16108 42.6009 6.43111C42.5254 6.60242 42.3665 6.83049 42.0393 6.94298C41.5782 7.10122 41.0996 6.87796 40.7796 6.66262C40.2107 6.27976 39.4592 6.29627 38.9085 6.70493L35.3441 9.3616L34.3313 7.97978L37.93 5.36748ZM17.8978 21.1331C16.8726 19.7341 16.485 17.9924 16.8064 16.2291C17.1301 14.4517 18.1337 12.8655 19.6316 11.7637C20.9863 10.7668 22.6209 10.2763 24.6283 10.2639C27.5424 10.2453 29.875 9.63886 32.1921 8.2966C32.4472 8.14902 32.7486 8.17069 32.9405 8.33684C32.9433 8.33925 32.946 8.34131 32.9488 8.34372C32.9752 8.3678 32.9999 8.39463 33.0215 8.42422L34.5287 10.4813C34.5497 10.5099 34.5686 10.5418 34.584 10.5766C34.5847 10.578 34.5854 10.579 34.5861 10.58C34.6897 10.8143 34.6204 11.1115 34.4017 11.3124C32.43 13.1252 31.1535 15.1737 30.2636 17.9539C29.6504 19.8693 28.6936 21.2848 27.3388 22.2813C26.8335 22.6532 26.2824 22.959 25.7005 23.1905H20.5222C19.4699 22.7523 18.5645 22.043 17.8978 21.1331ZM43.0308 25.6401H13.9698C13.6059 25.6401 13.3107 25.9356 13.3107 26.3006C13.3107 26.6652 13.6059 26.961 13.9698 26.961H39.1554L38.9178 27.5445C38.6263 28.2589 37.9403 28.7206 37.1699 28.7206H7.6544C6.88398 28.7206 6.19802 28.2589 5.90654 27.5445L5.66896 26.961H10.9029C11.2668 26.961 11.5621 26.6652 11.5621 26.3006C11.5621 25.9356 11.2668 25.6401 10.9029 25.6401H1.79352C1.48281 25.6401 1.23047 25.3869 1.23047 25.0756C1.23047 24.7646 1.48281 24.5115 1.79352 24.5115H43.0308C43.3412 24.5115 43.5938 24.7646 43.5938 25.0756C43.5938 25.3869 43.3412 25.6401 43.0308 25.6401Z"/>
                    </Mask>
                    <Path d="M43.0308 23.1905H36.095C36.5118 23.0515 36.9279 22.9009 37.3337 22.7382C39.9879 21.6752 41.3337 20.4258 41.3337 19.0244C41.3337 16.8703 39.5921 16.1465 38.0553 15.5084C37.3969 15.235 36.7164 14.9519 36.1588 14.5676C35.8588 14.3612 35.4481 14.4372 35.2422 14.7375C35.0358 15.0382 35.1117 15.4493 35.4118 15.656C36.0833 16.119 36.8293 16.429 37.5503 16.7286C39.1248 17.3825 40.0154 17.8115 40.0154 19.0244C40.0154 19.798 38.8598 20.7045 36.8444 21.5118C34.4298 22.4788 31.6276 23.0027 30.4806 23.1905H28.3218C29.8005 22.035 30.8483 20.4523 31.5188 18.3574C32.3352 15.8077 33.4991 13.935 35.2933 12.2856C35.7911 11.8277 36.0126 11.1813 35.935 10.568L39.6944 7.76581C39.7967 7.68979 39.9374 7.68704 40.0449 7.75928C40.8593 8.30726 41.697 8.45724 42.4671 8.19271C43.0744 7.98425 43.5502 7.54806 43.8074 6.96431C44.0742 6.35819 44.0714 5.65025 43.7991 5.02177C43.4424 4.19825 42.683 3.63788 41.8168 3.53709C41.9802 2.67882 41.6736 1.78478 40.9963 1.19724C40.4796 0.749015 39.8063 0.534018 39.1488 0.607633C38.5164 0.678496 37.9585 1.00323 37.5778 1.52128C37.0954 2.17831 36.9873 3.02385 37.2654 3.96639C37.3021 4.09058 37.2575 4.22439 37.1555 4.29869L33.3601 7.05409C32.7991 6.79644 32.1172 6.81432 31.5322 7.15316C29.4242 8.37434 27.2925 8.92611 24.6201 8.94296C22.325 8.95741 20.438 9.53154 18.8515 10.6991C17.0807 12.0014 15.8938 13.8813 15.5093 15.9918C15.1224 18.1166 15.5931 20.2201 16.8349 21.9146C17.1813 22.3873 17.5809 22.8142 18.0238 23.1905H9.67451C4.60225 22.1668 2.1365 19.6326 2.1365 15.4445C2.1365 12.258 3.55752 8.97358 6.03563 6.43318C8.71389 3.68707 12.2913 2.17487 16.108 2.17487C20.4806 2.17487 25.0262 3.77307 28.5796 6.55977C28.8663 6.78474 29.2807 6.73383 29.5049 6.44659C29.7294 6.15936 29.6789 5.7445 29.3923 5.51953C25.6116 2.55464 20.7697 0.853933 16.108 0.853933C11.9332 0.853933 8.02141 2.50751 5.09286 5.5099C2.37614 8.29488 0.81814 11.9161 0.81814 15.4445C0.81814 19.0217 2.39502 21.614 5.51206 23.1905H1.79352C0.755998 23.1905 -0.0878906 24.0361 -0.0878906 25.0756C-0.0878906 26.1152 0.755998 26.961 1.79352 26.961H4.18374C4.22082 26.961 4.25378 26.9831 4.26785 27.0175L4.68637 28.0439C5.18109 29.2576 6.34599 30.0415 7.6544 30.0415H37.1699C38.4783 30.0415 39.6432 29.2576 40.1379 28.0439L40.5565 27.0178C40.5705 26.9834 40.6035 26.961 40.6406 26.961H43.0308C44.068 26.961 44.9122 26.1152 44.9122 25.0756C44.9122 24.0364 44.0683 23.1905 43.0308 23.1905ZM37.93 5.36748C38.4828 4.96432 38.7238 4.25088 38.5295 3.59178C38.4203 3.22165 38.3506 2.6974 38.6397 2.30387C38.8446 2.02455 39.1093 1.9413 39.2954 1.92032C39.589 1.88764 39.8938 1.98808 40.1335 2.19586C40.5616 2.56737 40.5983 3.0696 40.4899 3.41566C40.3862 3.74658 40.448 4.11087 40.6553 4.39157C40.8603 4.6733 41.1885 4.84117 41.5342 4.84117H41.5346C41.8968 4.84117 42.3641 5.02693 42.5896 5.54774C42.7156 5.83876 42.7201 6.16108 42.6009 6.43111C42.5254 6.60242 42.3665 6.83049 42.0393 6.94298C41.5782 7.10122 41.0996 6.87796 40.7796 6.66262C40.2107 6.27976 39.4592 6.29627 38.9085 6.70493L35.3441 9.3616L34.3313 7.97978L37.93 5.36748ZM17.8978 21.1331C16.8726 19.7341 16.485 17.9924 16.8064 16.2291C17.1301 14.4517 18.1337 12.8655 19.6316 11.7637C20.9863 10.7668 22.6209 10.2763 24.6283 10.2639C27.5424 10.2453 29.875 9.63886 32.1921 8.2966C32.4472 8.14902 32.7486 8.17069 32.9405 8.33684C32.9433 8.33925 32.946 8.34131 32.9488 8.34372C32.9752 8.3678 32.9999 8.39463 33.0215 8.42422L34.5287 10.4813C34.5497 10.5099 34.5686 10.5418 34.584 10.5766C34.5847 10.578 34.5854 10.579 34.5861 10.58C34.6897 10.8143 34.6204 11.1115 34.4017 11.3124C32.43 13.1252 31.1535 15.1737 30.2636 17.9539C29.6504 19.8693 28.6936 21.2848 27.3388 22.2813C26.8335 22.6532 26.2824 22.959 25.7005 23.1905H20.5222C19.4699 22.7523 18.5645 22.043 17.8978 21.1331ZM43.0308 25.6401H13.9698C13.6059 25.6401 13.3107 25.9356 13.3107 26.3006C13.3107 26.6652 13.6059 26.961 13.9698 26.961H39.1554L38.9178 27.5445C38.6263 28.2589 37.9403 28.7206 37.1699 28.7206H7.6544C6.88398 28.7206 6.19802 28.2589 5.90654 27.5445L5.66896 26.961H10.9029C11.2668 26.961 11.5621 26.6652 11.5621 26.3006C11.5621 25.9356 11.2668 25.6401 10.9029 25.6401H1.79352C1.48281 25.6401 1.23047 25.3869 1.23047 25.0756C1.23047 24.7646 1.48281 24.5115 1.79352 24.5115H43.0308C43.3412 24.5115 43.5938 24.7646 43.5938 25.0756C43.5938 25.3869 43.3412 25.6401 43.0308 25.6401Z" fill="#2C2C2C" stroke="black" stroke-width="2" mask="url(#path-1-inside-1)"/>
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

export default CommanderChicken
