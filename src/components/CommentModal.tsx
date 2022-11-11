import { StyleSheet, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { hitSlop2020, WINDOW_HEIGHT } from '../utils/style';
import { WHITE } from '../assets/colors'
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';
import moment from 'moment';
import { WINDOW_WIDTH } from '@gorhom/bottom-sheet';

const CommentModal = ({ postDetails, comments, visible, setVisible, sentPost }) => {
    const [ comment , setComment ] = useState('');
    console.log('commets', comments);
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
                <View style={{ alignItems: 'center' }}>
                    <Text style={styles.bigtext}>Comments</Text>
                </View>
                <ScrollView>
                    <View style={styles.border} />
                </ScrollView>
                <View style={styles.leftheader}>
                    {/* <View>
                        {userDetails.profilePicURL ? <Image style={styles.profile} source={{ uri: userDetails.profilePicURL }} /> : <Image style={styles.profile} source={require('../assets/icons/avatar.png')} />}
                    </View> */}
                    <View>
                        <Image style={styles.profile} source={require('../assets/icons/avatar.png')} />
                    </View>
                    <View style={{ borderWidth: 1, justifyContent: 'space-between' }}>
                        <TextInput onChange={(e) => setComment(e)} placeholder='Leave your thought over here' style={{ width: WINDOW_WIDTH - 120 }} />
                    </View>
                    <TouchableHighlight onPress={sentPost(comment, postDetails)}>
                        <View><Text>post</Text></View>
                    </TouchableHighlight>
                </View>
            </View>
        </Modal>
    )
}

export default CommentModal

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',
        marginLeft: 0,
    },
    modalWrapper: {
        height: WINDOW_HEIGHT - 78,
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
    leftheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profile: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginRight: 8
    },
})
