import React, { useState } from "react";
import { StyleSheet, Pressable, TouchableOpacity, Text, TextInput, View, Image, ScrollView } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch } from "react-redux";
import { getProfileData, UpdateUserDetails } from "../../api/api";
import { saveProfile } from "../../redux/features/myProfile";

const COUNTRY = [
    { label: 'Afghanistan', value: 'Afghanistan' },
    { label: 'land Islands', value: 'land Islands' },
    { label: 'American', value: 'American' },
    { label: 'Antarctica', value: 'Antarctica' },
    { label: 'Mexico', value: 'Mexico' },
];
const AddExperiance = ({ route, navigation }) => {
    const { type, education } = route.params;
    console.log('Experiance OBJ ', education);
    const dispatch = useDispatch();
    const [formValues, setFormValues] = useState([
        {
            role: education && education.role ? education.role : '',
            companyName: education && education.companyName ? education.companyName : '',
            location: education && education.location ? education.location : '',
            employmentType: education && education.employmentType ? education.employmentType : '',
            startDate: education && education.startDate ? education.startDate : '',
            endDate: education && education.endDate ? education.endDate : '',
            skills: education && education.skills ? education.skills : []
        },
    ]);
    console.log('FORMDATA ', formValues);
    const handleChange = (institute, i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][institute] = e;
        setFormValues(newFormValues);
    };
    const addFormFields = () => {
        setFormValues([...formValues, { role: '', location: '', companyName: '', startDate: '', employmentType: '', endDate: '', skills: [] }]);
    };

    const removeFormFields = i => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    };
    const handleUpdate = async () => {
        let obj = {
            "operationType": type,
            "educationDetails": formValues,
            "key": "experience",
        }
        if (education && education.id) {
            obj = {
                "operationType": type,
                "educationDetails": formValues,
                "key": "experience",
                "id": education && education.id
            }
        }
        console.log("PayLoad", obj);
        const updateResonse = await UpdateUserDetails(obj)
        console.log('UpdateDescrption', updateResonse)
        if (updateResonse.data.message === "Details updated successfully." || "Details added successfully.") {
            (async () => {
                const profileData = await getProfileData(null)
                console.log('Get Profile Result', profileData)
                dispatch(saveProfile(profileData?.data.data))
                navigation.navigate('profile')
            })();
        }

    }
    return (
        <View style={{ backgroundColor: 'white', padding: 15, flex: 1 }}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                {formValues.map((element, index) => (
                    <>
                        <Text
                            style={Style.label}>
                            Role *
                        </Text>
                        <View
                            style={Style.dropDownWrapper}>
                            <Dropdown
                                style={Style.dropdown}
                                placeholderStyle={Style.placeholderStyle}
                                selectedTextStyle={Style.selectedTextStyle}
                                inputSearchStyle={Style.inputSearchStyle}
                                iconStyle={Style.iconStyle}
                                data={COUNTRY}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Select"
                                searchPlaceholder="Search..."
                                value={formValues[0].role}
                                onChange={item => {
                                    handleChange('role', index, item.value);
                                }}
                            />
                        </View>
                         <Text
                            style={Style.label}>
                           Company Name *
                        </Text>
                        <TextInput
                            value={formValues[0].companyName}
                            onChangeText={e => handleChange('companyName', index, e)}
                            placeholder="Enter company Name *"
                            style={Style.inputBox}
                        />
                        <Text
                            style={Style.label}>
                            Select Skills*
                        </Text>

                        <View
                            style={Style.dropDownWrapper}>
                            <Dropdown
                                style={Style.dropdown}
                                placeholderStyle={Style.placeholderStyle}
                                selectedTextStyle={Style.selectedTextStyle}
                                inputSearchStyle={Style.inputSearchStyle}
                                iconStyle={Style.iconStyle}
                                data={COUNTRY}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Select"
                                searchPlaceholder="Search..."
                                value={formValues[0].skills}
                                onChange={item => {
                                    handleChange('skills', index, item.value);
                                    // setEducation(item.value);
                                }} />
                        </View>
                        <Text
                            style={Style.label}>
                            Select Location*
                        </Text>

                        <View
                            style={Style.dropDownWrapper}>
                            <Dropdown
                                style={Style.dropdown}
                                placeholderStyle={Style.placeholderStyle}
                                selectedTextStyle={Style.selectedTextStyle}
                                inputSearchStyle={Style.inputSearchStyle}
                                iconStyle={Style.iconStyle}
                                data={COUNTRY}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Select"
                                searchPlaceholder="Search..."
                                value={formValues[0].location}
                                onChange={item => {
                                    handleChange('location', index, item.value);
                                    // setEducation(item.value);
                                }} />
                        </View>
                        <Text
                            style={Style.label}>
                            Employment Type*
                        </Text>

                        <View
                            style={Style.dropDownWrapper}>
                            <Dropdown
                                style={Style.dropdown}
                                placeholderStyle={Style.placeholderStyle}
                                selectedTextStyle={Style.selectedTextStyle}
                                inputSearchStyle={Style.inputSearchStyle}
                                iconStyle={Style.iconStyle}
                                data={COUNTRY}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder="Select"
                                searchPlaceholder="Search..."
                                value={formValues[0].employmentType}
                                onChange={item => {
                                    handleChange('employmentType', index, item.value);
                                    // setEducation(item.value);
                                }} />
                        </View>
                        {/* <Text
                            style={Style.label}>
                            Field of Study *
                        </Text>
                        <TextInput
                            value={formValues[0].education}
                            onChangeText={e => handleChange('education', index, e)}
                            placeholder="Enter Field of Study"
                            style={Style.inputBox}
                        /> */}
                        {/* <Text
                            style={Style.label}>
                            Grades
                        </Text>
                        <TextInput
                            value={formValues[0].grades}
                            onChangeText={e => handleChange('grades', index, e)}
                            placeholder="Enter Add Grades"
                            style={Style.inputBox}
                        /> */}
                        <Text
                            style={Style.label}>
                            Start Date
                        </Text>
                        <TextInput
                            value={formValues[0].startDate}
                            onChangeText={e => handleChange('startDate', index, e)}
                            placeholder="Enter StartDate"
                            style={Style.inputBox}
                        />
                        <Text
                            style={Style.label}>
                            End Date
                        </Text>
                        <TextInput
                            value={formValues[0].endDate}
                            onChangeText={e => handleChange('endDate', index, e)}
                            placeholder="Enter EndDate"
                            style={Style.inputBox}
                        />
                    </>
                ))}

                {type !== 'update' &&
                    <Pressable onPress={() => addFormFields()}>
                        <View style={Style.btnBox}>
                            <Image style={{ width: 15, height: 15 }} source={require('../../assets/icons/PlusIcon.png')} />
                            <Text style={{ color: '#0F6BBF', fontWeight: 'bold', fontSize: 15 }}>
                                Add More
                            </Text>
                        </View>
                    </Pressable>
                }
            </ScrollView>
            <View>
                <View style={{ padding: 30, backgroundColor: 'white' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('profile')}>
                            <View style={[Style.btn, { backgroundColor: '#D1D5DB', }]}>
                                <Text style={{ fontSize: 16, color: '#303439', fontFamily: 'Inter-Bold' }}>Cancel</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleUpdate()}>
                            <View style={[Style.btn, { backgroundColor: '#0F6BBF' }]}>
                                <Text style={{ fontSize: 16, color: 'white', fontFamily: 'Inter-Bold' }}>Submit</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
const Style = StyleSheet.create({
    dropdown: {
        paddingHorizontal: 10,
        height: 50,
        borderBottomColor: 'gray',
    },
    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    inputBox: {
        fontSize: 14,
        height: 50,
        marginTop: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#D1D5DB',
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    btnBox: {
        marginVertical: 20,
        width: '35%',
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderColor: '#0F6BBF',
        borderWidth: 1,
        padding: 10,
        borderRadius: 50,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btn: {
        borderRadius: 50,
        height: 49,
        justifyContent: 'center',
        alignItems: 'center',
        width: 120,
    },
    dropDownWrapper: {
        borderColor: '#D1D5DB',
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 10,
    },
    label: {
        marginTop: 10,
        color: '#051F4E',
        fontSize: 16,
    }
});
export default AddExperiance; 