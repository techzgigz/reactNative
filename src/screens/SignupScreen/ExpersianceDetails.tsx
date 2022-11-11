import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import SignUpheader from '../../components/SignupHeader/Signupheader';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import Plusicon from '../../assets/icons/PlusIcon.png';
import uploadimg from '../../assets/icons/upload.png';
import style from '../../../storybook/stories/Button/style';
import {useDispatch, useSelector} from 'react-redux';
import {saveAuthProfile, saveUserExperiance, saveUserSignupData, saveUserToken} from '../../redux/features/AuthSlice';
import { Dropdown } from 'react-native-element-dropdown';
import CheckBox from '../../components/checkBox';
import { signUp } from '../../api/api';

const ROLES = [
  { label: 'teacher', value: 'teacher' },
  { label: 'Student', value: 'Student' },
  { label: 'employe', value: 'employe' },
];
const ExperianceDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    userToken,
    personDetails,
    userExperiance,
    userInstitute,
    userCertificates,
    userLanguages,
  } = useSelector(state => state.userLogin);
  console.log('DATA ARUN ', personDetails);
  const [isSelected, setSelection] = useState(false);

  const [experianceDetailsData, setExperianceDetailsData] = useState([
    {role: '', location: '', startDate: '2021-12-23', endDate: '2021-12-23', description: ''},
  ]);
  console.log('experianceDetailsData', experianceDetailsData);
  console.log('TOken ', userToken && userToken.token);

  const addExperianceFields = () => {
    setExperianceDetailsData([
      ...experianceDetailsData,
      {
        role: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };
  const handleExperainceChange = (type, i, e) => {
    let newEperianceValues = [...experianceDetailsData];
    newEperianceValues[i][type] = e;
    setExperianceDetailsData(newEperianceValues);
  };
  const handleUpload = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 0.8,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);
    });
  };
  const handleSumbit = async () => {
    dispatch(saveUserExperiance(experianceDetailsData));
   // signUp
   let formData = {
    firstName: personDetails && personDetails.name,
    lastName: personDetails && personDetails.surName,
    email: personDetails && personDetails.email,
    alternateEmail: personDetails && personDetails.alternateEmail,
    phone: personDetails && personDetails.mobile,
    alternatePhone: personDetails && personDetails.alternateMobile,
    country: personDetails && personDetails.country,
    state: personDetails && personDetails.State,
    city: personDetails && personDetails.city,
    countryCode: '+91',
    profilePicURL: '',
    websiteURL: personDetails && personDetails.websiteUrl,
    shortDescription: personDetails && personDetails.Overview,
    briefDescription: personDetails && personDetails.FullDescription,
    educationDetails: userInstitute,
    languageSkills: userLanguages,
    experience: userExperiance,
    certificate: userCertificates,
  }
  console.log('formData : -' , formData);
   const data = await signUp(formData);
   console.log('DATA : -' , data);
   if (data) {
    dispatch(saveUserSignupData(data))
    navigation.navigate('RedirectDhashBoard')
   }
   else {
     Alert.alert('Somthing went wrong');
     navigation.navigate('RedirectDhashBoard')
   }    
   console.log('Function ends ');
  };

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <SignUpheader
        heading={'Experience Details'}
        screeNum={3}
        widthBox={'100%'}
      />

      <View style={{backgroundColor: 'white', padding: 15, flex: 1}}>
        {experianceDetailsData.map((element, index) => (
          <>
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Role <Text style={{color: 'red'}}>*</Text>
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
            data={ROLES}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Select item"
            searchPlaceholder="Search..."
            // value={value}
            onChange={item => {
              handleExperainceChange('role', index, item.value);
            }}/>
            </View>

            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Location *
            </Text>
            <TextInput
              onChangeText={e => handleExperainceChange('location', index, e)}
              placeholder="Enter location"
              style={Style.inputBox}
            />
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              Start Date *
            </Text>
            <TextInput
              onChangeText={e => handleExperainceChange('startDate', index, e)}
              placeholder="Enter StateDate"
              style={Style.inputBox}
              keyboardType='name-phone-pa'
            />
            <Text
              style={{
                marginTop: 10,
                color: '#051F4E',
                fontSize: 16,
              }}>
              End Date *
            </Text>
            <TextInput
              onChangeText={e => handleExperainceChange('endDate', index, e)}
              placeholder="Enter EndDate"
              style={Style.inputBox}
            />
            <View style={Style.checkboxContainer}>
              {/* <CheckBox
                value={isSelected}
                onValueChange={() => setSelection(true)}
                disabled={false}
                style={Style.checkbox}
              /> */}
              <CheckBox />
              <Text style={Style.label}>Currently Working</Text>
            </View>
            
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
                handleExperainceChange('description', index, e)
              }
              placeholder="Enter full description"
              multiline={true}
              numberOfLines={6}
              style={Style.MultiLineBox}
            />
          </>
        ))}

        <Pressable onPress={e => addExperianceFields()}>
          <View style={Style.btnBox}>
            <Image style={{width: 15, height: 15}} source={Plusicon} />
            <Text style={{color: '#0F6BBF', fontWeight: 'bold', fontSize: 15}}>
              Add More
            </Text>
          </View>
        </Pressable>

        {/* <Pressable onPress={() => navigation.navigate('RedirectDhashBoard')}> */}
        <Pressable onPress={()=> handleSumbit()}>
          <View
            style={{
              marginVertical: 20,
              backgroundColor: '#0F6BBF',
              borderRadius: 50,
              height: 49,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
              Sumbit
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
  checkboxContainer: {
    alignItems : 'center',
    flexDirection: 'row',
    marginVertical: 15,
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 5,
    color: '#051F4E',
    fontWeight: 'bold',
    fontSize: 15,
  },
  dropdown: {
    // margin: 16,
    height: 50,
    paddingHorizontal: 10 , 
    // borderBottomColor: 'gray',
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
export default ExperianceDetails;
