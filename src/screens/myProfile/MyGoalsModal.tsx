import { TouchableHighlight } from '@gorhom/bottom-sheet';
import react from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Modal from 'react-native-modal'
import { WHITE } from '../../assets/colors';
import CheckBox from '../../components/checkBox';
import { hitSlop2020, WINDOW_HEIGHT } from '../../utils/style'

const  MyGoalsModal = ({ visible, setVisible }) => {
    const ARRAY = ["Banana", "Orange", "Apple", "Mango" , "Banana", "Orange", "Apple", "Mango"]
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
                >
                </TouchableOpacity>
                <View>
                    <Text style={styles.heading} > My Goals  </Text>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator ={ false}
                    showsVerticalScrollIndicator ={ false}
                >
                    <View style={{ padding: 20 }}>
                    {ARRAY.map((itme)=>(
                        <View style={{ flexDirection: 'row', borderBottomColor: '#77838F', borderBottomWidth: 1, paddingVertical: 15 }}>
                            <CheckBox />
                            <Text style={styles.label}>Finding Frowth Partners</Text>
                        </View>
                    ))}
                    </View>
                </ScrollView>
            </View>
        </Modal>
    )
}


export default MyGoalsModal;

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',
        marginLeft: 0,
    },
    modalWrapper: {
        height: WINDOW_HEIGHT - 180 - 34,
        marginTop: 180 + 34,
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
        paddingHorizontal: 10
    },
    btn: {
        borderRadius: 50,
        height: 49,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
    }
});