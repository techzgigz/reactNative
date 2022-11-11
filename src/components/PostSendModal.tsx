import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect , useState } from 'react'
import Modal from 'react-native-modal'
import { hitSlop2020, WINDOW_HEIGHT } from '../utils/style'
import { WHITE } from '../assets/colors'
import { TextInput } from 'react-native-gesture-handler'
import { useFocusEffect } from '@react-navigation/native'

const PostSendModal = ({ visible, setVisible }) => {
  useEffect(()=>{
    // getUserSuggestedList();
  },[])
  // const getUserSuggestedList = async () => {
  //   console.log('GetUserSuggestedList :- ');
  //   await fetch(
  //     'https://userapi.yliway.com/user/api/v1/connections/peopleYouMayKnow',
  //     {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //         Authorization:
  //           'Bearer ' +
  //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjhmY2ZiYzdhLWE3YWEtNGFiOC1hODczLWEwZTFhOGFkNzllZCIsImFsZ29yaXRobSI6IkhTMjU2IiwiZXhwIjoxNjY2NzA2MzExLCJpYXQiOjE2NjY2NzM5MTF9.LNAJmHEESy4Nap_wUjmV3_fbV7edvbqGE-S-jc5RSVo',
  //       },
  //       body: JSON.parse(
  //         JSON.stringify({
  //           page: 1,
  //           pagesize: 10,
  //           searchText: '',
  //         }),
  //       ),
  //     },
  //   )
  //     .then(response => response.json())
  //     .then(response => {
  //       if (response) {
  //         console.log('result', response);
  //         if (response.status === 1) {
  //         }
  //       } else {
  //         console.log('result Failed');
  //       }
  //     })
  //     .catch(err => {
  //       console.log('Error Failed', err);
  //     });
  // };

    return (
        <Modal
            style={styles.modal}
            backdropOpacity={0.4}
            isVisible={visible}
            onBackdropPress={() => setVisible(false)}
        >
            <View style={styles.modalWrapper}>
                <TouchableOpacity
                    hitSlop={hitSlop2020}
                    style={styles.buttonClose}
                    onPress={() => setVisible(false)}
                />
                <View style={{flex: 1, paddingBottom: 20}}>
            <View
              style={{
                flexDirection: 'row',
                marginVertical: 10,
                paddingHorizontal: 20,
              }}>
              <View>
                <Image style={styles.profileImg} source={require('../assets/icons/profile.jpg')} />
              </View>
              <View>
                <TextInput
                  style={{
                    color: 'black',
                    fontSize: 16,
                    paddingHorizontal: 10,
                  }}
                  placeholder="write a message..."
                />
              </View>
            </View>
            <View style={{backgroundColor: '#D1D5DB', height: 1}} />
            <View
              style={styles.inputBox}>
              <View style={{flex: 1}}>
                <Image style={{width: 20, height: 20}} source={require('../assets/icons/search.png')} />
              </View>
              <View style={{flex: 10}}>
                <TextInput
                  style={{
                    color: 'black',
                    fontSize: 16,
                    paddingHorizontal: 10,
                  }}
                  placeholder="Email or Mobile Number"
                />
              </View>
              <View style={{flex: 1}}>
                <Image style={{width: 25, height: 25 }} source={require('../assets/icons/people.png')} />
              </View>
            </View>
            {/* Cards State From Here  */}

                <View
                style={styles.sendCard}>
                <View style={{flex: 2}}>
                    <Image style={styles.profileImg} source={require('../assets/icons/profile.jpg')} />
                </View>
                <View style={{flex: 9}}>
                    <Text
                    style={{
                        color: '#051F4E',
                        fontWeight: 'bold',
                        fontSize: 16,
                    }}>
                    Leilany Weaver
                    </Text>
                </View>
                <View style={{flex: 2}}>
                    <Text
                    style={{fontFamily : 'Inter-Bold' ,color: '#0F6BBF', fontSize: 16}}>
                    Send
                    </Text>
                </View>
                </View>
                <View
                style={styles.sendCard}>
                <View style={{flex: 2}}>
                    <Image style={styles.profileImg} source={require('../assets/icons/profile.jpg')} />
                </View>
                <View style={{flex: 9}}>
                    <Text
                    style={{
                        color: '#051F4E',
                        fontFamily : 'Inter-Bold',
                        fontSize: 16,
                    }}>
                    Kayla
                    </Text>
                </View>
                <View style={{flex: 2}}>
                    <Text
                    style={{color: '#0F6BBF', fontFamily : 'Inter-Bold', fontSize: 16}}>
                    Send
                    </Text>
                </View>
                </View>
            {/* Ends Here  */}
          </View>
            </View>

        </Modal>
    )
}

export default PostSendModal

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',
        marginLeft: 0,
    },
    modalWrapper: {
        height: WINDOW_HEIGHT -78,
        marginTop: 78,
        backgroundColor: WHITE,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    buttonClose: {
        height: 5,
        width: 36,
        borderRadius: 4,
        backgroundColor: '#999999',
        marginTop: 9,
        marginBottom: 9,
        alignSelf: 'center',
    },
    inputBox : {
        flexDirection: 'row',
        marginVertical: 20,
        paddingHorizontal: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#D1D5DB',
      },
      sendCard: {
        flexDirection: 'row',
        marginTop: 20,
        paddingHorizontal: 20,
        // marginHorizontal: 10,
        alignItems: 'center',
      },
    profileImg :{width: 40, height: 40 , borderRadius : 50 }
})