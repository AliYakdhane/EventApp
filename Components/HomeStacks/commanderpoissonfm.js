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


const CommanderPoissonFm = ({navigation}) => {

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
                    <Svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ alignSelf: 'center', marginTop: 10 }}>
                    <Mask id="path-1-inside-1" fill="white">
                    <Path d="M34.1053 9.21968C33.0274 8.13596 31.7452 7.27681 30.333 6.69197C28.9208 6.10712 27.4066 5.80819 25.8781 5.81249H7.59375C7.47267 5.81205 7.35493 5.8521 7.25923 5.92628C7.16354 6.00046 7.09539 6.1045 7.06562 6.22186H4.9375C4.54382 6.22186 4.16626 6.06547 3.88789 5.7871C3.60951 5.50873 3.45312 5.13117 3.45312 4.73749C3.45312 4.34381 3.60951 3.96625 3.88789 3.68788C4.16626 3.4095 4.54382 3.25311 4.9375 3.25311H11.95C12.095 3.25311 12.2341 3.1955 12.3367 3.09294C12.4393 2.99038 12.4969 2.85128 12.4969 2.70624C12.4969 2.5612 12.4393 2.4221 12.3367 2.31954C12.2341 2.21698 12.095 2.15936 11.95 2.15936H4.9375C4.25374 2.15936 3.59798 2.43099 3.11449 2.91448C2.631 3.39797 2.35938 4.05373 2.35938 4.73749C2.35938 5.42125 2.631 6.07701 3.11449 6.5605C3.59798 7.04399 4.25374 7.31561 4.9375 7.31561H7.1875L7.22281 7.5453C7.25125 7.73124 7.28531 7.91468 7.3225 8.09686H4.9375C4.04654 8.09686 3.19207 7.74293 2.56206 7.11292C1.93206 6.48292 1.57812 5.62845 1.57812 4.73749C1.57812 3.84653 1.93206 2.99206 2.56206 2.36205C3.19207 1.73205 4.04654 1.37811 4.9375 1.37811H14.1562C14.3013 1.37811 14.4404 1.3205 14.5429 1.21794C14.6455 1.11538 14.7031 0.976278 14.7031 0.831238C14.7031 0.686198 14.6455 0.547098 14.5429 0.444539C14.4404 0.34198 14.3013 0.284363 14.1562 0.284363H4.9375C3.75646 0.284363 2.62379 0.75353 1.78867 1.58865C0.953542 2.42378 0.484375 3.55645 0.484375 4.73749C0.484375 5.91853 0.953542 7.0512 1.78867 7.88632C2.62379 8.72145 3.75646 9.19061 4.9375 9.19061H7.60687C8.03868 10.5699 8.74395 11.848 9.68059 12.9486C10.6172 14.0493 11.766 14.95 13.0584 15.5969C12.6765 16.6816 12.6268 17.8556 12.9156 18.9687C12.95 19.0803 13.0192 19.1778 13.1132 19.247C13.2071 19.3162 13.3208 19.3534 13.4375 19.3531C13.4915 19.3524 13.5452 19.344 13.5969 19.3281C13.7351 19.2856 13.8508 19.19 13.9188 19.0623C13.9867 18.9347 14.0013 18.7853 13.9594 18.6469C13.7522 17.7848 13.7889 16.882 14.0656 16.0397C14.6556 16.2625 15.264 16.4333 15.8837 16.55C15.6545 17.5441 15.6925 18.5812 15.9938 19.5559C16.0324 19.6615 16.1027 19.7526 16.1949 19.8169C16.2871 19.8812 16.3969 19.9156 16.5094 19.9153C16.5723 19.9142 16.6346 19.9026 16.6938 19.8809C16.7613 19.857 16.8234 19.8199 16.8766 19.7719C16.9298 19.7239 16.973 19.6659 17.0038 19.6011C17.0346 19.5364 17.0523 19.4663 17.0559 19.3947C17.0596 19.3231 17.049 19.2516 17.025 19.184C16.7871 18.3757 16.7686 17.5185 16.9713 16.7006C17.2909 16.7284 17.6141 16.7434 17.94 16.7434H18.875C18.693 17.8307 18.8287 18.9473 19.2656 19.9594C19.3096 20.0522 19.379 20.1306 19.4659 20.1854C19.5528 20.2402 19.6535 20.2691 19.7562 20.2687C19.8387 20.2687 19.92 20.2494 19.9937 20.2125C20.0585 20.1817 20.1165 20.1383 20.1644 20.0849C20.2123 20.0315 20.2491 19.9691 20.2726 19.9014C20.2962 19.8336 20.306 19.7619 20.3016 19.6903C20.2972 19.6187 20.2786 19.5487 20.2469 19.4844C19.8875 18.6176 19.7957 17.6631 19.9831 16.7437H24.2C25.4515 16.7447 26.6515 17.2421 27.5367 18.1267C28.4219 19.0114 28.9201 20.211 28.9219 21.4625C28.9219 23.5122 27.6309 26.3375 25.6625 28.6703C23.5287 27.6122 20.5219 27.3578 17.8531 28.0356C17.732 28.0663 17.625 28.1375 17.55 28.2375C17.475 28.3374 17.4365 28.4601 17.4409 28.585C17.4456 28.7165 17.5712 31.5403 19.595 32.7259C18.7792 33.9129 18.1969 35.2443 17.8791 36.649C17.8611 36.729 17.8613 36.812 17.8797 36.8919C17.8982 36.9718 17.9343 37.0465 17.9856 37.1106C18.0368 37.1746 18.1018 37.2262 18.1757 37.2617C18.2496 37.2972 18.3305 37.3156 18.4125 37.3156C24.4475 37.3156 26.5272 33.7715 27.1906 31.9909C27.2219 31.9765 27.2531 31.9647 27.2812 31.9484C30.3584 30.2609 37.5156 25.4666 37.5156 17.45C37.5197 15.9208 37.2204 14.4059 36.635 12.9932C36.0496 11.5804 35.1898 10.2979 34.1053 9.21968ZM8.30313 7.37968L8.23063 6.90624H23.7225C23.9272 8.77968 23.7787 13.1903 23.0769 15.65H17.9406C15.6081 15.661 13.3498 14.8309 11.5797 13.3119C9.8096 11.7929 8.64631 9.68681 8.30313 7.37968ZM24.2069 15.6503C24.8691 13.0528 25.0072 8.90686 24.8175 6.90624H25.8781C28.576 6.89966 31.1722 7.93511 33.125 9.79655C32.6637 12.1856 31.0219 15.8506 28.1319 17.1928C27.064 16.2035 25.6626 15.6527 24.2069 15.6503ZM28.8944 18.0453C31.6756 16.5781 33.3631 13.2594 34.0247 10.7553C35.5806 12.6387 36.4287 15.007 36.4219 17.45C36.4217 18.8996 36.1576 20.3371 35.6425 21.6922C34.7916 22.1904 33.8462 22.5058 32.8667 22.6183C31.8871 22.7308 30.8948 22.6379 29.9531 22.3456C29.9929 22.0529 30.0137 21.7579 30.0156 21.4625C30.0153 20.233 29.6223 19.0358 28.8941 18.0453H28.8944ZM19.125 36.2028C19.4826 34.9929 20.0692 33.8629 20.8528 32.8741C20.9125 32.8063 20.9545 32.7249 20.975 32.6369C20.9956 32.549 20.994 32.4574 20.9706 32.3702C20.9471 32.283 20.9024 32.203 20.8404 32.1373C20.7785 32.0717 20.7013 32.0223 20.6156 31.9937C19.1434 31.5031 18.7075 29.8037 18.5819 28.9887C20.7097 28.5196 22.9301 28.7131 24.9447 29.5431C24.8103 29.7715 24.73 30.0275 24.7098 30.2917C24.6896 30.5559 24.7301 30.8212 24.8282 31.0673C24.9263 31.3134 25.0794 31.5338 25.2758 31.7117C25.4722 31.8895 25.7066 32.0201 25.9613 32.0934C25.245 33.6319 23.4494 35.97 19.125 36.2028ZM26.7537 30.9894C26.7132 31.0115 26.6703 31.0292 26.6259 31.0422L26.6031 31.0481C26.5073 31.0725 26.4072 31.0746 26.3104 31.0543C26.2136 31.034 26.1228 30.9918 26.0448 30.931C25.9669 30.8701 25.9039 30.7922 25.8607 30.7033C25.8175 30.6143 25.7952 30.5167 25.7956 30.4178C25.7979 30.2492 25.8635 30.0877 25.9794 29.9653C27.8325 27.9569 29.1884 25.5591 29.7406 23.425C30.2623 23.5719 30.7964 23.6703 31.3363 23.7187H31.3487C31.605 23.7437 31.8519 23.7531 32.0925 23.7531C33.0633 23.7545 34.0265 23.5815 34.9362 23.2425C32.7812 27.2797 28.8078 29.8625 26.755 30.9894H26.7537Z"/>
                    </Mask>
                    <Path d="M34.1053 9.21968C33.0274 8.13596 31.7452 7.27681 30.333 6.69197C28.9208 6.10712 27.4066 5.80819 25.8781 5.81249H7.59375C7.47267 5.81205 7.35493 5.8521 7.25923 5.92628C7.16354 6.00046 7.09539 6.1045 7.06562 6.22186H4.9375C4.54382 6.22186 4.16626 6.06547 3.88789 5.7871C3.60951 5.50873 3.45312 5.13117 3.45312 4.73749C3.45312 4.34381 3.60951 3.96625 3.88789 3.68788C4.16626 3.4095 4.54382 3.25311 4.9375 3.25311H11.95C12.095 3.25311 12.2341 3.1955 12.3367 3.09294C12.4393 2.99038 12.4969 2.85128 12.4969 2.70624C12.4969 2.5612 12.4393 2.4221 12.3367 2.31954C12.2341 2.21698 12.095 2.15936 11.95 2.15936H4.9375C4.25374 2.15936 3.59798 2.43099 3.11449 2.91448C2.631 3.39797 2.35938 4.05373 2.35938 4.73749C2.35938 5.42125 2.631 6.07701 3.11449 6.5605C3.59798 7.04399 4.25374 7.31561 4.9375 7.31561H7.1875L7.22281 7.5453C7.25125 7.73124 7.28531 7.91468 7.3225 8.09686H4.9375C4.04654 8.09686 3.19207 7.74293 2.56206 7.11292C1.93206 6.48292 1.57812 5.62845 1.57812 4.73749C1.57812 3.84653 1.93206 2.99206 2.56206 2.36205C3.19207 1.73205 4.04654 1.37811 4.9375 1.37811H14.1562C14.3013 1.37811 14.4404 1.3205 14.5429 1.21794C14.6455 1.11538 14.7031 0.976278 14.7031 0.831238C14.7031 0.686198 14.6455 0.547098 14.5429 0.444539C14.4404 0.34198 14.3013 0.284363 14.1562 0.284363H4.9375C3.75646 0.284363 2.62379 0.75353 1.78867 1.58865C0.953542 2.42378 0.484375 3.55645 0.484375 4.73749C0.484375 5.91853 0.953542 7.0512 1.78867 7.88632C2.62379 8.72145 3.75646 9.19061 4.9375 9.19061H7.60687C8.03868 10.5699 8.74395 11.848 9.68059 12.9486C10.6172 14.0493 11.766 14.95 13.0584 15.5969C12.6765 16.6816 12.6268 17.8556 12.9156 18.9687C12.95 19.0803 13.0192 19.1778 13.1132 19.247C13.2071 19.3162 13.3208 19.3534 13.4375 19.3531C13.4915 19.3524 13.5452 19.344 13.5969 19.3281C13.7351 19.2856 13.8508 19.19 13.9188 19.0623C13.9867 18.9347 14.0013 18.7853 13.9594 18.6469C13.7522 17.7848 13.7889 16.882 14.0656 16.0397C14.6556 16.2625 15.264 16.4333 15.8837 16.55C15.6545 17.5441 15.6925 18.5812 15.9938 19.5559C16.0324 19.6615 16.1027 19.7526 16.1949 19.8169C16.2871 19.8812 16.3969 19.9156 16.5094 19.9153C16.5723 19.9142 16.6346 19.9026 16.6938 19.8809C16.7613 19.857 16.8234 19.8199 16.8766 19.7719C16.9298 19.7239 16.973 19.6659 17.0038 19.6011C17.0346 19.5364 17.0523 19.4663 17.0559 19.3947C17.0596 19.3231 17.049 19.2516 17.025 19.184C16.7871 18.3757 16.7686 17.5185 16.9713 16.7006C17.2909 16.7284 17.6141 16.7434 17.94 16.7434H18.875C18.693 17.8307 18.8287 18.9473 19.2656 19.9594C19.3096 20.0522 19.379 20.1306 19.4659 20.1854C19.5528 20.2402 19.6535 20.2691 19.7562 20.2687C19.8387 20.2687 19.92 20.2494 19.9937 20.2125C20.0585 20.1817 20.1165 20.1383 20.1644 20.0849C20.2123 20.0315 20.2491 19.9691 20.2726 19.9014C20.2962 19.8336 20.306 19.7619 20.3016 19.6903C20.2972 19.6187 20.2786 19.5487 20.2469 19.4844C19.8875 18.6176 19.7957 17.6631 19.9831 16.7437H24.2C25.4515 16.7447 26.6515 17.2421 27.5367 18.1267C28.4219 19.0114 28.9201 20.211 28.9219 21.4625C28.9219 23.5122 27.6309 26.3375 25.6625 28.6703C23.5287 27.6122 20.5219 27.3578 17.8531 28.0356C17.732 28.0663 17.625 28.1375 17.55 28.2375C17.475 28.3374 17.4365 28.4601 17.4409 28.585C17.4456 28.7165 17.5712 31.5403 19.595 32.7259C18.7792 33.9129 18.1969 35.2443 17.8791 36.649C17.8611 36.729 17.8613 36.812 17.8797 36.8919C17.8982 36.9718 17.9343 37.0465 17.9856 37.1106C18.0368 37.1746 18.1018 37.2262 18.1757 37.2617C18.2496 37.2972 18.3305 37.3156 18.4125 37.3156C24.4475 37.3156 26.5272 33.7715 27.1906 31.9909C27.2219 31.9765 27.2531 31.9647 27.2812 31.9484C30.3584 30.2609 37.5156 25.4666 37.5156 17.45C37.5197 15.9208 37.2204 14.4059 36.635 12.9932C36.0496 11.5804 35.1898 10.2979 34.1053 9.21968ZM8.30313 7.37968L8.23063 6.90624H23.7225C23.9272 8.77968 23.7787 13.1903 23.0769 15.65H17.9406C15.6081 15.661 13.3498 14.8309 11.5797 13.3119C9.8096 11.7929 8.64631 9.68681 8.30313 7.37968ZM24.2069 15.6503C24.8691 13.0528 25.0072 8.90686 24.8175 6.90624H25.8781C28.576 6.89966 31.1722 7.93511 33.125 9.79655C32.6637 12.1856 31.0219 15.8506 28.1319 17.1928C27.064 16.2035 25.6626 15.6527 24.2069 15.6503ZM28.8944 18.0453C31.6756 16.5781 33.3631 13.2594 34.0247 10.7553C35.5806 12.6387 36.4287 15.007 36.4219 17.45C36.4217 18.8996 36.1576 20.3371 35.6425 21.6922C34.7916 22.1904 33.8462 22.5058 32.8667 22.6183C31.8871 22.7308 30.8948 22.6379 29.9531 22.3456C29.9929 22.0529 30.0137 21.7579 30.0156 21.4625C30.0153 20.233 29.6223 19.0358 28.8941 18.0453H28.8944ZM19.125 36.2028C19.4826 34.9929 20.0692 33.8629 20.8528 32.8741C20.9125 32.8063 20.9545 32.7249 20.975 32.6369C20.9956 32.549 20.994 32.4574 20.9706 32.3702C20.9471 32.283 20.9024 32.203 20.8404 32.1373C20.7785 32.0717 20.7013 32.0223 20.6156 31.9937C19.1434 31.5031 18.7075 29.8037 18.5819 28.9887C20.7097 28.5196 22.9301 28.7131 24.9447 29.5431C24.8103 29.7715 24.73 30.0275 24.7098 30.2917C24.6896 30.5559 24.7301 30.8212 24.8282 31.0673C24.9263 31.3134 25.0794 31.5338 25.2758 31.7117C25.4722 31.8895 25.7066 32.0201 25.9613 32.0934C25.245 33.6319 23.4494 35.97 19.125 36.2028ZM26.7537 30.9894C26.7132 31.0115 26.6703 31.0292 26.6259 31.0422L26.6031 31.0481C26.5073 31.0725 26.4072 31.0746 26.3104 31.0543C26.2136 31.034 26.1228 30.9918 26.0448 30.931C25.9669 30.8701 25.9039 30.7922 25.8607 30.7033C25.8175 30.6143 25.7952 30.5167 25.7956 30.4178C25.7979 30.2492 25.8635 30.0877 25.9794 29.9653C27.8325 27.9569 29.1884 25.5591 29.7406 23.425C30.2623 23.5719 30.7964 23.6703 31.3363 23.7187H31.3487C31.605 23.7437 31.8519 23.7531 32.0925 23.7531C33.0633 23.7545 34.0265 23.5815 34.9362 23.2425C32.7812 27.2797 28.8078 29.8625 26.755 30.9894H26.7537Z" fill="#2C2C2C" stroke="black" stroke-width="2" mask="url(#path-1-inside-1)"/>
                    <Path d="M16.1759 14.6975L16.2723 14.2069C16.8217 14.3148 17.3804 14.369 17.9404 14.3687L17.9406 14.3687L19.2344 14.3687C19.2468 14.3687 19.2587 14.3638 19.2675 14.355C19.2763 14.3462 19.2812 14.3343 19.2812 14.3219C19.2812 14.3094 19.2763 14.2975 19.2675 14.2887C19.2587 14.2799 19.2468 14.275 19.2344 14.275L17.9409 14.275C17.9408 14.275 17.9407 14.275 17.9406 14.275C17.3869 14.2752 16.8345 14.2217 16.2912 14.115L16.2908 14.1149C16.2786 14.1125 16.2659 14.1151 16.2556 14.122C16.2505 14.1254 16.2461 14.1298 16.2427 14.1349L15.8265 13.8579L16.2427 14.1349C16.2392 14.1401 16.2369 14.1458 16.2357 14.1519C16.2345 14.1579 16.2345 14.1641 16.2357 14.1701C16.2369 14.1762 16.2393 14.1819 16.2427 14.187C16.2497 14.1974 16.2604 14.2045 16.2726 14.2069L16.1759 14.6975ZM16.1759 14.6975C16.7572 14.8116 17.3482 14.869 17.9406 14.8687H19.2344C19.3794 14.8687 19.5185 14.8111 19.6211 14.7086L16.1759 14.6975Z" fill="#2C2C2C" stroke="black"/>
                    <Path d="M14.464 8.2099C14.3394 8.33445 14.2546 8.49315 14.2202 8.66591L14.2202 8.66591C14.1859 8.83868 14.2035 9.01775 14.2709 9.18049L14.7329 8.98915L14.2709 9.18049C14.3383 9.34324 14.4525 9.48233 14.5989 9.58019C14.7454 9.67806 14.9176 9.73029 15.0938 9.73029L15.0942 9.73029C15.3302 9.7301 15.5565 9.63625 15.7234 9.46934C15.8903 9.30243 15.9842 9.07611 15.9844 8.84006V8.83966C15.9844 8.66351 15.9321 8.49132 15.8343 8.34486C15.7364 8.1984 15.5973 8.08424 15.4346 8.01683L15.4346 8.01683C15.2718 7.94942 15.0928 7.93179 14.92 7.96615C14.7472 8.00052 14.5885 8.08534 14.464 8.2099ZM14.464 8.2099L14.8175 8.56345L14.464 8.2099ZM15.9122 8.29277C16.0203 8.45458 16.0781 8.64479 16.0781 8.83939C16.0777 9.1004 15.9738 9.35061 15.7893 9.53518C15.6047 9.71975 15.3545 9.82362 15.0935 9.82404C14.8989 9.82399 14.7087 9.76626 14.5469 9.65815C14.385 9.54998 14.2588 9.39624 14.1843 9.21637C14.1098 9.0365 14.0903 8.83857 14.1283 8.64762C14.1663 8.45667 14.26 8.28127 14.3977 8.1436C14.5354 8.00594 14.7108 7.91218 14.9017 7.8742C15.0927 7.83622 15.2906 7.85571 15.4705 7.93022C15.6503 8.00472 15.8041 8.13089 15.9122 8.29277Z" fill="#2C2C2C" stroke="black"/>
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

export default CommanderPoissonFm
