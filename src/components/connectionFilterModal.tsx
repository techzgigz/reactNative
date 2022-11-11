import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { hitSlop2020, WINDOW_HEIGHT } from '../utils/style';
import { WHITE } from '../assets/colors'

const ConnectionFilterModal = ({ visible, setVisible }) => {

    const Card = () => {
        return (
            <View>

            </View>
        )
    }

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
                    <Text style={styles.bigtext}>Filter By </Text>
                </View>
                <View style={styles.border} />
            </View>
        </Modal>
    )
}

export default ConnectionFilterModal;

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
    }
})