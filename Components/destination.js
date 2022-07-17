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


const Destinations = ({navigation}) => {

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

        <View style={{ flexDirection:'row', justifyContent: 'space-around', alignSelf:'center', marginTop: 10  }}>
            
            <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity style={{ width: 70, height: 70, backgroundColor: '#FA4A0C', marginTop: 20, marginRight: 20, marginLeft: 20, borderRadius: 10, flexDirection: 'column' }}>
            <Svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ alignSelf: 'center', marginTop: 12 }}>
                <Path d="M20.3438 35.257C19.9125 35.257 19.5625 35.607 19.5625 36.0383C19.5625 36.4695 19.9125 36.8195 20.3438 36.8195C20.775 36.8195 21.125 36.4695 21.125 36.0383C21.125 35.607 20.775 35.257 20.3438 35.257Z" fill="white"/>
                <Path d="M9.36719 15.6477C8.9357 15.6477 8.58594 15.9974 8.58594 16.4289V31.3508C8.58594 31.7823 8.9357 32.132 9.36719 32.132C9.79867 32.132 10.1484 31.7823 10.1484 31.3508V16.4289C10.1484 15.9974 9.79867 15.6477 9.36719 15.6477Z" fill="white"/>
                <Path d="M15.6172 15.6477C15.1857 15.6477 14.8359 15.9974 14.8359 16.4289V31.3508C14.8359 31.7823 15.1857 32.132 15.6172 32.132C16.0487 32.132 16.3984 31.7823 16.3984 31.3508V16.4289C16.3984 15.9974 16.0487 15.6477 15.6172 15.6477Z" fill="white"/>
                <Path d="M31.3203 12.5781H27.4141V10.2141C28.6387 9.29609 29.2207 7.74437 28.8755 6.21227C28.5527 4.77555 27.3667 3.60305 25.9249 3.29469C25.1584 3.13023 24.3865 3.18844 23.6831 3.45586C22.9778 2.34391 21.7392 1.64062 20.3828 1.64062C19.8716 1.64062 19.372 1.73977 18.91 1.93055C17.6023 0.697031 15.8784 0 14.0938 0C11.7331 0 9.53156 1.20258 8.23203 3.17023C4.14844 2.9443 0.773438 6.18406 0.773438 10.1789V19.5539C0.773438 20.8462 1.84234 21.8977 3.15625 21.8977C3.44445 21.8977 3.72062 21.8452 3.97656 21.7498V36.0938C3.97656 38.2477 5.72891 40 7.88281 40H23.5078C25.6617 40 27.4141 38.2477 27.4141 36.0938V33.75H31.3203C33.4742 33.75 35.2266 31.9977 35.2266 29.8438V16.4844C35.2266 14.3305 33.4742 12.5781 31.3203 12.5781ZM25.8516 35.3125H23.468C23.0365 35.3125 22.6867 35.6623 22.6867 36.0938C22.6867 36.5252 23.0365 36.8672 23.468 36.8672H25.7172C25.3947 37.7765 24.5263 38.4375 23.5078 38.4375H7.88281C6.86438 38.4375 5.99594 37.7843 5.67344 36.875H17.2195C17.651 36.875 18.0008 36.5252 18.0008 36.0938C18.0008 35.6623 17.651 35.3125 17.2195 35.3125H5.53906V19.5367V14.0239C7.29398 13.759 8.81359 12.6538 9.6125 11.0157C9.77547 11.0157 9.91906 11.0721 10.0273 11.1783C10.909 12.0453 12.0757 12.5227 13.3125 12.5227C14.5944 12.5227 15.791 12.0153 16.6824 11.0934C16.7301 11.0441 16.7975 11.0157 16.8672 11.0157C18.0834 11.0157 18.8791 11.2755 19.2326 11.7877C19.5239 12.2099 19.5237 12.7966 19.5234 13.2681V16.429C19.5234 17.4474 20.1766 18.3159 21.0859 18.6384V31.3509C21.0859 31.7823 21.4357 32.1321 21.8672 32.1321C22.2987 32.1321 22.6484 31.7823 22.6484 31.3509V18.6383C23.5577 18.3158 24.2109 17.4474 24.2109 16.4289V10.9239C24.7582 11.0331 25.3167 11.0338 25.8516 10.9245V35.3125ZM23.7838 9.13648C23.5416 9.01328 23.2529 9.02477 23.0212 9.16687C22.7895 9.30891 22.6484 9.56109 22.6484 9.83281V16.4289C22.6484 16.8597 22.2979 17.2102 21.8671 17.2102C21.4363 17.2102 21.0859 16.8597 21.0859 16.4289V13.2686C21.0861 12.6533 21.0865 11.7234 20.5186 10.9002C19.8562 9.94 18.6277 9.45312 16.8672 9.45312C16.3758 9.45312 15.8988 9.65539 15.5587 10.0077C14.9648 10.622 14.167 10.9602 13.3125 10.9602C12.488 10.9602 11.7104 10.642 11.1223 10.0635C10.7212 9.66984 10.1851 9.45312 9.6125 9.45312C9.02039 9.45312 8.47008 9.79664 8.21047 10.3283C7.55562 11.6692 6.23 12.5101 4.75109 12.5227C4.32227 12.5264 3.97648 12.8751 3.97648 13.304V19.5169C3.94898 19.977 3.59125 20.3352 3.15625 20.3352C2.71164 20.3352 2.33594 19.9773 2.33594 19.5539V10.1789C2.33594 7.16359 4.80328 4.72172 7.83648 4.72172C8.07219 4.72172 8.30914 4.73672 8.54594 4.76711C8.86195 4.80766 9.17078 4.65219 9.32664 4.37445C10.2998 2.64 12.1264 1.5625 14.0938 1.5625C15.6352 1.5625 17.1213 2.23555 18.1709 3.40914C18.4252 3.69367 18.848 3.75273 19.1708 3.54859C19.528 3.32258 19.9472 3.20312 20.3828 3.20312C21.3773 3.20312 22.2662 3.83289 22.5948 4.77008C22.6747 4.9982 22.8558 5.17656 23.0852 5.25297C23.3145 5.32937 23.5663 5.29531 23.7671 5.16062C24.2996 4.80359 24.9495 4.68352 25.5975 4.82258C26.4412 5.00305 27.1623 5.71539 27.3511 6.55531C27.7958 8.52906 25.7726 10.1481 23.7838 9.13648ZM27.4141 17.2656H30.5391V29.0625H27.4141V17.2656ZM33.6641 29.8438C33.6641 31.1361 32.6127 32.1875 31.3203 32.1875H27.4141V30.625H31.3203C31.7518 30.625 32.1016 30.2752 32.1016 29.8438V16.4844C32.1016 16.0529 31.7518 15.7031 31.3203 15.7031H27.4141V14.1406H31.3203C32.6127 14.1406 33.6641 15.192 33.6641 16.4844V29.8438Z" fill="white"/>
            </Svg>

            </TouchableOpacity>
            <Text style={{ fontWeight:'bold', fontSize: 15, color: '#ffffff', textAlign:'center', margin: 10}}>Boire</Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('destinationmanger')}
            style={{ width: 70, height: 70, backgroundColor: '#ffffff', marginTop: 20, marginRight: 20, marginLeft: 20, borderRadius: 10, flexDirection: 'column' }}>
            <Svg width="45" height="33" viewBox="0 0 45 33" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ alignSelf: 'center', marginTop: 18 }}>
                <Path d="M2.10889 12.533V30.5716C2.10889 31.5412 2.89709 32.3294 3.8667 32.3294C4.83631 32.3294 5.62451 31.5412 5.62451 30.5716V12.533C6.83459 12.2187 7.73389 11.1267 7.73389 9.8203V1.38139C7.73389 0.992565 7.41959 0.678268 7.03076 0.678268C6.64193 0.678268 6.32764 0.992565 6.32764 1.38139V7.00639H5.62451V1.38139C5.62451 0.992565 5.31022 0.678268 4.92139 0.678268C4.53256 0.678268 4.21826 0.992565 4.21826 1.38139V7.00639H3.51514V1.38139C3.51514 0.992565 3.20084 0.678268 2.81201 0.678268C2.42318 0.678268 2.10889 0.992565 2.10889 1.38139V7.00639H1.40576V1.38139C1.40576 0.992565 1.09146 0.678268 0.702637 0.678268C0.313809 0.678268 -0.000488281 0.992565 -0.000488281 1.38139V9.8203C-0.000488281 11.1267 0.898809 12.2187 2.10889 12.533ZM4.21826 30.5723C4.21826 30.7657 4.06006 30.9239 3.8667 30.9239C3.67334 30.9239 3.51514 30.7657 3.51514 30.5723V12.6328H4.21826V30.5723ZM1.40576 8.41264H6.32764V9.8203C6.32764 10.5958 5.69693 11.2265 4.92139 11.2265H2.81201C2.03646 11.2265 1.40576 10.5958 1.40576 9.8203V8.41264Z" fill="black"/>
                <Path d="M40.0767 0.671265C39.6878 0.671265 39.3735 0.985562 39.3735 1.37439C39.3735 1.37861 39.3756 1.38142 39.3756 1.38494V1.38564V30.5724C39.3756 31.542 40.1638 32.3302 41.1335 32.3302C42.1031 32.3302 42.8913 31.542 42.8913 30.5724V18.2635H44.2975C44.6863 18.2635 45.0006 17.9492 45.0006 17.5603V5.59455C45.0006 2.87978 42.7914 0.671265 40.0767 0.671265ZM41.485 30.5724C41.485 30.7657 41.3268 30.9239 41.1335 30.9239C40.9401 30.9239 40.7819 30.7657 40.7819 30.5724V18.2635H41.485V30.5724ZM43.5944 16.8572H40.7819V2.14923C42.3843 2.47689 43.5944 3.8972 43.5944 5.59455V16.8572Z" fill="black"/>
                <Path d="M22.8508 0.669846C14.1279 0.669846 7.03052 7.76719 7.03052 16.4902C7.03052 25.2131 14.1279 32.3105 22.8508 32.3105C31.5738 32.3105 38.6711 25.2131 38.6711 16.4902C38.6711 7.76719 31.5738 0.669846 22.8508 0.669846ZM22.8508 30.9042C14.9027 30.9042 8.43677 24.4383 8.43677 16.4902C8.43677 8.54203 14.9027 2.0761 22.8508 2.0761C30.799 2.0761 37.2649 8.54203 37.2649 16.4902C37.2649 24.4383 30.799 30.9042 22.8508 30.9042Z" fill="black"/>
                <Path d="M22.8508 5.59172C16.8412 5.59172 11.9524 10.4805 11.9524 16.4902C11.9524 22.4998 16.8412 27.3886 22.8508 27.3886C28.8604 27.3886 33.7493 22.4998 33.7493 16.4902C33.7493 10.4805 28.8604 5.59172 22.8508 5.59172ZM22.8508 25.9823C17.6168 25.9823 13.3586 21.7242 13.3586 16.4902C13.3586 11.2561 17.6168 6.99797 22.8508 6.99797C28.0849 6.99797 32.343 11.2561 32.343 16.4902C32.343 21.7242 28.0849 25.9823 22.8508 25.9823Z" fill="black"/>
            </Svg>

            </TouchableOpacity>
            <Text style={{ fontWeight:'bold', fontSize: 15, color: '#ffffff', textAlign:'center', margin: 10}}>Manger</Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('destinationcafe')}
            style={{ width: 70, height: 70, backgroundColor: '#ffffff', marginTop: 20, marginRight: 20, marginLeft: 20, borderRadius: 10, flexDirection: 'column' }}>
            <Svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ alignSelf: 'center', marginTop: 12 }}>
                <Path d="M33.4375 27.3372C37.056 27.3372 40 24.3933 40 20.7747C40 17.1561 37.056 14.2122 33.4375 14.2122H21.7968C21.3654 14.2122 21.0155 14.562 21.0155 14.9934C21.0155 15.4249 21.3654 15.7747 21.7968 15.7747H31.0706V19.7339C31.0706 24.2562 29.1491 28.5501 25.7902 31.5625H10.7009C10.724 31.5402 10.7476 31.5185 10.7704 31.4958C11.6745 30.5917 12.2434 29.4506 12.3723 28.2826C12.5082 27.05 12.1452 25.9333 11.3501 25.1381C10.0911 23.8793 8.04641 23.7786 6.3 24.7352C5.76406 23.1223 5.49187 21.4445 5.49187 19.7339V15.7747H14.7656C15.1971 15.7747 15.5469 15.4249 15.5469 14.9934C15.5469 14.562 15.1971 14.2122 14.7656 14.2122H4.71055C4.27914 14.2122 3.9293 14.562 3.9293 14.9934V19.7339C3.9293 21.788 4.28633 23.7991 4.98922 25.721C4.08703 26.6246 3.51922 27.7644 3.39055 28.9309C3.28164 29.9177 3.49336 30.8298 3.98992 31.5625H0.78125C0.349766 31.5625 0 31.9123 0 32.3438C0 34.8423 2.03273 36.875 4.53125 36.875H6.95352C7.31648 38.6558 8.89492 40 10.7812 40H25.7812C27.6676 40 29.246 38.6558 29.6089 36.875H32.0312C34.5298 36.875 36.5624 34.8423 36.5624 32.3438C36.5624 31.9123 36.2127 31.5625 35.7812 31.5625H28.0136C29.1824 30.295 30.149 28.8699 30.8907 27.3373H33.4375V27.3372ZM10.8191 28.1113C10.7291 28.9275 10.3194 29.7371 9.66539 30.3909V30.391C9.01156 31.0448 8.20203 31.4545 7.3857 31.5446C7.09227 31.577 6.81258 31.5651 6.55336 31.5123C6.47234 30.5391 7.10094 29.6168 8.07766 29.363C9.36711 29.028 10.3122 28.032 10.6465 26.8327C10.8104 27.2041 10.871 27.6404 10.8191 28.1113ZM4.94352 29.1023C5.03359 28.2861 5.44328 27.4765 6.09719 26.8227C6.86758 26.0523 7.83266 25.6464 8.69641 25.6464C8.87234 25.6464 9.04398 25.6638 9.20898 25.6978C9.2918 26.6724 8.66281 27.5966 7.68484 27.8507C6.39547 28.1857 5.45039 29.1816 5.11609 30.3811C4.95227 30.0094 4.89156 29.5732 4.94352 29.1023ZM32.0312 35.3125H28.9062C28.4748 35.3125 28.1249 35.6623 28.1249 36.0937C28.1249 37.3861 27.0735 38.4375 25.7812 38.4375H10.7812C9.48891 38.4375 8.4375 37.3861 8.4375 36.0937C8.4375 35.6623 8.08766 35.3125 7.65625 35.3125H4.53125C3.16453 35.3125 2.01055 34.3842 1.6668 33.125H34.8956C34.5519 34.3842 33.3979 35.3125 32.0312 35.3125ZM33.4375 15.7747C36.1945 15.7747 38.4375 18.0177 38.4375 20.7747C38.4375 23.5317 36.1945 25.7747 33.4375 25.7747H31.555C31.7809 25.162 31.9731 24.5363 32.1295 23.8997H33.4375C35.1606 23.8997 36.5625 22.4978 36.5625 20.7747C36.5625 19.0516 35.1606 17.6497 33.4375 17.6497H32.6331V15.7747H33.4375ZM32.6331 19.2122H33.4375C34.2991 19.2122 35 19.9131 35 20.7747C35 21.6363 34.2991 22.3372 33.4375 22.3372H32.4369C32.5657 21.4814 32.6331 20.6117 32.6331 19.7339V19.2122Z" fill="black"/>
                <Path d="M24.0311 10.932C23.726 11.237 23.726 11.7317 24.0311 12.0369C24.1837 12.1895 24.3836 12.2657 24.5835 12.2657C24.7835 12.2657 24.9834 12.1895 25.136 12.0369C26.5155 10.6573 26.5155 8.4126 25.136 7.03306C24.7628 6.65994 24.5572 6.16377 24.5572 5.63603C24.5572 5.1083 24.7628 4.61221 25.136 4.239C25.441 3.93392 25.441 3.43924 25.136 3.13416C24.831 2.82908 24.3364 2.82908 24.031 3.13416C23.3628 3.80244 22.9946 4.69095 22.9946 5.63603C22.9946 6.58111 23.3628 7.46963 24.031 8.13791C24.8014 8.90822 24.8014 10.1616 24.0311 10.932Z" fill="black"/>
                <Path d="M11.4266 10.9319C11.1215 11.237 11.1215 11.7317 11.4266 12.0369C11.5791 12.1894 11.7791 12.2657 11.979 12.2657C12.1789 12.2657 12.3788 12.1894 12.5314 12.0369C13.9109 10.6573 13.9109 8.41257 12.5314 7.03304C11.7611 6.26273 11.7611 5.00929 12.5314 4.23898C12.8365 3.9339 12.8365 3.43922 12.5314 3.13406C12.2263 2.82898 11.7317 2.82898 11.4265 3.13406C10.047 4.51359 10.047 6.75836 11.4265 8.13789C12.1969 8.9082 12.1969 10.1616 11.4266 10.9319Z" fill="black"/>
                <Path d="M17.7288 10.9322C17.4237 11.2373 17.4237 11.732 17.7288 12.037C17.8814 12.1896 18.0812 12.2659 18.2812 12.2659C18.4812 12.2659 18.681 12.1895 18.8336 12.037C20.6136 10.257 20.6136 7.3607 18.8336 5.58062C18.2664 5.01344 17.9541 4.25937 17.9541 3.45726C17.9541 2.65515 18.2664 1.90109 18.8336 1.3339C19.1387 1.02883 19.1387 0.534139 18.8336 0.22906C18.5285 -0.0760178 18.034 -0.0760178 17.7287 0.22906C16.8664 1.09133 16.3916 2.23781 16.3916 3.45726C16.3916 4.67672 16.8664 5.8232 17.7287 6.68547C18.8996 7.85633 18.8996 9.76133 17.7288 10.9322Z" fill="black"/>
                <Path d="M18.2812 14.2125C18.0758 14.2125 17.8742 14.2953 17.7289 14.4406C17.5836 14.5867 17.5 14.7875 17.5 14.9938C17.5 15.1992 17.5835 15.4008 17.7289 15.5461C17.8742 15.6914 18.0758 15.775 18.2812 15.775C18.4867 15.775 18.6883 15.6914 18.8335 15.5461C18.9788 15.4008 19.0625 15.1992 19.0625 14.9938C19.0625 14.7875 18.9789 14.5867 18.8335 14.4406C18.6883 14.2953 18.4867 14.2125 18.2812 14.2125Z" fill="black"/>
            </Svg>

            </TouchableOpacity>
            <Text style={{ fontWeight:'bold', fontSize: 15, color: '#ffffff', textAlign:'center', margin: 10}}>Café</Text>
            </View>

        </View>

        <View style={{ flexDirection: 'row', justifyContent:'center', marginBottom: 50 }}>
          <View style={{ flexDirection: 'column', justifyContent:'center' }}>
            <View style={{ flexDirection: 'column', height: 220, width: 285, backgroundColor: '#ffffff', marginTop: 10, borderRadius: 10 }}>
              <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginTop: 10, marginLeft: 20 }}>
              <Image
                style={styles.smallpic}
                source={require('../assets/golfbrau.png')}
            />
            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
              <Svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 5, marginRight: 5 }}>
              <Path d="M5.50001 0C2.74306 0 0.5 2.24306 0.5 5.00001C0.5 5.82765 0.706924 6.64825 1.10029 7.3761L5.22658 14.8389C5.28152 14.9384 5.38619 15 5.50001 15C5.61383 15 5.71851 14.9384 5.77344 14.8389L9.90125 7.37364C10.2931 6.64825 10.5 5.82762 10.5 4.99998C10.5 2.24306 8.25696 0 5.50001 0ZM5.50001 7.5C4.12153 7.5 3.00002 6.37849 3.00002 5.00001C3.00002 3.62153 4.12153 2.50002 5.50001 2.50002C6.87849 2.50002 8 3.62153 8 5.00001C8 6.37849 6.87849 7.5 5.50001 7.5Z" fill="#2C2C2C"/>
              </Svg>

              <View style={{ flexDirection: 'column' }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#2c2c2c' }}>Golf Braü Kantaoui</Text>
                  <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#2c2c2c' }}>HOTEL GOLF RESIDENCE {"\n"} 4011 Hammam Sousse, Tunisie</Text>
              </View>
            </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
              <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
                <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M13.352 7.4748C12.7129 7.4748 12.1637 7.1087 11.8932 6.57505C11.6228 7.1087 11.0715 7.4748 10.4323 7.4748C9.79321 7.4748 9.24085 7.1087 8.9704 6.57505C8.69994 7.1087 8.14703 7.4748 7.50789 7.4748C6.86876 7.4748 6.3156 7.1087 6.04514 6.57505C5.77469 7.1087 5.22142 7.4748 4.58229 7.4748C3.94315 7.4748 3.38984 7.1087 3.11933 6.57505C2.84888 7.1087 2.28708 7.4748 1.64795 7.4748C1.36483 7.4748 1.10987 7.40296 0.857624 7.27659V13.352H0V14.9664H14.9832V13.352H14.176V7.24758C13.9238 7.39176 13.656 7.4748 13.352 7.4748ZM7.51682 8.35765H12.5112V10.8296H7.51682V8.35765ZM2.52242 8.35765H5.85202V12.4944H2.52242V8.35765Z" fill="#2C2C2C"/>
                <Path d="M15 5.88562L14.9988 5.88305C14.9988 5.88396 14.9988 5.88476 14.9988 5.88562H15Z" fill="#2C2C2C"/>
                <Path d="M0.0168457 5.88562H0.0181069C0.0180565 5.88481 0.0180565 5.88406 0.0180565 5.8832L0.0168457 5.88562Z" fill="#2C2C2C"/>
                <Path d="M3.1607 5.83517L4.22088 2.50562H6.45892L6.00196 5.83517H9.01515L8.56898 2.50562H10.8745L11.8574 5.83517H14.9759L13.3689 2.50562V0.0335979H1.7153V2.50562L0.0424805 5.83517H3.1607Z" fill="#2C2C2C"/>
                </Svg>
                <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#2c2c2c', marginLeft: 10 }}>Réstaurant À La Carte / Lounge</Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
              <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M7.5 0C3.36433 0 0 3.36433 0 7.5C0 11.6357 3.36433 15 7.5 15C11.6357 15 15 11.6357 15 7.5C15 3.36433 11.6357 0 7.5 0ZM11.0669 11.3793C10.945 11.5012 10.785 11.5625 10.625 11.5625C10.465 11.5625 10.3049 11.5012 10.1832 11.3793L7.05814 8.25439C6.94061 8.13755 6.87504 7.97871 6.87504 7.81254V3.75C6.87504 3.40439 7.15496 3.12504 7.5 3.12504C7.84504 3.12504 8.12496 3.40439 8.12496 3.75V7.55379L11.0669 10.4956C11.3112 10.7401 11.3112 11.135 11.0669 11.3793Z" fill="#2C2C2C"/>
              </Svg>

              <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#2c2c2c', marginLeft: 10 }}>Ouvert De 10:00 À 18:00 </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
              <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M13.7964 9.84578C12.878 9.84578 11.9763 9.70215 11.1218 9.41977C10.7031 9.27695 10.1884 9.40797 9.93285 9.67043L8.24625 10.9436C6.29027 9.89953 5.08543 8.69508 4.05559 6.75379L5.29133 5.11113C5.61238 4.79051 5.72754 4.32215 5.58957 3.8827C5.30598 3.02371 5.16191 2.12242 5.16191 1.20367C5.16195 0.539961 4.62199 0 3.95832 0H1.20363C0.539961 0 0 0.539961 0 1.20363C0 8.81105 6.18898 15 13.7964 15C14.4601 15 15 14.46 15 13.7964V11.0494C15 10.3857 14.46 9.84578 13.7964 9.84578Z" fill="#2C2C2C"/>
              </Svg>

                <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#2c2c2c', marginLeft: 10, marginTop: 3 }}>97 223 862</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'column', alignSelf: 'flex-end', marginRight: 10 }}>
                <TouchableOpacity style={{ width: 94, height: 30, backgroundColor: '#2c2c2c', borderRadius: 20 }} onPress={() => navigation.navigate('destevents')}>
                  <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', padding: 7 }}>Events</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 94, height: 30, backgroundColor: '#2c2c2c', borderRadius: 20, marginTop: 10, marginBottom: -10 }} onPress={() => navigation.navigate('destmenus')}>
                  <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', padding: 7 }}>Menus</Text>
                </TouchableOpacity>
            </View>

            </View>

            <TouchableOpacity style={{ width: 94, height: 30, backgroundColor: '#FA4A0C', borderRadius: 20, marginTop: 20, alignSelf: 'center' }}>
                  <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', padding: 7 }}>S'abonner</Text>
            </TouchableOpacity>
            

            </View>

            <View style={{ flexDirection: 'column', height: 220, width: 285, backgroundColor: '#ffffff', marginTop: 10, borderRadius: 10 }}>
              <View style={{ flexDirection: 'row', alignSelf: 'flex-start', marginTop: 10, marginLeft: 20 }}>
              <Image
                style={styles.smallpic}
                source={require('../assets/golfbrau.png')}
            />
            <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
              <Svg width="11" height="15" viewBox="0 0 11 15" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 5, marginRight: 5 }}>
              <Path d="M5.50001 0C2.74306 0 0.5 2.24306 0.5 5.00001C0.5 5.82765 0.706924 6.64825 1.10029 7.3761L5.22658 14.8389C5.28152 14.9384 5.38619 15 5.50001 15C5.61383 15 5.71851 14.9384 5.77344 14.8389L9.90125 7.37364C10.2931 6.64825 10.5 5.82762 10.5 4.99998C10.5 2.24306 8.25696 0 5.50001 0ZM5.50001 7.5C4.12153 7.5 3.00002 6.37849 3.00002 5.00001C3.00002 3.62153 4.12153 2.50002 5.50001 2.50002C6.87849 2.50002 8 3.62153 8 5.00001C8 6.37849 6.87849 7.5 5.50001 7.5Z" fill="#2C2C2C"/>
              </Svg>

              <View style={{ flexDirection: 'column' }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#2c2c2c' }}>Golf Braü Kantaoui</Text>
                  <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#2c2c2c' }}>HOTEL GOLF RESIDENCE {"\n"} 4011 Hammam Sousse, Tunisie</Text>
              </View>
            </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

              <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
              <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
                <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Path d="M13.352 7.4748C12.7129 7.4748 12.1637 7.1087 11.8932 6.57505C11.6228 7.1087 11.0715 7.4748 10.4323 7.4748C9.79321 7.4748 9.24085 7.1087 8.9704 6.57505C8.69994 7.1087 8.14703 7.4748 7.50789 7.4748C6.86876 7.4748 6.3156 7.1087 6.04514 6.57505C5.77469 7.1087 5.22142 7.4748 4.58229 7.4748C3.94315 7.4748 3.38984 7.1087 3.11933 6.57505C2.84888 7.1087 2.28708 7.4748 1.64795 7.4748C1.36483 7.4748 1.10987 7.40296 0.857624 7.27659V13.352H0V14.9664H14.9832V13.352H14.176V7.24758C13.9238 7.39176 13.656 7.4748 13.352 7.4748ZM7.51682 8.35765H12.5112V10.8296H7.51682V8.35765ZM2.52242 8.35765H5.85202V12.4944H2.52242V8.35765Z" fill="#2C2C2C"/>
                <Path d="M15 5.88562L14.9988 5.88305C14.9988 5.88396 14.9988 5.88476 14.9988 5.88562H15Z" fill="#2C2C2C"/>
                <Path d="M0.0168457 5.88562H0.0181069C0.0180565 5.88481 0.0180565 5.88406 0.0180565 5.8832L0.0168457 5.88562Z" fill="#2C2C2C"/>
                <Path d="M3.1607 5.83517L4.22088 2.50562H6.45892L6.00196 5.83517H9.01515L8.56898 2.50562H10.8745L11.8574 5.83517H14.9759L13.3689 2.50562V0.0335979H1.7153V2.50562L0.0424805 5.83517H3.1607Z" fill="#2C2C2C"/>
                </Svg>
                <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#2c2c2c', marginLeft: 10 }}>Réstaurant À La Carte / Lounge</Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
              <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M7.5 0C3.36433 0 0 3.36433 0 7.5C0 11.6357 3.36433 15 7.5 15C11.6357 15 15 11.6357 15 7.5C15 3.36433 11.6357 0 7.5 0ZM11.0669 11.3793C10.945 11.5012 10.785 11.5625 10.625 11.5625C10.465 11.5625 10.3049 11.5012 10.1832 11.3793L7.05814 8.25439C6.94061 8.13755 6.87504 7.97871 6.87504 7.81254V3.75C6.87504 3.40439 7.15496 3.12504 7.5 3.12504C7.84504 3.12504 8.12496 3.40439 8.12496 3.75V7.55379L11.0669 10.4956C11.3112 10.7401 11.3112 11.135 11.0669 11.3793Z" fill="#2C2C2C"/>
              </Svg>

              <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#2c2c2c', marginLeft: 10 }}>Ouvert De 10:00 À 18:00 </Text>
              </View>

              <View style={{ flexDirection: 'row', marginTop: 10, marginLeft: 15 }}>
              <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M13.7964 9.84578C12.878 9.84578 11.9763 9.70215 11.1218 9.41977C10.7031 9.27695 10.1884 9.40797 9.93285 9.67043L8.24625 10.9436C6.29027 9.89953 5.08543 8.69508 4.05559 6.75379L5.29133 5.11113C5.61238 4.79051 5.72754 4.32215 5.58957 3.8827C5.30598 3.02371 5.16191 2.12242 5.16191 1.20367C5.16195 0.539961 4.62199 0 3.95832 0H1.20363C0.539961 0 0 0.539961 0 1.20363C0 8.81105 6.18898 15 13.7964 15C14.4601 15 15 14.46 15 13.7964V11.0494C15 10.3857 14.46 9.84578 13.7964 9.84578Z" fill="#2C2C2C"/>
              </Svg>

                <Text style={{ fontSize: 9, fontWeight: 'bold', color: '#2c2c2c', marginLeft: 10, marginTop: 3 }}>97 223 862</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'column', alignSelf: 'flex-end', marginRight: 10 }}>
                <TouchableOpacity style={{ width: 94, height: 30, backgroundColor: '#2c2c2c', borderRadius: 20 }} onPress={() => navigation.navigate('destevents')}>
                  <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', padding: 7 }}>Events</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: 94, height: 30, backgroundColor: '#2c2c2c', borderRadius: 20, marginTop: 10, marginBottom: -10 }} onPress={() => navigation.navigate('destmenus')}>
                  <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', padding: 7 }}>Menus</Text>
                </TouchableOpacity>
            </View>

            </View>

            <TouchableOpacity style={{ width: 94, height: 30, backgroundColor: '#FA4A0C', borderRadius: 20, marginTop: 20, alignSelf: 'center' }}>
                  <Text style={{ fontSize: 10, fontWeight: 'bold', color: '#ffffff', textAlign: 'center', padding: 7 }}>S'abonner</Text>
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
       width: 72,
       height: 66,
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

export default Destinations
