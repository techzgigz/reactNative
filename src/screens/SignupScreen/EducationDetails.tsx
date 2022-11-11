import React, { useState } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import SignUpheader from '../../components/SignupHeader/Signupheader';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import Plusicon from '../../assets/icons/PlusIcon.png';
import uploadimg from '../../assets/icons/upload.png';
import style from '../../../storybook/stories/Button/style';
import { Dropdown } from 'react-native-element-dropdown';

import {
  saveUserInstitute,
  saveUserCertificates,
  saveUserLanguages,
} from '../../redux/features/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
const COUNTRY = [
  { label: 'Afghanistan', value: 'Afghanistan' },
  { label: 'land Islands', value: 'land Islands' },
  { label: 'American', value: 'American' },
  { label: 'Antarctica', value: 'Antarctica' },
  { label: 'Mexico', value: 'Mexico' },
];
const LANGUAGES = [
  { label: 'English', value: 'English' },
  { label: 'French', value: 'French' },
  { label: 'Hidni', value: 'Hindi' },
  { label: 'Antarctica', value: 'Antarctica' },
  { label: 'Mexican', value: 'Mexican' },
];
const LEVELS = [
  { label: 'Basic', value: 'Basic' },
  { label: 'Intermidiate', value: 'Intermidiate' },
  { label: 'Very Good', value: 'good' },
];

const EducationDetails = ({ navigation }) => {
  const [value, setValue] = useState([]);
  const [education, setEducation] = useState(null);
  const dispatch = useDispatch();
  // For handling Intitutues
  const [formValues, setFormValues] = useState([
    {
      institute: '',
      education: '',
      endDate: '2021-12-23',
      startDate: '2021-12-23',
    },
  ]);
  const [cetrtificatesData, setCetrtificatesData] = useState([
    { uploadUrl: '', URL: '', description: '', title: '' },
  ]);
  const [languageSkills, setLanguageSkills] = useState([
    { spokenLanguage: '', level: '' },
  ]);

  const handleChange = (institute, i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][institute] = e;
    setFormValues(newFormValues);
  };

  const addFormFields = () => {
    setFormValues([...formValues, { institute: '', education: '', startDate: '', endDate: '' }]);
  };

  const removeFormFields = i => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  //Ends Here
  // CertiFicates Starts Here

  const addCertificateFields = () => {
    setCetrtificatesData([
      ...cetrtificatesData,
      { uploadUrl: '', URL: '', description: '', title: '' },
    ]);
  };
  const handleCetrificateChange = (type, i, e) => {
    let newCartificateValues = [...cetrtificatesData];
    newCartificateValues[i][type] = e;
    setCetrtificatesData(newCartificateValues);
  };
  // Ends Here

  // SPoken Language Here
  const handleSpokenChange = (type, i, e) => {
    let newLanguages = [...languageSkills];
    newLanguages[i][type] = e;
    setLanguageSkills(newLanguages);
  };

  const addSpokenFieldFields = () => {
    setLanguageSkills([...languageSkills, { spokenLanguage: '', level: '' }]);
  };

  //Ends here

  const handleUpload = index => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.8,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
      handleCetrificateChange(
        'uploadUrl',
        index,
        response && response.assets && response.assets[0].uri,
      );
    });
  };
  console.log('Jangra ', languageSkills);

  const handleSumbitData = () => {
    console.log(';Function callled ');
    dispatch(saveUserInstitute(formValues));
    dispatch(saveUserCertificates(cetrtificatesData));
    dispatch(saveUserLanguages(languageSkills));
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <SignUpheader
        heading={'Education Details'}
        screeNum={2}
        widthBox={'66%'}
      />
      <View style={{ backgroundColor: 'white', padding: 15, flex: 1 }}>
        {formValues.map((element, index) => (
          <>
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Institute*
            </Text>
            <View
              style={{
                borderColor: '#D1D5DB',
                height: 50,
                borderRadius: 8,
                borderWidth: 1,
                marginTop: 10,
              }}>
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
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={formValues.institute && formValues.institute[index]}
                onChange={item => {
                  handleChange('institute', index, item.value);
                  // setValue.push(item.value);
                }}
              />
            </View>
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Education*
            </Text>

            <View
              style={{
                borderColor: '#D1D5DB',
                height: 50,
                borderRadius: 8,
                borderWidth: 1,
                marginTop: 10,
              }}>
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
                placeholder="Select item"
                searchPlaceholder="Search..."
                value={formValues.education && formValues.education[index]}
                onChange={item => {
                  handleChange('education', index, item.value);
                  // setEducation(item.value);
                }} />
            </View>
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Start Date
            </Text>
            <TextInput
              onChangeText={e => handleChange('startDate', index, e)}
              placeholder="Enter StartDate"
              style={Style.inputBox}
            />
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              End Date
            </Text>
            <TextInput
              onChangeText={e => handleChange('endDate', index, e)}
              placeholder="Enter EndDate"
              style={Style.inputBox}
            />
          </>
        ))}
        <Pressable onPress={() => addFormFields()}>
          <View style={Style.btnBox}>
            <Image style={{ width: 15, height: 15 }} source={Plusicon} />
            <Text style={{ color: '#0F6BBF', fontWeight: 'bold', fontSize: 15 }}>
              Add More
            </Text>
          </View>
        </Pressable>
        <View
          style={{ height: 2, backgroundColor: '#D1D5DB', marginVertical: 10 }}
        />

        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#051F4E' }}>
          Certificates
        </Text>
        {cetrtificatesData.map((element, index) => (
          <>
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Upload Certificate
            </Text>
            <Pressable onPress={() => handleUpload(index)}>
              <View style={Style.uploadInputBox}>
                <Image style={{ width: 50, height: 50 }} source={uploadimg} />
                <Text style={{ fontSize: 13, color: '#77838F' }}>
                  Browse From Your System or Just Drag & Drop Here.. Size 200 x
                  200 / JPG, PNG
                </Text>
                <Text style={{ fontSize: 13, color: '#77838F' }}>
                  {cetrtificatesData && cetrtificatesData[index].uploadUrl}
                </Text>
              </View>
            </Pressable>

            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Name *
            </Text>
            <TextInput
              onChangeText={e => handleCetrificateChange('title', index, e)}
              placeholder="Enter name"
              style={Style.inputBox}
            />
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Url *
            </Text>
            <TextInput
              onChangeText={e => handleCetrificateChange('URL', index, e)}
              placeholder="Enter url"
              style={Style.inputBox}
            />
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Description *
            </Text>
            <TextInput
              onChangeText={e =>
                handleCetrificateChange('description', index, e)
              }
              placeholder="Enter description"
              multiline={true}
              numberOfLines={6}
              style={Style.MultiLineBox}
            />
          </>
        ))}

        <Pressable onPress={() => addCertificateFields()}>
          <View style={Style.btnBox}>
            <Image style={{ width: 15, height: 15 }} source={Plusicon} />
            <Text style={{ color: '#0F6BBF', fontWeight: 'bold', fontSize: 15 }}>
              Add More
            </Text>
          </View>
        </Pressable>

        <View
          style={{ height: 2, backgroundColor: '#D1D5DB', marginVertical: 10 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#051F4E' }}>
          Language Skills
        </Text>
        {languageSkills.map((element, index) => (
          <>
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Spoken Language *
            </Text>
            <View
              style={{
                borderColor: '#D1D5DB',
                height: 50,
                borderRadius: 8,
                borderWidth: 1,
                marginTop: 10,
              }}>
              <Dropdown
                style={Style.dropdown}
                placeholderStyle={Style.placeholderStyle}
                selectedTextStyle={Style.selectedTextStyle}
                inputSearchStyle={Style.inputSearchStyle}
                iconStyle={Style.iconStyle}
                data={LANGUAGES}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select language"
                searchPlaceholder="Search..."
                value={languageSkills.spokenLanguage && languageSkills.spokenLanguage[index]}
                onChange={item => {
                  handleSpokenChange('spokenLanguage', index, item.value);
                }} />
            </View>
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Level
            </Text>
            <View
              style={{
                borderColor: '#D1D5DB',
                height: 50,
                borderRadius: 8,
                borderWidth: 1,
                marginTop: 10,
              }}>
              <Dropdown
                style={Style.dropdown}
                placeholderStyle={Style.placeholderStyle}
                selectedTextStyle={Style.selectedTextStyle}
                inputSearchStyle={Style.inputSearchStyle}
                iconStyle={Style.iconStyle}
                data={LEVELS}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select level"
                searchPlaceholder="Search..."
                value={languageSkills.level && languageSkills.level[index]}
                onChange={item => {
                  handleSpokenChange('level', index, item.value);
                }} />
            </View>
          </>
        ))}
        <Pressable onPress={() => addSpokenFieldFields()}>
          <View style={Style.btnBox}>
            <Image style={{ width: 15, height: 15 }} source={Plusicon} />
            <Text style={{ color: '#0F6BBF', fontWeight: 'bold', fontSize: 15 }}>
              Add More
            </Text>
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('ExperianceDetails');
            handleSumbitData();
          }}>
          <View
            style={{
              marginVertical: 20,
              backgroundColor: '#0F6BBF',
              borderRadius: 50,
              height: 49,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
              Next
            </Text>
          </View>
        </Pressable>
      </View>
    </ScrollView>
  );
};
const Style = StyleSheet.create({
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
    color: '#77838F',
  },
  MultiLineBox: {
    fontSize: 14,
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D1D5DB',
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  uploadInputBox: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
    height: 150,
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
  dropdown: {
    // margin: 16,
    paddingHorizontal: 10,
    height: 50,
    borderBottomColor: 'gray',
    // borderBottomWidth: 0.5,
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
});
export default EducationDetails;
