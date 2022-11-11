import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { hitSlop2020, WINDOW_HEIGHT } from '../utils/style'
import { WHITE } from '../assets/colors'

const PostMoreModal = ({ visible, setVisible }) => {
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
                <View
            style={styles.typeWrapper}>
            <View style={{flex: 1}}>
              <Image style={{ width : 15 , height : 20 }} source={require('../assets/icons/save.png')} />
            </View>
            <View style={{flex: 10}}>
              <Text
                style={styles.typeName}>
                Save
              </Text>
              <Text style={{fontSize: 14}}>
              Save this item for later
              </Text>
            </View>
          </View>
          <View
            style={styles.typeWrapper}>
            <View style={{flex: 1}}>
              <Image style={styles.Img} source={require('../assets/icons/share.png')} />
            </View>
            <View style={{flex: 10}}>
              <Text
                style={styles.typeName}>
                Share via
              </Text>
              
            </View>
          </View>
          <View
            style={styles.typeWrapper}>
            <View style={{flex: 1}}>
              <Image style={styles.Img} source={require('../assets/icons/mute.png')} />
            </View>
            <View style={{flex: 10}}>
              <Text
                style={styles.typeName}>
                Mute MIranda Rose
              </Text>
              <Text style={{fontSize: 14}}>
              Stop seeing posts from Miranda in feed
              </Text>
            </View>
          </View>
          <View
            style={styles.typeWrapper}>
            <View style={{flex: 1}}>
              <Image style={styles.Img} source={require('../assets/icons/repost.png')} />
            </View>
            <View style={{flex: 10}}>
              <Text
                style={styles.typeName}>
                Report post
              </Text>
              <Text style={{fontSize: 14}}>
              This post is harmful, or spam
              </Text>
            </View>
          </View>
            </View>

        </Modal>
    )
}

export default PostMoreModal

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',
        marginLeft: 0,
    },
    modalWrapper: {
        height: WINDOW_HEIGHT - 390,
        marginTop: 390,
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
    typeWrapper: {
        alignItems: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row',
        marginVertical: 15,
    },
    typeName : {fontFamily : 'Inter-Bold', color: '#051F4E', fontSize: 16},
    Img : {width: 25, height: 27},
      
})