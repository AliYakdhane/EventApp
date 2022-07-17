import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Alert,
  Modal} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../Components/context'
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


const HappyHour = ({navigation}) => {

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
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" style={{marginLeft: 20, }}>
            <Path d="M1.45312 30H4.08984V27.2461C4.08984 26.7603 4.48295 26.3672 4.96875 26.3672C5.45455 26.3672 5.84766 26.7603 5.84766 27.2461V30H18.1523V27.2461C18.1523 26.7603 18.5454 26.3672 19.0312 26.3672C19.5171 26.3672 19.9102 26.7603 19.9102 27.2461V30H22.5469C23.0323 30 23.4258 29.6065 23.4258 29.1211V26.3672C23.4258 22.9694 20.6713 20.2149 17.2734 20.2149H16.3945C16.3945 22.6379 14.423 24.6094 12 24.6094C9.57697 24.6094 7.60547 22.6379 7.60547 20.2149H6.72656C3.32871 20.2149 0.574219 22.9694 0.574219 26.3672V29.1211C0.574219 29.6065 0.967734 30 1.45312 30Z" fill="#2C2C2C"/>
            <Path d="M9.40042 20.5822C9.58107 21.8612 10.6718 22.8516 12 22.8516C13.3281 22.8516 14.4189 21.8612 14.5996 20.5822C13.7937 20.9049 12.9198 21.0938 12 21.0938C11.0802 21.0938 10.2063 20.9049 9.40042 20.5822Z" fill="#2C2C2C"/>
            <Path d="M17.2734 14.0625V8.78906H6.72656V14.0625C6.72656 16.975 9.08754 19.3359 12 19.3359C14.9125 19.3359 17.2734 16.975 17.2734 14.0625ZM12 16.6992C10.5461 16.6992 9.36328 15.5164 9.36328 14.0625C9.36328 13.5767 9.75639 13.1836 10.2422 13.1836C10.728 13.1836 11.1211 13.5767 11.1211 14.0625C11.1211 14.5474 11.5151 14.9414 12 14.9414C12.4849 14.9414 12.8789 14.5474 12.8789 14.0625C12.8789 13.5767 13.272 13.1836 13.7578 13.1836C14.2436 13.1836 14.6367 13.5767 14.6367 14.0625C14.6367 15.5164 13.4539 16.6992 12 16.6992Z" fill="#2C2C2C"/>
            <Path d="M19.7299 6.24318C20.0501 6.08269 20.2415 5.74449 20.2132 5.3883C20.1849 5.03123 19.9436 4.72742 19.602 4.61925L18.211 4.01843V1.85293C18.211 1.55082 18.0556 1.26927 17.799 1.10879C17.5423 0.947418 17.2205 0.929371 16.9501 1.06156L14.5741 2.21088L12.6214 0.258239C12.2781 -0.0850623 11.7219 -0.0850623 11.3786 0.258239L9.42593 2.21088L7.04989 1.06162C6.77954 0.931129 6.45593 0.949176 6.20104 1.10884C5.9444 1.26933 5.78907 1.55088 5.78907 1.85298V4.01849L4.398 4.61931C4.05639 4.72748 3.81522 5.03129 3.78686 5.38836C3.75856 5.74455 3.94993 6.08275 4.27009 6.24324L6.72657 7.03197H17.2735L19.7299 6.24318Z" fill="#2C2C2C"/>
        </Svg>
        </TouchableOpacity>
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2c2c2c' }}>Happy Hour</Text>

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
        style={{ height: 50, width: 155, alignSelf: "flex-start", color: '#ffffff' }}
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

        

        <View style={{ flexDirection: 'row', justifyContent:'center', marginBottom: 50, marginTop: 10 }}>
          <View style={{ flexDirection: 'column', justifyContent:'center' }}>
            <View style={{ flexDirection: 'column', height: 163, width: 285, backgroundColor: '#ffffff', marginTop: 10, borderRadius: 10 }}>
            
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
              <Image
                style={styles.smallpic}
                source={require('../assets/golfbrau.png')}
            />
            </View>
            
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
              <Text style={{ fontWeight:'bold', fontSize: 15, color: '#2c2c2c', textAlign:'center'}}>Golf Braü Kantaoui</Text>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
              <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
                
                <Text style={{ fontSize: 9,  color: '#2c2c2c', marginLeft: 5 }}>Happy Hour</Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 15 }}>
              

              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2c2c2c', marginLeft: 5 }}>De 12:00 À 18:00 </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 15 }}>
              

                <Text style={{ fontSize: 9, color: '#2c2c2c', marginLeft: 5 }}>Durée 6h</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: 20, marginBottom: 15 }}>
                <Svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <Path d="M14.7578 26.4428C14.4344 26.4428 14.1719 26.7053 14.1719 27.0287C14.1719 27.3522 14.4344 27.6147 14.7578 27.6147C15.0813 27.6147 15.3438 27.3522 15.3438 27.0287C15.3438 26.7053 15.0813 26.4428 14.7578 26.4428Z" fill="#FA4A0C"/>
                <Path d="M6.52539 11.7357C6.20178 11.7357 5.93945 11.9981 5.93945 12.3217V23.5131C5.93945 23.8367 6.20178 24.099 6.52539 24.099C6.849 24.099 7.11133 23.8367 7.11133 23.5131V12.3217C7.11133 11.9981 6.849 11.7357 6.52539 11.7357Z" fill="#FA4A0C"/>
                <Path d="M11.2129 11.7357C10.8893 11.7357 10.627 11.9981 10.627 12.3217V23.5131C10.627 23.8367 10.8893 24.099 11.2129 24.099C11.5365 24.099 11.7988 23.8367 11.7988 23.5131V12.3217C11.7988 11.9981 11.5365 11.7357 11.2129 11.7357Z" fill="#FA4A0C"/>
                <Path d="M22.9902 9.43359H20.0605V7.66061C20.979 6.97207 21.4155 5.80828 21.1567 4.6592C20.9145 3.58166 20.025 2.70229 18.9437 2.47102C18.3688 2.34768 17.7899 2.39133 17.2623 2.59189C16.7334 1.75793 15.8044 1.23047 14.7871 1.23047C14.4037 1.23047 14.029 1.30482 13.6825 1.44791C12.7018 0.522774 11.4088 0 10.0703 0C8.29984 0 6.64867 0.901933 5.67402 2.37768C2.61133 2.20822 0.0800781 4.63805 0.0800781 7.63418V14.6654C0.0800781 15.6347 0.881758 16.4232 1.86719 16.4232C2.08334 16.4232 2.29047 16.3839 2.48242 16.3123V27.0703C2.48242 28.6857 3.79668 30 5.41211 30H17.1309C18.7463 30 20.0605 28.6857 20.0605 27.0703V25.3125H22.9902C24.6057 25.3125 25.9199 23.9982 25.9199 22.3828V12.3633C25.9199 10.7479 24.6057 9.43359 22.9902 9.43359ZM18.8887 26.4844H17.101C16.7774 26.4844 16.515 26.7467 16.515 27.0703C16.515 27.3939 16.7774 27.6504 17.101 27.6504H18.7879C18.546 28.3324 17.8947 28.8281 17.1309 28.8281H5.41211C4.64828 28.8281 3.99695 28.3382 3.75508 27.6562H12.4146C12.7383 27.6562 13.0006 27.3939 13.0006 27.0703C13.0006 26.7467 12.7383 26.4844 12.4146 26.4844H3.6543V14.6525V10.5179C4.97049 10.3192 6.1102 9.49031 6.70937 8.26178C6.8316 8.26178 6.9393 8.30408 7.02045 8.38371C7.68174 9.03398 8.55678 9.39205 9.48438 9.39205C10.4458 9.39205 11.3433 9.01148 12.0118 8.32008C12.0476 8.28305 12.0981 8.26178 12.1504 8.26178C13.0625 8.26178 13.6594 8.4566 13.9244 8.84074C14.1429 9.15744 14.1428 9.59748 14.1426 9.95109V12.3217C14.1426 13.0856 14.6325 13.7369 15.3145 13.9788V23.5131C15.3145 23.8368 15.5768 24.0991 15.9004 24.0991C16.224 24.0991 16.4863 23.8368 16.4863 23.5131V13.9787C17.1683 13.7368 17.6582 13.0856 17.6582 12.3217V8.19293C18.0687 8.27484 18.4875 8.27537 18.8887 8.19334V26.4844ZM17.3379 6.85236C17.1562 6.75996 16.9397 6.76857 16.7659 6.87516C16.5921 6.98168 16.4863 7.17082 16.4863 7.37461V12.3217C16.4863 12.6448 16.2234 12.9076 15.9003 12.9076C15.5772 12.9076 15.3144 12.6448 15.3144 12.3217V9.95145C15.3146 9.48996 15.3149 8.79252 14.8889 8.17518C14.3921 7.455 13.4707 7.08984 12.1504 7.08984C11.7818 7.08984 11.4241 7.24154 11.169 7.5058C10.7236 7.96646 10.1253 8.22012 9.48438 8.22012C8.86604 8.22012 8.28279 7.98146 7.8417 7.54764C7.54094 7.25238 7.13881 7.08984 6.70937 7.08984C6.26529 7.08984 5.85256 7.34748 5.65785 7.74621C5.16672 8.75191 4.1725 9.38256 3.06332 9.39205C2.7417 9.3948 2.48236 9.65631 2.48236 9.97799V14.6377C2.46174 14.9827 2.19344 15.2514 1.86719 15.2514C1.53373 15.2514 1.25195 14.983 1.25195 14.6654V7.63418C1.25195 5.37269 3.10246 3.54129 5.37736 3.54129C5.55414 3.54129 5.73186 3.55254 5.90945 3.57533C6.14647 3.60574 6.37809 3.48914 6.49498 3.28084C7.22482 1.98 8.5948 1.17188 10.0703 1.17188C11.2264 1.17188 12.3409 1.67666 13.1281 2.55686C13.3189 2.77025 13.636 2.81455 13.8781 2.66145C14.146 2.49193 14.4604 2.40234 14.7871 2.40234C15.533 2.40234 16.1997 2.87467 16.4461 3.57756C16.506 3.74865 16.6418 3.88242 16.8139 3.93973C16.9858 3.99703 17.1747 3.97148 17.3253 3.87047C17.7247 3.6027 18.2121 3.51264 18.6981 3.61693C19.3309 3.75229 19.8718 4.28654 20.0133 4.91648C20.3468 6.3968 18.8294 7.61109 17.3379 6.85236ZM20.0605 12.9492H22.4043V21.7969H20.0605V12.9492ZM24.748 22.3828C24.748 23.3521 23.9595 24.1406 22.9902 24.1406H20.0605V22.9688H22.9902C23.3138 22.9688 23.5762 22.7064 23.5762 22.3828V12.3633C23.5762 12.0397 23.3138 11.7773 22.9902 11.7773H20.0605V10.6055H22.9902C23.9595 10.6055 24.748 11.394 24.748 12.3633V22.3828Z" fill="#FA4A0C"/>
                </Svg>

                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2c2c2c', marginRight: 10, marginTop: 8, marginLeft: 10 }}>7 DT</Text>

                <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 8 }}>
                <Path d="M14.6199 6.61028L8.38045 0.37078C7.88833 -0.121335 7.0902 -0.121335 6.59808 0.37078C6.10596 0.862896 6.10596 1.66103 6.59808 2.15315L11.9458 7.50083L6.59808 12.8485C6.10596 13.3406 6.10596 14.1387 6.59808 14.6309C7.0902 15.123 7.88833 15.123 8.38045 14.6309L14.6199 8.39139C15.112 7.9005 15.112 7.10239 14.6199 6.61028ZM7.11767 6.23245L2.16406 1.01154C1.66631 0.48759 0.860082 0.48759 0.362329 1.01154C-0.135425 1.5355 -0.135425 2.38547 0.362329 2.91006L4.41541 7.1817L0.362329 11.4533C-0.135425 11.9773 -0.135425 12.8279 0.362329 13.3519C0.860082 13.8758 1.66631 13.8758 2.16406 13.3519L7.11767 8.13096C7.61543 7.60701 7.61543 6.75704 7.11767 6.23245Z" fill="#2C2C2C" fill-opacity="0.9"/>
                </Svg>

                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2c2c2c', marginTop: 8, marginLeft: 10 }}>5.6 DT</Text>


            </View>

            </View>

            </View>
            
          </View>
          
        </View>

        <View style={{ flexDirection: 'row', justifyContent:'center', marginBottom: 50, }}>
          <View style={{ flexDirection: 'column', justifyContent:'center' }}>
            <View style={{ flexDirection: 'column', height: 163, width: 285, backgroundColor: '#ffffff',  borderRadius: 10 }}>
            
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
              <Image
                style={styles.smallpic}
                source={require('../assets/golfbrau.png')}
            />
            </View>
            
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
              <Text style={{ fontWeight:'bold', fontSize: 15, color: '#2c2c2c', textAlign:'center'}}>Golf Braü Kantaoui</Text>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
              <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
                
                <Text style={{ fontSize: 9,  color: '#2c2c2c', marginLeft: 5 }}>Happy Hour</Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 15 }}>
              

              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2c2c2c', marginLeft: 5 }}>De 12:00 À 18:00 </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 15 }}>
              

                <Text style={{ fontSize: 9, color: '#2c2c2c', marginLeft: 5 }}>Durée 6h</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: 20, marginBottom: 15 }}>
                <Svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <Path d="M14.7578 26.4428C14.4344 26.4428 14.1719 26.7053 14.1719 27.0287C14.1719 27.3522 14.4344 27.6147 14.7578 27.6147C15.0813 27.6147 15.3438 27.3522 15.3438 27.0287C15.3438 26.7053 15.0813 26.4428 14.7578 26.4428Z" fill="#FA4A0C"/>
                <Path d="M6.52539 11.7357C6.20178 11.7357 5.93945 11.9981 5.93945 12.3217V23.5131C5.93945 23.8367 6.20178 24.099 6.52539 24.099C6.849 24.099 7.11133 23.8367 7.11133 23.5131V12.3217C7.11133 11.9981 6.849 11.7357 6.52539 11.7357Z" fill="#FA4A0C"/>
                <Path d="M11.2129 11.7357C10.8893 11.7357 10.627 11.9981 10.627 12.3217V23.5131C10.627 23.8367 10.8893 24.099 11.2129 24.099C11.5365 24.099 11.7988 23.8367 11.7988 23.5131V12.3217C11.7988 11.9981 11.5365 11.7357 11.2129 11.7357Z" fill="#FA4A0C"/>
                <Path d="M22.9902 9.43359H20.0605V7.66061C20.979 6.97207 21.4155 5.80828 21.1567 4.6592C20.9145 3.58166 20.025 2.70229 18.9437 2.47102C18.3688 2.34768 17.7899 2.39133 17.2623 2.59189C16.7334 1.75793 15.8044 1.23047 14.7871 1.23047C14.4037 1.23047 14.029 1.30482 13.6825 1.44791C12.7018 0.522774 11.4088 0 10.0703 0C8.29984 0 6.64867 0.901933 5.67402 2.37768C2.61133 2.20822 0.0800781 4.63805 0.0800781 7.63418V14.6654C0.0800781 15.6347 0.881758 16.4232 1.86719 16.4232C2.08334 16.4232 2.29047 16.3839 2.48242 16.3123V27.0703C2.48242 28.6857 3.79668 30 5.41211 30H17.1309C18.7463 30 20.0605 28.6857 20.0605 27.0703V25.3125H22.9902C24.6057 25.3125 25.9199 23.9982 25.9199 22.3828V12.3633C25.9199 10.7479 24.6057 9.43359 22.9902 9.43359ZM18.8887 26.4844H17.101C16.7774 26.4844 16.515 26.7467 16.515 27.0703C16.515 27.3939 16.7774 27.6504 17.101 27.6504H18.7879C18.546 28.3324 17.8947 28.8281 17.1309 28.8281H5.41211C4.64828 28.8281 3.99695 28.3382 3.75508 27.6562H12.4146C12.7383 27.6562 13.0006 27.3939 13.0006 27.0703C13.0006 26.7467 12.7383 26.4844 12.4146 26.4844H3.6543V14.6525V10.5179C4.97049 10.3192 6.1102 9.49031 6.70937 8.26178C6.8316 8.26178 6.9393 8.30408 7.02045 8.38371C7.68174 9.03398 8.55678 9.39205 9.48438 9.39205C10.4458 9.39205 11.3433 9.01148 12.0118 8.32008C12.0476 8.28305 12.0981 8.26178 12.1504 8.26178C13.0625 8.26178 13.6594 8.4566 13.9244 8.84074C14.1429 9.15744 14.1428 9.59748 14.1426 9.95109V12.3217C14.1426 13.0856 14.6325 13.7369 15.3145 13.9788V23.5131C15.3145 23.8368 15.5768 24.0991 15.9004 24.0991C16.224 24.0991 16.4863 23.8368 16.4863 23.5131V13.9787C17.1683 13.7368 17.6582 13.0856 17.6582 12.3217V8.19293C18.0687 8.27484 18.4875 8.27537 18.8887 8.19334V26.4844ZM17.3379 6.85236C17.1562 6.75996 16.9397 6.76857 16.7659 6.87516C16.5921 6.98168 16.4863 7.17082 16.4863 7.37461V12.3217C16.4863 12.6448 16.2234 12.9076 15.9003 12.9076C15.5772 12.9076 15.3144 12.6448 15.3144 12.3217V9.95145C15.3146 9.48996 15.3149 8.79252 14.8889 8.17518C14.3921 7.455 13.4707 7.08984 12.1504 7.08984C11.7818 7.08984 11.4241 7.24154 11.169 7.5058C10.7236 7.96646 10.1253 8.22012 9.48438 8.22012C8.86604 8.22012 8.28279 7.98146 7.8417 7.54764C7.54094 7.25238 7.13881 7.08984 6.70937 7.08984C6.26529 7.08984 5.85256 7.34748 5.65785 7.74621C5.16672 8.75191 4.1725 9.38256 3.06332 9.39205C2.7417 9.3948 2.48236 9.65631 2.48236 9.97799V14.6377C2.46174 14.9827 2.19344 15.2514 1.86719 15.2514C1.53373 15.2514 1.25195 14.983 1.25195 14.6654V7.63418C1.25195 5.37269 3.10246 3.54129 5.37736 3.54129C5.55414 3.54129 5.73186 3.55254 5.90945 3.57533C6.14647 3.60574 6.37809 3.48914 6.49498 3.28084C7.22482 1.98 8.5948 1.17188 10.0703 1.17188C11.2264 1.17188 12.3409 1.67666 13.1281 2.55686C13.3189 2.77025 13.636 2.81455 13.8781 2.66145C14.146 2.49193 14.4604 2.40234 14.7871 2.40234C15.533 2.40234 16.1997 2.87467 16.4461 3.57756C16.506 3.74865 16.6418 3.88242 16.8139 3.93973C16.9858 3.99703 17.1747 3.97148 17.3253 3.87047C17.7247 3.6027 18.2121 3.51264 18.6981 3.61693C19.3309 3.75229 19.8718 4.28654 20.0133 4.91648C20.3468 6.3968 18.8294 7.61109 17.3379 6.85236ZM20.0605 12.9492H22.4043V21.7969H20.0605V12.9492ZM24.748 22.3828C24.748 23.3521 23.9595 24.1406 22.9902 24.1406H20.0605V22.9688H22.9902C23.3138 22.9688 23.5762 22.7064 23.5762 22.3828V12.3633C23.5762 12.0397 23.3138 11.7773 22.9902 11.7773H20.0605V10.6055H22.9902C23.9595 10.6055 24.748 11.394 24.748 12.3633V22.3828Z" fill="#FA4A0C"/>
                </Svg>

                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2c2c2c', marginRight: 10, marginTop: 8, marginLeft: 10 }}>7 DT</Text>

                <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 8 }}>
                <Path d="M14.6199 6.61028L8.38045 0.37078C7.88833 -0.121335 7.0902 -0.121335 6.59808 0.37078C6.10596 0.862896 6.10596 1.66103 6.59808 2.15315L11.9458 7.50083L6.59808 12.8485C6.10596 13.3406 6.10596 14.1387 6.59808 14.6309C7.0902 15.123 7.88833 15.123 8.38045 14.6309L14.6199 8.39139C15.112 7.9005 15.112 7.10239 14.6199 6.61028ZM7.11767 6.23245L2.16406 1.01154C1.66631 0.48759 0.860082 0.48759 0.362329 1.01154C-0.135425 1.5355 -0.135425 2.38547 0.362329 2.91006L4.41541 7.1817L0.362329 11.4533C-0.135425 11.9773 -0.135425 12.8279 0.362329 13.3519C0.860082 13.8758 1.66631 13.8758 2.16406 13.3519L7.11767 8.13096C7.61543 7.60701 7.61543 6.75704 7.11767 6.23245Z" fill="#2C2C2C" fill-opacity="0.9"/>
                </Svg>

                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2c2c2c', marginTop: 8, marginLeft: 10 }}>5.6 DT</Text>


            </View>

            </View>

            </View>
            
          </View>
          
        </View>

        <View style={{ flexDirection: 'row', justifyContent:'center', marginBottom: 50,  }}>
          <View style={{ flexDirection: 'column', justifyContent:'center' }}>
            <View style={{ flexDirection: 'column', height: 163, width: 285, backgroundColor: '#ffffff', borderRadius: 10 }}>
            
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
              <Image
                style={styles.smallpic}
                source={require('../assets/golfbrau.png')}
            />
            </View>
            
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 5 }}>
              <Text style={{ fontWeight:'bold', fontSize: 15, color: '#2c2c2c', textAlign:'center'}}>Golf Braü Kantaoui</Text>
            </View>
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
              <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
                
                <Text style={{ fontSize: 9,  color: '#2c2c2c', marginLeft: 5 }}>Happy Hour</Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 15 }}>
              

              <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2c2c2c', marginLeft: 5 }}>De 12:00 À 18:00 </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 5, marginLeft: 15 }}>
              

                <Text style={{ fontSize: 9, color: '#2c2c2c', marginLeft: 5 }}>Durée 6h</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'row', alignSelf: 'flex-end', marginRight: 20, marginBottom: 15 }}>
                <Svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <Path d="M14.7578 26.4428C14.4344 26.4428 14.1719 26.7053 14.1719 27.0287C14.1719 27.3522 14.4344 27.6147 14.7578 27.6147C15.0813 27.6147 15.3438 27.3522 15.3438 27.0287C15.3438 26.7053 15.0813 26.4428 14.7578 26.4428Z" fill="#FA4A0C"/>
                <Path d="M6.52539 11.7357C6.20178 11.7357 5.93945 11.9981 5.93945 12.3217V23.5131C5.93945 23.8367 6.20178 24.099 6.52539 24.099C6.849 24.099 7.11133 23.8367 7.11133 23.5131V12.3217C7.11133 11.9981 6.849 11.7357 6.52539 11.7357Z" fill="#FA4A0C"/>
                <Path d="M11.2129 11.7357C10.8893 11.7357 10.627 11.9981 10.627 12.3217V23.5131C10.627 23.8367 10.8893 24.099 11.2129 24.099C11.5365 24.099 11.7988 23.8367 11.7988 23.5131V12.3217C11.7988 11.9981 11.5365 11.7357 11.2129 11.7357Z" fill="#FA4A0C"/>
                <Path d="M22.9902 9.43359H20.0605V7.66061C20.979 6.97207 21.4155 5.80828 21.1567 4.6592C20.9145 3.58166 20.025 2.70229 18.9437 2.47102C18.3688 2.34768 17.7899 2.39133 17.2623 2.59189C16.7334 1.75793 15.8044 1.23047 14.7871 1.23047C14.4037 1.23047 14.029 1.30482 13.6825 1.44791C12.7018 0.522774 11.4088 0 10.0703 0C8.29984 0 6.64867 0.901933 5.67402 2.37768C2.61133 2.20822 0.0800781 4.63805 0.0800781 7.63418V14.6654C0.0800781 15.6347 0.881758 16.4232 1.86719 16.4232C2.08334 16.4232 2.29047 16.3839 2.48242 16.3123V27.0703C2.48242 28.6857 3.79668 30 5.41211 30H17.1309C18.7463 30 20.0605 28.6857 20.0605 27.0703V25.3125H22.9902C24.6057 25.3125 25.9199 23.9982 25.9199 22.3828V12.3633C25.9199 10.7479 24.6057 9.43359 22.9902 9.43359ZM18.8887 26.4844H17.101C16.7774 26.4844 16.515 26.7467 16.515 27.0703C16.515 27.3939 16.7774 27.6504 17.101 27.6504H18.7879C18.546 28.3324 17.8947 28.8281 17.1309 28.8281H5.41211C4.64828 28.8281 3.99695 28.3382 3.75508 27.6562H12.4146C12.7383 27.6562 13.0006 27.3939 13.0006 27.0703C13.0006 26.7467 12.7383 26.4844 12.4146 26.4844H3.6543V14.6525V10.5179C4.97049 10.3192 6.1102 9.49031 6.70937 8.26178C6.8316 8.26178 6.9393 8.30408 7.02045 8.38371C7.68174 9.03398 8.55678 9.39205 9.48438 9.39205C10.4458 9.39205 11.3433 9.01148 12.0118 8.32008C12.0476 8.28305 12.0981 8.26178 12.1504 8.26178C13.0625 8.26178 13.6594 8.4566 13.9244 8.84074C14.1429 9.15744 14.1428 9.59748 14.1426 9.95109V12.3217C14.1426 13.0856 14.6325 13.7369 15.3145 13.9788V23.5131C15.3145 23.8368 15.5768 24.0991 15.9004 24.0991C16.224 24.0991 16.4863 23.8368 16.4863 23.5131V13.9787C17.1683 13.7368 17.6582 13.0856 17.6582 12.3217V8.19293C18.0687 8.27484 18.4875 8.27537 18.8887 8.19334V26.4844ZM17.3379 6.85236C17.1562 6.75996 16.9397 6.76857 16.7659 6.87516C16.5921 6.98168 16.4863 7.17082 16.4863 7.37461V12.3217C16.4863 12.6448 16.2234 12.9076 15.9003 12.9076C15.5772 12.9076 15.3144 12.6448 15.3144 12.3217V9.95145C15.3146 9.48996 15.3149 8.79252 14.8889 8.17518C14.3921 7.455 13.4707 7.08984 12.1504 7.08984C11.7818 7.08984 11.4241 7.24154 11.169 7.5058C10.7236 7.96646 10.1253 8.22012 9.48438 8.22012C8.86604 8.22012 8.28279 7.98146 7.8417 7.54764C7.54094 7.25238 7.13881 7.08984 6.70937 7.08984C6.26529 7.08984 5.85256 7.34748 5.65785 7.74621C5.16672 8.75191 4.1725 9.38256 3.06332 9.39205C2.7417 9.3948 2.48236 9.65631 2.48236 9.97799V14.6377C2.46174 14.9827 2.19344 15.2514 1.86719 15.2514C1.53373 15.2514 1.25195 14.983 1.25195 14.6654V7.63418C1.25195 5.37269 3.10246 3.54129 5.37736 3.54129C5.55414 3.54129 5.73186 3.55254 5.90945 3.57533C6.14647 3.60574 6.37809 3.48914 6.49498 3.28084C7.22482 1.98 8.5948 1.17188 10.0703 1.17188C11.2264 1.17188 12.3409 1.67666 13.1281 2.55686C13.3189 2.77025 13.636 2.81455 13.8781 2.66145C14.146 2.49193 14.4604 2.40234 14.7871 2.40234C15.533 2.40234 16.1997 2.87467 16.4461 3.57756C16.506 3.74865 16.6418 3.88242 16.8139 3.93973C16.9858 3.99703 17.1747 3.97148 17.3253 3.87047C17.7247 3.6027 18.2121 3.51264 18.6981 3.61693C19.3309 3.75229 19.8718 4.28654 20.0133 4.91648C20.3468 6.3968 18.8294 7.61109 17.3379 6.85236ZM20.0605 12.9492H22.4043V21.7969H20.0605V12.9492ZM24.748 22.3828C24.748 23.3521 23.9595 24.1406 22.9902 24.1406H20.0605V22.9688H22.9902C23.3138 22.9688 23.5762 22.7064 23.5762 22.3828V12.3633C23.5762 12.0397 23.3138 11.7773 22.9902 11.7773H20.0605V10.6055H22.9902C23.9595 10.6055 24.748 11.394 24.748 12.3633V22.3828Z" fill="#FA4A0C"/>
                </Svg>

                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2c2c2c', marginRight: 10, marginTop: 8, marginLeft: 10 }}>7 DT</Text>

                <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 8 }}>
                <Path d="M14.6199 6.61028L8.38045 0.37078C7.88833 -0.121335 7.0902 -0.121335 6.59808 0.37078C6.10596 0.862896 6.10596 1.66103 6.59808 2.15315L11.9458 7.50083L6.59808 12.8485C6.10596 13.3406 6.10596 14.1387 6.59808 14.6309C7.0902 15.123 7.88833 15.123 8.38045 14.6309L14.6199 8.39139C15.112 7.9005 15.112 7.10239 14.6199 6.61028ZM7.11767 6.23245L2.16406 1.01154C1.66631 0.48759 0.860082 0.48759 0.362329 1.01154C-0.135425 1.5355 -0.135425 2.38547 0.362329 2.91006L4.41541 7.1817L0.362329 11.4533C-0.135425 11.9773 -0.135425 12.8279 0.362329 13.3519C0.860082 13.8758 1.66631 13.8758 2.16406 13.3519L7.11767 8.13096C7.61543 7.60701 7.61543 6.75704 7.11767 6.23245Z" fill="#2C2C2C" fill-opacity="0.9"/>
                </Svg>

                <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#2c2c2c', marginTop: 8, marginLeft: 10 }}>5.6 DT</Text>


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
       width: 61,
       height: 56,
       borderRadius: 20
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

export default HappyHour
