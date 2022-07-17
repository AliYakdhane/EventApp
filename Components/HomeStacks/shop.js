import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Alert,
  Modal, TextInput} from 'react-native'
import {Picker} from '@react-native-picker/picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Svg, {
    G,
    Path,
    Rect,
    Defs,
    Mask
  } from 'react-native-svg';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';


  const originalWidth = 375;
  const originalHeight = 127;
  const aspectRatio = originalWidth / originalHeight;
  const windowWidth = Dimensions.get("window").width;


const Shop = ({navigation}) => {

    const [text, setText] = React.useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");


    renderInner = () => (
      <View style={styles.panel} >
        <Text style={{marginTop: 20, fontSize: 25, fontWeight: 'bold', color: '#2c2c2c', textAlign: 'center'}}>Mon Panier</Text>
          <View style={{ flexDirection: 'column', marginTop: 30 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2c2c2c'}}>Total: </Text>
              <Text style={{ fontSize: 20, color: '#2c2c2c'}}>84,000 DT</Text>
              </View>
          <TouchableOpacity style={{ width: 136, height: 50, borderRadius: 20, backgroundColor: '#FA4A0C', alignSelf: 'center', marginTop: 30 }}>
            <Text style={{ fontSize: 20, color: '#ffffff', textAlign: 'center', marginTop: 10}}>Commander</Text>
          </TouchableOpacity>
          </View>
      </View>
    );
  
    renderHeader = () => (
      <View style={styles.header}>
        <View style={styles.panelHeader}>
          <TouchableOpacity
          onPress={() => this.bs.current.snapTo(1)}>
            <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M15 30C23.2715 30 30 23.2715 30 15C30 6.7285 23.2715 0 15 0C6.7285 0 0 6.72967 0 15C0 23.2703 6.7285 30 15 30ZM15 2.32377C21.9888 2.32377 27.6762 8.01006 27.6762 15C27.6762 21.9899 21.9888 27.6762 15 27.6762C8.01006 27.6762 2.32377 21.9899 2.32377 15C2.32377 8.01006 8.01123 2.32377 15 2.32377Z" fill="#FA4A0C"/>
            <Path d="M8.36561 13.3966L14.1751 19.2061C14.6282 19.6569 15.3602 19.6569 15.8134 19.2061L21.6228 13.3966C21.9958 12.9621 21.9958 12.3196 21.6228 11.885C21.2057 11.3982 20.4714 11.3413 19.9845 11.7584L15 16.7429L10.0039 11.7583C9.55073 11.3075 8.81878 11.3075 8.36561 11.7583C7.91479 12.2115 7.91479 12.9435 8.36561 13.3966Z" fill="#FA4A0C"/>
            </Svg>

          </TouchableOpacity>
        </View>
      </View>
    );
  
    bs = React.createRef();
    fall = new Animated.Value(1);

   

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
            <Text style={{ fontSize: 25, fontWeight: 'bold', color: '#2c2c2c'}}>Commander</Text>


        <TouchableOpacity >
        <Svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 20 }}>
        <Path d="M20.4618 20.3852C18.734 20.3852 17.3092 21.8481 17.3092 23.6926C17.3092 25.5053 18.7036 27 20.4618 27C22.1897 27 23.6145 25.5371 23.6145 23.6926C23.5842 21.8799 22.1897 20.3852 20.4618 20.3852Z" fill="#2C2C2C"/>
        <Path d="M26.0093 4.61131C25.9487 4.61131 25.8577 4.57951 25.7668 4.57951H6.66905L6.36592 2.44876C6.18403 1.04947 5.0321 0 3.66798 0H1.21256C0.54565 0 0 0.572438 0 1.27208C0 1.97173 0.54565 2.54417 1.21256 2.54417H3.66798C3.81955 2.54417 3.9408 2.67138 3.97112 2.83039L5.85058 16.2509C6.09309 17.9364 7.48753 19.2085 9.12448 19.2085H21.7351C23.3114 19.2085 24.6755 18.0318 25.009 16.4099L26.9794 6.07421C27.1006 5.40636 26.6762 4.73852 26.0093 4.61131Z" fill="#2C2C2C"/>
        <Path d="M12.7319 23.5336C12.6712 21.7845 11.2768 20.3852 9.60955 20.3852C7.85134 20.4806 6.51753 22.0071 6.57816 23.8198C6.63879 25.5689 8.00291 26.9682 9.67018 26.9682H9.7308C11.4587 26.8728 12.8228 25.3463 12.7319 23.5336Z" fill="#2C2C2C"/>
        </Svg>


        </TouchableOpacity>

        </View>


        <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View style={{margin: 20,
    }}>
      <View style={{ flexDirection: 'column', marginBottom: 30, marginTop: 80 }}>
        <View style={styles.bigbox}>
        <View style={{ flexDirection: 'row' }}>
          <Image
                style={styles.smallpic}
                source={require('../../assets/pizza.png')}
            />
            <TouchableOpacity style={styles.circle}>
            <Ionicons style={{ alignSelf: 'center', marginLeft: 5}} name="md-close" size={25} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
            <View style={{ flexDirection: 'column' }} >
                  <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold', color:'#2c2c2c', marginLeft: 10 }}>Pizza 4 saisons</Text>
                  <Text style={{ marginTop: 10, fontSize: 12, color:'#2c2c2c', textAlign: 'center'}}>Quantité: 2</Text>
                  <Text style={{ marginTop: 10, fontSize: 15, color:'#FA4A0C', textAlign: 'center'}}>21,000 DT</Text>
            </View>
            
        </View>


        <View style={styles.bigbox}>
        <View style={{ flexDirection: 'row' }}>
          <Image
                style={styles.smallpic}
                source={require('../../assets/pizza.png')}
            />
            <TouchableOpacity style={styles.circle}>
            <Ionicons style={{ alignSelf: 'center', marginLeft: 5}} name="md-close" size={25} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
            <View style={{ flexDirection: 'column' }} >
            <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold', color:'#2c2c2c', marginLeft: 10 }}>Pizza 4 saisons</Text>
                  <Text style={{ marginTop: 10, fontSize: 12, color:'#2c2c2c', textAlign: 'center'}}>Quantité: 2</Text>
                  <Text style={{ marginTop: 10, fontSize: 15, color:'#FA4A0C', textAlign: 'center'}}>21,000 DT</Text>
            </View>
           
        </View>


        <View style={styles.bigbox}>
        <View style={{ flexDirection: 'row' }}>
          <Image
                style={styles.smallpic}
                source={require('../../assets/pizza.png')}
            />
            <TouchableOpacity style={styles.circle}>
            <Ionicons style={{ alignSelf: 'center', marginLeft: 5}} name="md-close" size={25} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
            <View style={{ flexDirection: 'column' }} >
            <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold', color:'#2c2c2c', marginLeft: 10 }}>Pizza 4 saisons</Text>
                  <Text style={{ marginTop: 10, fontSize: 12, color:'#2c2c2c', textAlign: 'center'}}>Quantité: 2</Text>
                  <Text style={{ marginTop: 10, fontSize: 15, color:'#FA4A0C', textAlign: 'center'}}>21,000 DT</Text>
            </View>
            
        </View>

        <View style={styles.bigbox}> 
        <View style={{ flexDirection: 'row' }}>
          <Image
                style={styles.smallpic}
                source={require('../../assets/pizza.png')}
            />
            <TouchableOpacity style={styles.circle}>
            <Ionicons style={{ alignSelf: 'center', marginLeft: 5}} name="md-close" size={25} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
            <View style={{ flexDirection: 'column' }} >
            <Text style={{ marginTop: 15, fontSize: 20, fontWeight: 'bold', color:'#2c2c2c', marginLeft: 10 }}>Pizza 4 saisons</Text>
                  <Text style={{ marginTop: 10, fontSize: 12, color:'#2c2c2c', textAlign: 'center'}}>Quantité: 2</Text>
                  <Text style={{ marginTop: 10, fontSize: 15, color:'#FA4A0C', textAlign: 'center'}}>21,000 DT</Text>
            </View>
           
        </View>

        

      </View>

        
    </Animated.View>

<View style={{ backgroundColor: '#ffffff', width: '100%', height: 43, borderTopLeftRadius: 50, borderTopRightRadius: 50, justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', 
    bottom: 0,  }}>

      <TouchableOpacity
      onPress={() => this.bs.current.snapTo(0)}>
        <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M15 0C6.7285 0 0 6.7285 0 15C0 23.2715 6.7285 30 15 30C23.2715 30 30 23.2703 30 15C30 6.72967 23.2715 0 15 0ZM15 27.6762C8.01123 27.6762 2.32377 21.9899 2.32377 15C2.32377 8.01006 8.01123 2.32377 15 2.32377C21.9899 2.32377 27.6762 8.01006 27.6762 15C27.6762 21.9899 21.9888 27.6762 15 27.6762Z" fill="#2C2C2C"/>
      <Path d="M21.6344 16.6034L15.8249 10.7939C15.3718 10.3431 14.6398 10.3431 14.1866 10.7939L8.37719 16.6034C8.00424 17.0379 8.00424 17.6804 8.37719 18.115C8.79431 18.6018 9.52861 18.6587 10.0155 18.2416L15 13.2571L19.9961 18.2417C20.4493 18.6925 21.1812 18.6925 21.6344 18.2417C22.0852 17.7885 22.0852 17.0565 21.6344 16.6034Z" fill="#2C2C2C"/>
      </Svg>
      </TouchableOpacity>

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
    tinyLogo: {
      width: 30,
      height: 30,
      alignSelf: 'center',
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 20
  },
  bigbox: {
    width: 300,
    height: 120,
    backgroundColor: '#ffffff',
    alignSelf: "center",
    margin: 20,
    flexDirection:"row",
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
  },
  smallpic: {
    width: 143,
    height: 120,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    borderRadius: 40,
    width: "80%",
    height: 50,
    backgroundColor: '#F9B300',
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowOffset: {
      width: 0,
      height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
  },
  circle: {
    width: 35,
    height: 35,
    borderRadius: 35/2,
    backgroundColor: '#FA4A0C',
    position: 'absolute',
    flexDirection: 'row',
    marginLeft: -10,
    marginTop: -10,
    shadowOffset: {
      width: 0,
      height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
 },
 panel: {
  height: '100%',
  padding: 20,
  backgroundColor: '#FFFFFF',
  paddingTop: 20,
  
},
header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  panelHeader: {
    alignItems: 'center'
  },
})

export default Shop
