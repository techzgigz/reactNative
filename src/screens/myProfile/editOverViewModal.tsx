import { TouchableHighlight } from '@gorhom/bottom-sheet';
import react, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal'
import { UpdateUserDetails } from '../../api/api';
import { WHITE } from '../../assets/colors';
import CheckBox from '../../components/checkBox';
import { hitSlop2020, WINDOW_HEIGHT } from '../../utils/style'

const EditOverViewModal = ({  data, visible, setVisible }) => {

     const [updatedValue, setUpdatedValue] = useState(data);
    console.log('update Value ' , updatedValue)
    const handleUpdate = () => {
        (async () => {
            const updateResonse = await UpdateUserDetails({ shortDescription: updatedValue, operationType: "update" })
            console.log('UpdateOver', updateResonse)
            setVisible(false)
        })();
        // setVisible(false);
    }
    return (
        <Modal
            style={styles.modal}
            backdropOpacity={0.4}
            isVisible={visible}
            onBackdropPress={() => setVisible(false)}
        >
            <ScrollView>
                <View style={styles.modalWrapper}>
                    <TouchableOpacity
                        hitSlop={hitSlop2020}
                        style={styles.buttonClose}
                        onPress={() => setVisible(false)}
                    >
                    </TouchableOpacity>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Image style={styles.backBtn} source={require('../../assets/icons/backBtn.png')} />
                        </TouchableOpacity>
                        <View><Text style={styles.heading}>Edit OverView</Text></View>
                    </View>
                    <View style={styles.divider}></View>
                    <Text style={styles.heading}> OverView</Text>
                    <View style={{ borderWidth: 1, marginVertical: 10, borderColor: '#D1D5DB', borderRadius: 8 }}>
                        <TextInput
                            value={updatedValue}
                            style={styles.input}
                            placeholder={'Edit your OverView...'}
                            onChangeText={(e) => setUpdatedValue(e)}
                        />
                    </View>
                </View>
            </ScrollView>
            {/* <View style={{ height: 1, marginTop: 20, backgroundColor: '#051F4E' }}></View>y */}
            <View style={{ padding: 30 , backgroundColor : 'white' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => setVisible(false)} >
                        <View style={[styles.btn, { backgroundColor: '#D1D5DB', }]}>
                            <Text style={{ fontSize: 16, color: '#303439', fontFamily: 'Inter-Bold' }}>Cancel</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handleUpdate()}>
                        <View style={[styles.btn, { backgroundColor: '#0F6BBF' }]}>
                            <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Inter-Bold' }}>Submit</Text>
                        </View>
                    </TouchableOpacity> 
                </View>
            </View>
        </Modal>
    )
}


export default EditOverViewModal;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',
        marginLeft: 0,
    },
    modalWrapper: {
        height: WINDOW_HEIGHT - 20 - 34,
        marginTop: 20 + 34,
        backgroundColor: WHITE,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        padding: 10
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
    heading: {
        color: '#051F4E',
        fontFamily: 'Inter',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 5
    },
    label: {
        fontSize: 13,
        fontFamily: 'Inter-SemiBold',
        color: 'black',
        letterSpacing: 0.5,
    },
    btn: {
        borderRadius: 50,
        height: 49,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
    },
    headerWrapper: {
        // padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
    },
    backBtn: {
        width: 20,
        height: 20,
        marginRight: 20
    },
    divider: {
        backgroundColor: '#D1D5DB',
        height: 1,
    },
    input: {
        padding: 10,
        lineHeight: 23,
        height: 200,
        textAlignVertical: 'top'
    },
});