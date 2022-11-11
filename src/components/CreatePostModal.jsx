import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { hitSlop2020, WINDOW_HEIGHT } from '../utils/style';
import { WHITE } from '../assets/colors'

const CreatePostModal = ({ visible, setVisible }) => {
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
                <TouchableOpacity style={styles.container}>
                    <Image source={require('../assets/icons/image.png')} style={{ height: 18, width: 18 }} />
                    <Text style={styles.smalltext}>Add a photo</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={require('../assets/icons/video.png')} style={{ height: 22, width: 22 }} />
                    <Text style={styles.smalltext}>Add a video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={require('../assets/icons/camera.png')} style={{ height: 22, width: 22 }} />
                    <Text style={styles.smalltext}>Camera</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={require('../assets/icons/register.png')} style={{ height: 22, width: 22 }} />
                    <Text style={styles.smalltext}>Register a video</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={require('../assets/icons/document.png')} style={{ height: 18, width: 18 }} />
                    <Text style={styles.smalltext}>Add a document</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={require('../assets/icons/article.png')} style={{ height: 18, width: 19 }} />
                    <Text style={styles.smalltext}>Write article</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container}>
                    <Image source={require('../assets/icons/poll.png')} style={{ height: 18, width: 19 }} />
                    <Text style={styles.smalltext}>Create a poll</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

export default CreatePostModal

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',
        marginLeft: 0,
    },
    modalWrapper: {
        height: WINDOW_HEIGHT - 308,
        marginTop: 308,
        backgroundColor: WHITE,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingHorizontal: 16
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
    bigtext: {
        color: '#051F4E',
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20
    },
    border: {
        borderWidth: 1,
        borderColor: '#051F4e'
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 32
    },
    smalltext: {
        color: '#051F4E',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 17,
        marginLeft: 17
    },
})