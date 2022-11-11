import { TouchableHighlight } from '@gorhom/bottom-sheet';
import react, { useState } from 'react';
import { Image, ScrollView, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import Modal from 'react-native-modal'
import { WHITE } from '../../assets/colors';
import CheckBox from '../../components/checkBox';
import { hitSlop2020, WINDOW_HEIGHT } from '../../utils/style'

const AvailableDropUp = ({ visible, setVisible }) => {
    const [selectedItem, setSelectedItem] = useState([]);
    const ARRAY = [
        "Finding Growth Partners",
        "Finding Visibility Partners",
        "Finding Business Partner",
        "Finding Selling Partners",
        "Finding a job at a company",
        "Working as a freelancer",
        "Working as consultant",
        "Create a new business",
        "Create a startup",
        "Being Co-host in a BN Room"
    ]
    const handledata = (item) => {
        setSelectedItem([...selectedItem, item])
    }
    console.log(selectedItem);
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
                    <Text style={styles.heading} >Availbale For </Text>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={{ padding: 20 }}>
                        {ARRAY.map((itme) => (
                            <TouchableOpacity onPress={() => handledata(itme)}>
                                <View style={{ flexDirection: 'row', borderBottomColor: '#77838F', borderBottomWidth: 1, paddingVertical: 15 }}>
                                    <CheckBox />
                                    <Text style={styles.label}>{itme}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
                <View style={{ height: 1, marginTop: 20, backgroundColor: '#051F4E' }}></View>
                <View style={{ padding: 30 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => setVisible(false)} >
                            <View style={[styles.btn, { backgroundColor: '#D1D5DB', }]}>
                                <Text style={{ fontSize: 16, color: '#303439', fontFamily: 'Inter-Bold' }}>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity >
                            <View style={[styles.btn, { backgroundColor: '#0F6BBF' }]}>
                                <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Inter-Bold' }}>Submit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}


export default AvailableDropUp;
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