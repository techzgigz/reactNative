import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { hitSlop2020, WINDOW_HEIGHT } from '../utils/style'
import { WHITE } from '../assets/colors'

const PostShareModal = ({ visible, setVisible }) => {
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
              <Image style={{width: 20, height: 20}} source={require('../assets/icons/refresh.png')} />
            </View>
            <View style={{flex: 10}}>
              <Text
                style={styles.typeName}>
                Repost
              </Text>
              <Text style={{fontSize: 14}}>
                Instantly bring Miranda’s post to other’s feeds
              </Text>
            </View>
          </View>
          <View
            style={styles.typeWrapper}>
            <View style={{flex: 1}}>
              <Image style={{width: 20, height: 20}} source={require('../assets/icons/edit.png')} />
            </View>
            <View style={{flex: 10}}>
              <Text
                style={styles.typeName}>
                Share with your Thought
              </Text>
              <Text style={{fontSize: 14}}>
                Create a new post with Miranda’s post attached
              </Text>
            </View>
          </View>
            </View>

        </Modal>
    )
}

export default PostShareModal

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',
        marginLeft: 0,
    },
    modalWrapper: {
        height: WINDOW_HEIGHT - 450,
        marginTop: 450,
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
      typeName: {fontWeight: 'bold', color: '#051F4E', fontSize: 16}
})