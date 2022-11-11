import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Modal from 'react-native-modal'
import { WHITE } from '../../assets/colors';
import { hitSlop2020, WINDOW_HEIGHT } from '../../utils/style';

const GroupJoinedMorePopUp = ({ visible, setVisible }) => {
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
                    <View style={{ flex: 1 }}>
                        <Image style={{ width: 30, height: 30  , marginRight : 10}} source={require('../../assets/icons/mute.png')} />
                    </View>
                    <View style={{ flex: 10 }}>
                        <Text
                            style={styles.typeName}>
                            Mute Group
                        </Text>

                    </View>
                </View>
                <View
                    style={styles.typeWrapper}>
                    <View style={{ flex: 1 }}>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/icons/copyLink.png')} />
                    </View>
                    <View style={{ flex: 10 }}>
                        <Text
                            style={styles.typeName}>
                            Copy Group Link
                        </Text>
                    </View>
                </View>
                <View
                    style={styles.typeWrapper}>
                    <View style={{ flex: 1 }}>
                        <Image style={{ width: 20, height: 20 }} source={require('../../assets/icons/logout.png')} />
                    </View>
                    <View style={{ flex: 10 }}>
                        <Text
                            style={styles.typeName}>
                            Leave Group
                        </Text>
                    </View>
                </View>
                
            </View>

        </Modal>
    )
}

export default GroupJoinedMorePopUp

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
    typeName: { fontWeight: 'bold', color: '#051F4E', fontSize: 16 }
})