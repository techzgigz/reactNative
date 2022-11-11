import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Logo from '../../assets/icons/Logo.png';
import fb from '../../assets/icons/fb.png';
import Google from '../../assets/icons/Google.png';
import Linkedin from '../../assets/icons/Linkedin.png';
import Button from '../../components/Button';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { AccessToken, GraphRequest, LoginButton, GraphRequestManager, LoginManager } from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { google_signin, facebook_signin, linkedin_signin } from '../../api/api';
import LinkedInModal from 'react-native-linkedin';
import { useDispatch } from 'react-redux';
import { saveAuthProfile, saveUserToken } from '../../redux/features/AuthSlice';

const OnboardingScreen = ({ navigation }) => {

    const linkedRef = React.createRef();
    const dispatch = useDispatch()

    useEffect(() => {
        GoogleSignin.configure({
            webClientId: 'xxxx',
            offlineAccess: true,
            scopes: ['email'],
        });
        isSignedIn()
    })

    const googleSignIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn()

            const data = await google_signin(userInfo.idToken)
            console.log(data);
            
            if (data) {
                dispatch(saveUserToken(data.token))
                dispatch(saveAuthProfile(data.user))
            }
            else {
                Alert.alert('Somthing went wrong')
            }

        } catch (error) {
            console.log('message', error);
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                console.log('User Cancelled the login flow');
            } else if (error.code === statusCodes.IN_PROGRESS) {
                console.log('Signing in');
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                console.log('Play services Not available');
            } else {
                console.log('Some other error happened');
            }
        }
    }

    const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        if (!!isSignedIn) {
            getCurrentUserInfo()
        } else {
            console.log('please Login')
        }
    }

    const getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently()
            setUser(userInfo)
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // Alert.alert('User has not signed in yet')
                console.log('User has not signed in yet');
            } else {
                // Alert.alert('Something went wrong.')
                console.log('something went wrong');
            }
        }
    }

    const signOut = async () => {
        try {
            await GoogleSignin.revokeAccess()
            await GoogleSignin.signOut()
        } catch (error) {
            console.log(error)
        }
    }

    



    return (
        <View style={styles.container}>
            <Image
                source={Logo}
                style={styles.logo}
                resizeMode='contain'
            />
            <View>
                <Text style={styles.textbold}>Your Business Growth Tool</Text>
                <View style={{ marginTop: 8, marginBottom: 24 }}>
                    <Button
                        imguri={Google}
                        lable={'Join with Google'}
                        stylecontainer={styles.buttonstyle}
                        lablestyle={styles.labelstyle}
                        onPress={googleSignIn}
                    />
                    
                    {/* <LoginButton
                        onLoginFinished={
                            (error, result) => {
                                if (error) {
                                    alert("login has error: " + result.error);
                                } else if (result.isCancelled) {
                                    alert("login is cancelled.");
                                } else {

                                    AccessToken.getCurrentAccessToken().then(
                                        (data) => {
                                            let accessToken = data.accessToken
                                            alert(accessToken.toString())

                                            const responseInfoCallback = (error, result) => {
                                                if (error) {
                                                    console.log(error)
                                                    alert('Error fetching data: ' + error.toString());
                                                } else {
                                                    console.log(result)
                                                    alert('Success fetching data: ' + result.toString());
                                                }
                                            }

                                            const infoRequest = new GraphRequest(
                                                '/me',
                                                {
                                                    accessToken: accessToken,
                                                    parameters: {
                                                        fields: {
                                                            string: 'email,name,first_name,middle_name,last_name,'
                                                        }
                                                    }
                                                },
                                                responseInfoCallback

                                            );

                                            new GraphRequestManager().addRequest(infoRequest).start()

                                        }
                                    )

                                }
                            }
                        }
                        onLogoutFinished={() => alert("logout.")} /> */}
                    <Button
                        imguri={fb}
                        lable={'Join with Facebook'}
                        stylecontainer={styles.buttonstyle}
                        lablestyle={styles.labelstyle}
                        // onPress={Facebook_login}
                    />

                </View>
                <View style={[styles.rowcontainer, { justifyContent: 'space-between' }]}>
                    <View style={styles.border} />
                    <Text style={styles.smallfont}>or</Text>
                    <View style={styles.border} />
                </View>
                <View>
                    <Button
                    onPress={()=> navigation.navigate('SignupStack')}
                        lable={'Join Now'}
                        stylecontainer={styles.buttonstyle}
                        lablestyle={styles.labelstyle2}
                    />
                </View>
                <View style={{ marginTop: 16 }}>
                    <View style={styles.rowcontainer}>
                        <Text style={styles.smallfont}>By clicking Agree & Sign up, you agree to </Text>
                        <TouchableOpacity>
                            <Text style={styles.smallfontbold}>Terms &</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rowcontainer}>
                        <TouchableOpacity>
                            <Text style={styles.smallfontbold}>Conditions</Text>
                        </TouchableOpacity>
                        <Text style={styles.smallfont}> and </Text>
                        <TouchableOpacity>
                            <Text style={styles.smallfontbold}>Privacy Policy.</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={[styles.rowcontainer, { justifyContent: 'center' }]}>
                <Text style={styles.smallfont}>Already a member?  </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
                    <Text style={styles.smallfontbold}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A400FF',
        paddingVertical: 24,
        paddingHorizontal: 16,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    logo: {
        height: 50,
        width: '100%'
    },
    textbold: {
        fontWeight: '700',
        fontSize: 20,
        lineHeight: 24,
        textAlign: 'center',
        color: '#FFFFFF'
    },
    buttonstyle: {
        height: 50,
        width: '100%',
        borderRadius: 25,
        marginTop: 16,
        backgroundColor: "#FFFFFF"
    },
    labelstyle: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        color: '#051F4E'
    },
    labelstyle2: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 17,
        color: '#A400FF'
    },
    rowcontainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    smallfont: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        color: '#FFFFFF'
    },
    smallfontbold: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 17,
        color: '#FFFFFF',
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: 1
    },
    border: {
        borderColor: '#FFFFFF',
        width: '40%',
        borderBottomWidth: 0.5
    }
})