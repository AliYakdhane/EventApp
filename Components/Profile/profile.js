import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Alert,
  Modal} from 'react-native'
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


const Profile = ({navigation}) => {

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
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
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
                        <TouchableOpacity onPress={() => props.navigation.navigate('profile')}>
                            <Avatar.Image 
                                source={require('../../assets/man.jpg')}
                                size={150}
                            />
                        </TouchableOpacity>
                            
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#ffffff', marginTop: 10 }}>User Name</Text>
                            <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>Publications</Paragraph>
                                <Caption style={styles.caption}>750</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>Abonnés</Paragraph>
                                <Caption style={styles.caption}>633</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={styles.paragraph}>Abonnements</Paragraph>
                                <Caption style={styles.caption}>300</Caption>
                            </View>
                        </View>
        </View>

                        <TouchableOpacity
                        onPress={() => navigation.navigate('editprofile')} 
                        style={{flexDirection:'column', width: '60%', height: 50, backgroundColor: '#FA4A0C', borderRadius: 30, alignSelf: 'center'}}>
                                <Text style={{ fontWeight:'bold', fontSize: 15, color: '#ffffff', alignSelf: 'center', padding: 15 }}>Modifier Profil</Text>
                                
                        </TouchableOpacity>

                        <View
                        style={{
                        borderBottomColor: '#ffffff',
                        borderBottomWidth: 1,
                        width: '90%',
                        marginTop: 20,
                        alignSelf: "center"
                        }}
                        opacity={0.5}
                    />

                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 15, marginLeft: 40, marginRight: 40 }}>
                    <TouchableOpacity>

                    <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M8.02229 0H1.08636C0.626746 0 0.250702 0.376044 0.250702 0.835654V7.77158C0.250702 8.23119 0.626746 8.60724 1.08636 8.60724H8.02229C8.4819 8.60724 8.85794 8.23119 8.85794 7.77158V0.835654C8.85794 0.376044 8.4819 0 8.02229 0ZM7.2702 7.0195H1.92201V1.67131H7.2702V7.0195Z" fill="#FA4A0C"/>
                    <Path d="M18.468 0H11.532C11.0724 0 10.6964 0.376044 10.6964 0.835654V7.77158C10.6964 8.23119 11.0724 8.60724 11.532 8.60724H18.468C18.9276 8.60724 19.3036 8.23119 19.3036 7.77158V0.835654C19.3036 0.376044 18.9276 0 18.468 0ZM17.7159 7.0195H12.3677V1.67131H17.7159V7.0195Z" fill="#FA4A0C"/>
                    <Path d="M8.02229 10.5293H1.08636C0.626746 10.5293 0.250702 10.9053 0.250702 11.365V18.3009C0.250702 18.7605 0.626746 19.1365 1.08636 19.1365H8.02229C8.4819 19.1365 8.85794 18.7605 8.85794 18.3009V11.365C8.85794 10.9053 8.4819 10.5293 8.02229 10.5293ZM7.2702 17.4652H1.92201V12.2006H7.2702V17.4652Z" fill="#FA4A0C"/>
                    <Path d="M18.468 10.5293H11.532C11.0724 10.5293 10.6964 10.9053 10.6964 11.365V18.3009C10.6964 18.7605 11.0724 19.1365 11.532 19.1365H18.468C18.9276 19.1365 19.3036 18.7605 19.3036 18.3009V11.365C19.3036 10.9053 18.9276 10.5293 18.468 10.5293ZM17.7159 17.4652H12.3677V12.2006H17.7159V17.4652Z" fill="#FA4A0C"/>
                    <Path d="M28.9137 0H21.9777C21.5181 0 21.1421 0.376044 21.1421 0.835654V7.77158C21.1421 8.23119 21.5181 8.60724 21.9777 8.60724H28.9137C29.3733 8.60724 29.7493 8.23119 29.7493 7.77158V0.835654C29.7493 0.376044 29.3733 0 28.9137 0ZM28.1616 7.0195H22.8134V1.67131H28.1616V7.0195Z" fill="#FA4A0C"/>
                    <Path d="M28.9137 10.5293H21.9777C21.5181 10.5293 21.1421 10.9053 21.1421 11.365V18.3009C21.1421 18.7605 21.5181 19.1365 21.9777 19.1365H28.9137C29.3733 19.1365 29.7493 18.7605 29.7493 18.3009V11.365C29.7493 10.9053 29.3733 10.5293 28.9137 10.5293ZM28.1616 17.4652H22.8134V12.2006H28.1616V17.4652Z" fill="#FA4A0C"/>
                    <Path d="M8.02229 21.3928H1.08636C0.626746 21.3928 0.250702 21.7689 0.250702 22.2285V29.1644C0.250702 29.624 0.626746 30.0001 1.08636 30.0001H8.02229C8.4819 30.0001 8.85794 29.624 8.85794 29.1644V22.2285C8.85794 21.7689 8.4819 21.3928 8.02229 21.3928ZM7.2702 28.4123H1.92201V23.0641H7.2702V28.4123Z" fill="#FA4A0C"/>
                    <Path d="M18.468 21.3928H11.532C11.0724 21.3928 10.6964 21.7689 10.6964 22.2285V29.1644C10.6964 29.624 11.0724 30.0001 11.532 30.0001H18.468C18.9276 30.0001 19.3036 29.624 19.3036 29.1644V22.2285C19.3036 21.7689 18.9276 21.3928 18.468 21.3928ZM17.7159 28.4123H12.3677V23.0641H17.7159V28.4123Z" fill="#FA4A0C"/>
                    <Path d="M28.9137 21.3928H21.9777C21.5181 21.3928 21.1421 21.7689 21.1421 22.2285V29.1644C21.1421 29.624 21.5181 30.0001 21.9777 30.0001H28.9137C29.3733 30.0001 29.7493 29.624 29.7493 29.1644V22.2285C29.7493 21.7689 29.3733 21.3928 28.9137 21.3928ZM28.1616 28.4123H22.8134V23.0641H28.1616V28.4123Z" fill="#FA4A0C"/>
                    </Svg>

                    </TouchableOpacity>

                        <Svg width="1" height="30" viewBox="0 0 1 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <Line x1="0.5" y1="2.18557e-08" x2="0.499999" y2="30" stroke="white" stroke-opacity="0.8"/>
                        </Svg>

                    <TouchableOpacity>

                    <Svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M24.831 1.00763C24.2056 0.382205 23.3717 0 22.4335 0H3.56648C2.62834 0 1.79444 0.382205 1.16901 1.00763C0.543582 1.63306 0.161377 2.46696 0.161377 3.4051V22.2374C0.161377 23.1755 0.543582 24.0095 1.16901 24.6349C1.79444 25.2256 2.62834 25.6078 3.56648 25.6078H8.25718L9.61228 27.2756L9.64702 27.3103L11.2106 29.2213C11.5233 29.6035 11.975 29.8468 12.4962 29.951C12.9479 30.0552 13.4691 29.9858 13.9555 29.812C14.1292 29.7425 14.2682 29.673 14.4072 29.5688C14.5115 29.4993 14.6157 29.3951 14.7199 29.2908C14.7547 29.2561 14.7547 29.2561 14.7894 29.2213L16.353 27.3103L16.3877 27.2756L17.7428 25.6078H22.4335C23.3717 25.6078 24.2056 25.2256 24.831 24.6001C25.4564 23.9747 25.8386 23.1408 25.8386 22.2027V3.4051C25.8386 2.46696 25.4564 1.63306 24.831 1.00763ZM24.0666 22.2374C24.0666 22.6891 23.8929 23.0713 23.5801 23.384C23.3022 23.662 22.8852 23.8705 22.4335 23.8705H17.2911C16.9784 23.8705 16.7352 24.0095 16.5615 24.2527L14.9979 26.129L14.9632 26.1637L13.3648 28.1095C13.3301 28.1095 13.3301 28.1442 13.2953 28.1442C13.1564 28.2137 12.9826 28.2137 12.8436 28.179C12.7394 28.1442 12.6352 28.1095 12.6004 28.0747L11.0369 26.1637L11.0021 26.129L9.43855 24.2179C9.43855 24.1832 9.4038 24.1832 9.4038 24.1484C9.23007 23.9052 8.9521 23.7662 8.67413 23.7662H3.56648C3.11478 23.7662 2.73258 23.5925 2.41986 23.2798C2.1419 23.0018 1.93342 22.5849 1.93342 22.1332V3.4051H1.96817C1.96817 2.95341 2.1419 2.5712 2.45461 2.25849C2.73258 1.98052 3.14953 1.77204 3.60123 1.77204H22.4335C22.8852 1.77204 23.2674 1.94577 23.5801 2.25849C23.8581 2.53645 24.0666 2.95341 24.0666 3.4051V22.2374Z" fill="white"/>
                    <Path d="M16.214 5.55936C15.3801 4.72546 14.2335 4.23901 12.9826 4.23901C11.7318 4.23901 10.5851 4.7602 9.75124 5.59411C8.91734 6.42801 8.39615 7.57463 8.39615 8.82548C8.39615 10.0763 8.91734 11.223 9.75124 12.0569C10.5851 12.856 11.7318 13.3772 12.9826 13.3772C14.2335 13.3772 15.3801 12.856 16.214 12.0221C17.0479 11.1882 17.5691 10.0416 17.5691 8.79073C17.5691 7.53988 17.0479 6.39326 16.214 5.55936ZM14.9631 10.806C14.4419 11.3272 13.747 11.6399 12.9826 11.6399C12.2182 11.6399 11.5233 11.3272 11.0021 10.806C10.4809 10.2848 10.1682 9.58989 10.1682 8.82548C10.2029 8.02632 10.5157 7.3314 11.0021 6.84496C11.5233 6.32377 12.2182 6.01106 12.9826 6.01106C13.747 6.01106 14.4419 6.32377 14.9631 6.84496C15.4843 7.36615 15.797 8.06107 15.797 8.82548C15.797 9.58989 15.4843 10.2848 14.9631 10.806Z" fill="white"/>
                    <Path d="M19.0284 15.3925C17.4649 14.4543 15.3454 13.8636 13.0174 13.8636C10.6894 13.8636 8.53515 14.4543 7.00633 15.3925C5.30377 16.4348 4.2614 17.8942 4.2614 19.5272V20.3611C4.22665 20.8476 4.6436 21.2645 5.13005 21.2645H20.87C21.3564 21.2645 21.7734 20.8823 21.7734 20.3611V19.5272C21.7734 17.8594 20.731 16.4001 19.0284 15.3925ZM5.99869 19.4925C6.03344 18.5196 6.76311 17.6162 7.87498 16.9213C9.16058 16.1221 10.9674 15.6357 12.9826 15.6357C14.9979 15.6357 16.8047 16.1221 18.0903 16.9213C19.2369 17.6162 19.9318 18.5196 19.9666 19.4925H5.99869Z" fill="white"/>
                    </Svg>

                    </TouchableOpacity>


                    
                </View>

                <View style={{ flexDirection: 'column', marginTop: 15 }}>

                <View style={{ flexDirection: 'row' }}>
                <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
                <Image
                style={{ width: '35%', height: 125, flex:1 }}
                source={require('../../assets/party.png')}
                />
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
    userInfoSection: {
        paddingLeft: 20,
      },
    caption: {
        fontSize: 13,
        lineHeight: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#ffffff'
      },
      row: {
        margin: 20,
        flexDirection: 'row',
        alignItems: 'center',
      },
      section: {
        flexDirection: 'column',
        alignItems: 'center',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 5
      },
      paragraph: {
        textAlign: 'center',
        color: '#ffffff',
      },
})

export default Profile
